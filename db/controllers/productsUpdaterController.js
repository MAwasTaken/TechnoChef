// import express and mongoose
const express = require('express');
const { default: mongoose } = require('mongoose');

// import products model
const Products = require('./../models/products.old');
const newProducts = require('./../models/products.new');

// update database (products) controller
const productsUpdater = async (req, res) => {
    try {
        const products = await Products.find({}).exec();

        for (const data of products) {
            await newProducts.updateOne(
                { shortName: data.shortName, _id: data._id },
                {
                    $set: {
                        productName: data.productName,
                        category: data.category,
                        pricePerColor: [{
                            price: data.price,
                            finalPrice: data.finalPrice,
                            QTY: data.QTY,
                            productColor: data.productColor[0],
                            shortCode: Date.now()
                        }],
                        details: data.details,
                        cover: data.cover,
                        images: data.images,
                        description: data.description,
                        best_seller: data.best_seller
                    },
                    $setOnInsert: { shortName: data.shortName } // Insert new document if not found
                },
                { upsert: true } // Create new document if no match is found
            );

            console.log(`Updated product: ${data.shortName}`);
        }
        
        res
            .status(200)
            .json({ message: "Products database updated successfully" })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error', message: err.message });
    }
};

// get all products
const getAllProducts = async (req, res) => {
    try {
        const AllProducts = await newProducts.find();
        res
            .status(200)
            .json({ Products: AllProducts })
    } catch (err) {
        res
            .status(500)
            .json(err)
    }
}

module.exports = { productsUpdater, getAllProducts }