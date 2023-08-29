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
		<section className="container mb-4 pb-4 md:mb-10">
			<Swiper
				dir="ltr"
				loop={true}
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
				className="h-auto cursor-grab"
			>
				<SwiperSlide>
					<img className="rounded-2xl" src="/Images/MainSlider/slide1.jpg" alt="slider image" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="rounded-2xl" src="/Images/MainSlider/slide2.jpg" alt="" />
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

// exports
export default MainSlider;
