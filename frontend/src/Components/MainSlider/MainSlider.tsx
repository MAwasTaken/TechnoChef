// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './MainSlider.css';

// main slider
const MainSlider = () => {
	// tsx
	return (
		<section className="container md:mb-10 mb-4 rounded-2xl p-4">
			<Swiper
				pagination={{
					clickable: true
				}}
				autoFocus={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: true
				}}
				keyboard={{
					enabled: true
				}}
				modules={[Pagination, Keyboard, Autoplay]}
				className="h-auto cursor-grab rounded-2xl md:h-[300px] lg:h-[400px]"
			>
				<SwiperSlide className="inline-block h-full w-full object-cover">
					<img src="/Images/MainSlider/slide2.jpg" alt="slider image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/Images/MainSlider/slide2.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/Images/MainSlider/slide1.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/Images/MainSlider/slide1.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/Images/MainSlider/slide1.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/Images/MainSlider/slide1.jpg" alt="" />
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

// exports
export default MainSlider;
