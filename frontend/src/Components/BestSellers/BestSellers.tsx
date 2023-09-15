// packages
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard } from 'swiper/modules';
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
		<section className="bg-Info/50 container relative h-[320px] py-5 backdrop-blur-[2px] sm:rounded-2xl md:h-[400px] md:py-10">
			<Swiper
				slidesPerView={2}
				spaceBetween={20}
				freeMode={true}
				dir="rtl"
				breakpoints={{
					540: {
						slidesPerView: 3,
						spaceBetween: 20
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 20
					},
					1280: {
						slidesPerView: 5,
						spaceBetween: 10
					}
				}}
				keyboard={{
					enabled: true
				}}
				modules={[FreeMode, Keyboard]}
				className="h-[300px] cursor-grab md:h-[350px]"
			>
				<SwiperSlide className="relative px-2">
					<div className="flex h-full flex-col items-center justify-center gap-y-2">
						<h2 className="font-Lalezar flex select-none items-center gap-x-1 pt-4 text-base tracking-tighter md:gap-x-4 md:pt-8 md:text-2xl lg:text-3xl">
							<AiOutlineStar className="text-orange-500" />
							محصولات پرفروش
						</h2>
						<button className="font-Lalezar from-LightYellow to-DarkYellow mt-2 flex w-24 items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-[10px] tracking-tighter shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg">
							همه محصولات
							<BiChevronLeft className="h-5 w-5" />
						</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox
						gradientColor="#b91c1c"
						colors={['#334155', '#ffffff', '#000000']}
						imageSrc="Images/Products/p1.png"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox
						gradientColor="#c2410c"
						colors={['#334155', '#ffffff', '#000000']}
						imageSrc="Images/Products/p2.png"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox
						gradientColor="#b45309"
						colors={['#334155', '#ffffff', '#000000']}
						imageSrc="Images/Products/p3.png"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox
						gradientColor="#a16207"
						colors={['#334155', '#ffffff', '#000000']}
						imageSrc="Images/Products/p4.png"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox
						gradientColor="#4d7c0f"
						colors={['#334155', '#ffffff', '#000000']}
						imageSrc="Images/Products/p5.png"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox
						gradientColor="#15803d"
						colors={['#334155', '#ffffff', '#000000']}
						imageSrc="Images/Products/p6.png"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox
						gradientColor="#15803d"
						colors={['#334155', '#ffffff', '#000000']}
						imageSrc="Images/Products/p7.png"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ProductBox
						gradientColor="#047857"
						colors={['#334155', '#ffffff', '#000000']}
						imageSrc="Images/Products/p8.png"
					/>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

// exports
export default BestSellers;
