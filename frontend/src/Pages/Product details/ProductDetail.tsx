// react
import React, { useEffect, useState } from 'react';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ProductDetailsBox from '../../Components/ProductDetailsBox/ProductDetailsBox';
import ProductDetailsCm from '../../Components/ProductDetailsComments/ProductDetailsComments';
import ProductProperties from '../../Components/ProductProperties/ProductProperties';
import useSingleProduct from '../../Hooks/useSingleProduct';
import { useParams } from 'react-router-dom';
import ProductDetailsComments from '../../Components/ProductDetailsComments/ProductDetailsComments';

const ProductDetails = () => {
	// mounting side effects
	useEffect(() => {
		// change document title
		document.title = `تکنو | Technoshef - ${shortName}`;

		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	// url params
	const { shortName } = useParams();

	// GET product details from react query
	const { data } = useSingleProduct(String(shortName));

	// tsx
	return (
		<>
			<div className="flex flex-col justify-between">
				<Header />
				<main className="flex flex-col gap-y-5 md:gap-y-10">
					<ProductDetailsBox {...data} />
					<ProductProperties {...data} />
					{/* <ProductDetailsComments /> */}
				</main>
			</div>
			<Footer />
		</>
	);
};

export default ProductDetails;
