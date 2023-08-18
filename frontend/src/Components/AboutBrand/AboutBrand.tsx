// react
import { useState } from 'react';

// packages
import { BsBuilding } from 'react-icons/bs';

// about brand
const AboutBrand: React.FC = () => {
	const [isInterest, setIsInterest] = useState<boolean>(false);

	// tsx
	return (
		<section className="container">
			<h2 className="font-Lalezar flex items-center gap-x-1 pt-4 text-sm text-yellow-500 drop-shadow-[0_0_8px_#f97316] md:gap-x-4 md:pt-8 md:text-3xl">
				<BsBuilding className="text-pink-500" />
				درباره تکنوشف
			</h2>
			<div className="flex items-start justify-between gap-x-10 md:gap-x-40">
				<p
					className={`mt-2 indent-5 text-[10px] text-gray-400 md:mt-4 md:indent-10 md:text-lg ${
						isInterest ? 'line-clamp-none' : 'line-clamp-5 '
					}`}
				>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
					است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
					تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
					در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
					افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
					زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
					راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
					جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
					ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
					متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
					نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
					درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
					بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
					کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
					تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
					اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
				</p>
				<div className="drop-shadow-[0_0_3px_#999] md:drop-shadow-[0_0_8px_#999]">
					<svg
						className="h-full w-20 rounded-lg md:w-40"
						xmlns="http://www.w3.org/2000/svg"
						x="0"
						y="0"
						version="1.1"
						viewBox="0 0 2320 2320"
					>
						<path fill="#0F172A" d="M0 0H2320V2320H0z"></path>
						<g transform="translate(160 160)">
							<defs>
								<linearGradient id="grad" gradientTransform="rotate(90)">
									<stop offset="5%" stopColor="#EAB308"></stop>
									<stop offset="95%" stopColor="#F97316"></stop>
								</linearGradient>
								<mask id="gmask">
									<path fill="#FFF" d="M0 0H100V100H0z" transform="matrix(.8 0 0 .8 800 0)"></path>
									<path fill="#FFF" d="M0 0H100V100H0z" transform="matrix(.8 0 0 .8 880 0)"></path>
									<path fill="#FFF" d="M0 0H100V100H0z" transform="matrix(.8 0 0 .8 1120 0)"></path>
									<path fill="#FFF" d="M0 0H100V100H0z" transform="matrix(.8 0 0 .8 1200 0)"></path>
									<path fill="#FFF" d="M0 0H100V100H0z" transform="matrix(.8 0 0 .8 640 80)"></path>
									<path fill="#FFF" d="M0 0H100V100H0z" transform="matrix(.8 0 0 .8 960 80)"></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1120 80)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1200 80)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1280 80)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 720 160)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1120 160)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 720 240)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 800 240)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1200 240)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 640 320)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 720 320)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 800 320)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 960 320)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1040 320)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1120 320)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1200 320)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 880 400)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1120 400)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1200 400)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 640 480)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 800 480)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 960 480)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1120 480)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1280 480)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 800 560)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 960 560)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1040 560)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1200 560)"
									></path>
									<path fill="#FFF" d="M0 0H100V100H0z" transform="matrix(.8 0 0 .8 0 640)"></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 160 640)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 320 640)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 480 640)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 800 640)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 880 640)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 960 640)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1040 640)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1200 640)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1280 640)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1600 640)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1840 640)"
									></path>
									<path fill="#FFF" d="M0 0H100V100H0z" transform="matrix(.8 0 0 .8 0 720)"></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 240 720)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 320 720)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 400 720)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 880 720)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 960 720)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1040 720)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1280 720)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1360 720)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1440 720)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1920 720)"
									></path>
									<path fill="#FFF" d="M0 0H100V100H0z" transform="matrix(.8 0 0 .8 0 800)"></path>
									<path fill="#FFF" d="M0 0H100V100H0z" transform="matrix(.8 0 0 .8 80 800)"></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 160 800)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 480 800)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 720 800)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 960 800)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1040 800)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1120 800)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1360 800)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1440 800)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1600 800)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1760 800)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1840 800)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1920 800)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 240 880)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 400 880)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 560 880)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 640 880)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 800 880)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 880 880)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 960 880)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1040 880)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1120 880)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1840 880)"
									></path>
									<path fill="#FFF" d="M0 0H100V100H0z" transform="matrix(.8 0 0 .8 0 960)"></path>
									<path fill="#FFF" d="M0 0H100V100H0z" transform="matrix(.8 0 0 .8 80 960)"></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 160 960)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 400 960)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 480 960)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 560 960)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 720 960)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1040 960)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1360 960)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1440 960)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1520 960)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1680 960)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1840 960)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1920 960)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 160 1040)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 240 1040)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 400 1040)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 640 1040)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 800 1040)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 880 1040)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1280 1040)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1360 1040)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1440 1040)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1680 1040)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1920 1040)"
									></path>
									<path fill="#FFF" d="M0 0H100V100H0z" transform="matrix(.8 0 0 .8 0 1120)"></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 160 1120)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 240 1120)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 480 1120)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 640 1120)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 800 1120)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1040 1120)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1440 1120)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1520 1120)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1760 1120)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1840 1120)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1920 1120)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 80 1200)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 160 1200)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 240 1200)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 320 1200)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 560 1200)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 880 1200)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1040 1200)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1120 1200)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1280 1200)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1440 1200)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1600 1200)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1840 1200)"
									></path>
									<path fill="#FFF" d="M0 0H100V100H0z" transform="matrix(.8 0 0 .8 0 1280)"></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 240 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 320 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 480 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 560 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 640 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 720 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 800 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 960 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1040 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1200 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1280 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1360 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1440 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1520 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1600 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1680 1280)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 640 1360)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 720 1360)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 800 1360)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 880 1360)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 960 1360)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1200 1360)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1280 1360)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1600 1360)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1680 1360)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1840 1360)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1920 1360)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 720 1440)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 880 1440)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 960 1440)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1200 1440)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1280 1440)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1440 1440)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1600 1440)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1680 1440)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1840 1440)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1920 1440)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 960 1520)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1040 1520)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1120 1520)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1280 1520)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1600 1520)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1680 1520)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1840 1520)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1920 1520)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 640 1600)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 720 1600)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 880 1600)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1120 1600)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1280 1600)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1360 1600)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1440 1600)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1520 1600)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1600 1600)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1680 1600)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1840 1600)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1920 1600)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 880 1680)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1200 1680)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1280 1680)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1520 1680)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1600 1680)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1680 1680)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1760 1680)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 640 1760)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 720 1760)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 800 1760)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1040 1760)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1200 1760)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1600 1760)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1920 1760)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 800 1840)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 880 1840)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1200 1840)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1280 1840)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1360 1840)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1440 1840)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1600 1840)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1680 1840)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1840 1840)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 640 1920)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 800 1920)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 960 1920)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1200 1920)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1280 1920)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1440 1920)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1520 1920)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1840 1920)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(.8 0 0 .8 1920 1920)"
									></path>
									<g fill="#FFF" transform="scale(5.6)">
										<path fill="none" d="M15 15H85V85H15z"></path>
										<path d="M85 0H0v100h100V0H85zm0 85H15V15h70v70z"></path>
									</g>
									<g fill="#FFF" transform="translate(1440) scale(5.6)">
										<path fill="none" d="M15 15H85V85H15z"></path>
										<path d="M85 0H0v100h100V0H85zm0 85H15V15h70v70z"></path>
									</g>
									<g fill="#FFF" transform="matrix(5.6 0 0 5.6 0 1440)">
										<path fill="none" d="M15 15H85V85H15z"></path>
										<path d="M85 0H0v100h100V0H85zm0 85H15V15h70v70z"></path>
									</g>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(2.4 0 0 2.4 160 160)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(2.4 0 0 2.4 1600 160)"
									></path>
									<path
										fill="#FFF"
										d="M0 0H100V100H0z"
										transform="matrix(2.4 0 0 2.4 160 1600)"
									></path>
								</mask>
							</defs>
							<path fill="url(#grad)" d="M0 0H2000V2000H0z" mask="url(#gmask)"></path>
						</g>
					</svg>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<button
					className="font-Lalezar mt-2 w-16 rounded-lg bg-gradient-to-r from-emerald-600 to-green-700 p-1.5 text-[10px] transition-all hover:bg-gradient-to-t md:mt-4 md:w-[100px] md:p-2 md:text-lg"
					onClick={() => setIsInterest(!isInterest)}
				>
					{isInterest ? 'بستن' : 'بیشتر بدانید'}
				</button>
			</div>
		</section>
	);
};

// exports
export default AboutBrand;
