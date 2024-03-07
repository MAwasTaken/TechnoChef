// import express and mongoose
const express = require('express');
const { default: mongoose } = require('mongoose');

// import products model
const Users = require('../models/users.old');
const newUsers = require('../models/users.new');

// update database (users) controller
const usersUpdater = async (req, res) => {
    try {
        const oldUsers = await Users.find({}).exec();
        console.log(...oldUsers[7].basket.products);

        for (const data of oldUsers) {
            await newUsers.updateOne({ _id: data._id },
                {
                    $set: {
                        username: data.username,
                        password: data.password,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        phoneNumber: data.phoneNumber,
                        email: data.email,
                        postalCode: data.postalCode,
                        nationalCode: data.nationalCode,
                        address: data.address,
                        isAdmin: data.isAdmin,
                        emailVerified: data.emailVerified,
                        basket: {
                            products: data.basket.products,
                            totalPrice: data.totalPrice
                        }
                    }
                })
            // console.log(`Updated user: ${data.username}, ${data.email}`);
        }
        console.log(await newUsers.find().exec())
        res
            .status(200)
            .json({ message: "Users database updated successfully" })
    } catch (err) {
        console.error(err);
        res
            .status(500)
            .json({ error: 'Internal server error', message: err.message });
    }
}

module.exports = { usersUpdater }