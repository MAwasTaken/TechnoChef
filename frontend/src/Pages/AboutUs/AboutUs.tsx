// react
import React, { useEffect } from 'react';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Services from '../../Components/BrandServices/Services';

// about us
const AboutUs: React.FC = () => {
	// mounting side effects
	useEffect(() => {
		// change document title
		document.title = 'تکنو | Technoshef - درباره ما';

		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	return (
		<>
			<Header />
			<div className="container">
				<main className="flex flex-col justify-center gap-y-10">
					<section className="flex gap-x-10 flex-col items-center gap-y-4">
						<img
							className="hidden md:block"
							src="./Images/AboutUs/aboutus.png"
							alt=""
							width="1200"
						/>
						<div className="flex flex-col justify-center gap-y-7 text-center">
							<h1 className="md:text-4xl text-2xl text-center font-bold">
								شرکت بازرگانی پارسیان سرو نیوساد
							</h1>
							<p className="text-gray-800 md:leading-9 text-justify md:text-lg text-base leading-7">
								شرکت بازرگانی لوازم خانگی پارسیان سرو نیوساد با برند تکنوشف بیش از یک دهه تجربه یکی
								از شرکت های پیشگام در زمینه توزیع و فروش لوازم خانگی می باشد . این شرکت کوشش دارد با
								افتخار نیازهای خانواده هارا در زمینه امور خانگی برآورده نماید. هدف ما اراءه محصولات
								با کیفیت با برند معتبر تکنو در پی توسعه فرهنگ مصرف پایدار خانواده است : تا یک همراه
								قابل اعتماد در امور خانه ها باشیم و بتوانیم بهترین خدمات را به مشتریان عزیزمان اراءه
								دهیم . متخصصان ما با برسی دقیق نیازهای بازار همواره در همه ی مراحل انتخاب خرید و
								فروش بهترین و برترین محصولات را به شما هموطنان عزیز اراءه میدهند . ما با بهره گیری
								از تجربه روزافزون و دانش فنی متخصصان به طور پیوسته در حال بهبود روش های خدمات رسانی
								و افزایش کیفیت محصولات خود هستیم . از جمله خدماتی که ما در اختیار مشتریان عزیزمان
								قرار میدهیم می توان به مشاوره فنی خدمات پس از فروش و تحویل سریع محصولات اشاره کرد .
								ما هم چنین اهمیت بالایی به نظرات و انتقادات مشتریانمان میدهیم و کوشش داریم تا با به
								کارگیری آن ها بهترین راه کار هارا در امور لوازم خانگی منزل شما پیشنهاد دهیم .
							</p>
						</div>
					</section>
					{/* <section className="flex gap-x-10 flex-row">
						<img
							src="./../../../public/Images/AboutUs/aboutus.png"
							alt=""
							width="900"
							loading="lazy"
						/>
						<div className="flex flex-col justify-center gap-y-7 text-center">
							<h1 className="text-4xl text-center font-bold">شرایط فروش محصولات</h1>
							<p className="text-gray-800 leading-6 text-base">
								شرکت بازرگانی لوازم خانگی پارسیان سرو نیوساد با برند تکنوشف بیش از یک دهه تجربه یکی
								از شرکت های پیشگام در زمینه توزیع و فروش لوازم خانگی می باشد . این شرکت کوشش دارد با
								افتخار نیازهای خانواده هارا در زمینه امور خانگی برآورده نماید. هدف ما اراءه محصولات
								با کیفیت با برند معتبر تکنو در پی توسعه فرهنگ مصرف پایدار خانواده است : تا یک همراه
								قابل اعتماد در امور خانه ها باشیم و بتوانیم بهترین خدمات را به مشتریان عزیزمان اراءه
								دهیم . متخصصان ما با برسی دقیق نیازهای بازار همواره در همه ی مراحل انتخاب خرید و
								فروش بهترین و برترین محصولات را به شما هموطنان عزیز اراءه میدهند . ما با بهره گیری
								از تجربه روزافزون و دانش فنی متخصصان به طور پیوسته در حال بهبود روش های خدمات رسانی
								و افزایش کیفیت محصولات خود هستیم . از جمله خدماتی که ما در اختیار مشتریان عزیزمان
								قرار میدهیم می توان به مشاوره فنی خدمات پس از فروش و تحویل سریع محصولات اشاره کرد .
								ما هم چنین اهمیت بالایی به نظرات و انتقادات مشتریانمان میدهیم و کوشش داریم تا با به
								کارگیری آن ها بهترین راه کار هارا در امور لوازم خانگی منزل شما پیشنهاد دهیم .
							</p>
						</div>
					</section> */}
					<section>
						<Services />
					</section>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default AboutUs;
