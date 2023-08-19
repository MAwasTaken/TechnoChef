// packages
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { AiOutlineStar } from 'react-icons/ai';
import { BiChevronLeft } from 'react-icons/bi';

// components
import ProductBox from '../ProductBox/ProductBox';

// best sellers
const BestSellers = () => {
	// tsx
	return (
		<section className="relative mx-5 h-72 rounded-2xl bg-black/70 py-5 md:mx-10 md:h-96 md:py-10">
			<Swiper
				slidesPerView={2}
				spaceBetween={20}
				freeMode={true}
				dir="rtl"
				breakpoints={{
					570: {
						slidesPerView: 3,
						spaceBetween: 20
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 20
					},
					1200: {
						slidesPerView: 5,
						spaceBetween: 50
					}
				}}
				modules={[FreeMode]}
				className="h-[270px] cursor-grab md:h-[320px]"
			>
				<SwiperSlide className="md:mr-5 px-2 relative">
					<div className="flex h-full flex-col items-center justify-center gap-y-2">
						<h2 className="font-Lalezar flex items-center gap-x-1 pt-4 text-base text-yellow-500 drop-shadow-[0_0_8px_#f97316] md:gap-x-4 md:pt-8 md:text-3xl">
							<AiOutlineStar className="text-pink-500" />
							محصولات پرفروش
						</h2>
						<button className="font-Lalezar mt-2 flex w-24 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-green-700 p-1.5 text-[10px] transition-all hover:bg-gradient-to-t md:mt-4 md:w-[130px] md:p-2 md:text-lg">
							همه محصولات
							<BiChevronLeft className="h-5 w-5" />
						</button>
					</div>
          <div className="absolute w-20 md:w-20 md:h-20 h-20 md:top-28 top-16 md:blur-3xl blur-2xl md:right-24 right-12 md:bg-yellow-500 bg-yellow-500/30 -z-30  rounded-full"></div>
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox gradientColor="#b91c1c" colors={['#334155', '#ffffff', '#000000']} />
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox gradientColor="#c2410c" colors={['#334155', '#ffffff', '#000000']} />
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox gradientColor="#b45309" colors={['#334155', '#ffffff', '#000000']} />
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox gradientColor="#a16207" colors={['#334155', '#ffffff', '#000000']} />
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox gradientColor="#4d7c0f" colors={['#334155', '#ffffff', '#000000']} />
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox gradientColor="#15803d" colors={['#334155', '#ffffff', '#000000']} />
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox gradientColor="#15803d" colors={['#334155', '#ffffff', '#000000']} />
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox gradientColor="#047857" colors={['#334155', '#ffffff', '#000000']} />
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox gradientColor="#0f766e" colors={['#334155', '#ffffff', '#000000']} />
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

// exports
export default BestSellers;
