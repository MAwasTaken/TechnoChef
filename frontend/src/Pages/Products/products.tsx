// react
import React, { useEffect, useState } from 'react';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ProductBox from '../../Components/ProductBox/ProductBox';
import ProductCategories from '../../Components/ProductsCategories/ProductCategories';
import ProductPrice from '../../Components/ProductsPrice/ProductPrice';
import ProductSort from '../../Components/ProductSort/ProductSort';

// Products page
const Products = () => {
	// mounting side effects
	useEffect(() => {
		// change document title
		document.title = 'تکنو | Technoshef - ورود';

		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	// tsx
	return (
		<>
			<Header />
			<div className="container">
				<main className="flex flex-col justify-center pb-3 xl:flex-row xl:gap-x-10 xl:py-5 2xl:gap-x-20">
					{/* right side */}
					<aside className="flex h-max gap-y-10 md:flex-row md:gap-y-8 xl:sticky xl:top-10 xl:flex-col">
						<ProductCategories />
						<ProductPrice />
					</aside>
					{/* divider */}
					<div className="hidden xl:flex">
						<span className="bg-Dark/50 sticky top-10 h-full w-[2px]"></span>
					</div>
					{/* left side */}
					<section className="flex h-max flex-col gap-y-5">
						<ProductSort />
						{/* all products */}
						<div
							id="prod-all"
							className="flex flex-wrap items-center justify-center gap-x-7 gap-y-10 xl:w-[780px] 2xl:w-full"
						>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
							<ProductBox
								gradientColor="#b91c1c"
								colors={['#334155', '#ffffff', '#000000']}
								imageSrc="Images/Products/p1.png"
							/>
						</div>
					</section>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default Products;
