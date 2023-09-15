// styles
import './MainSlider.css';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// main slider
const MainSlider = () => {
	// tsx
	return (
		<section>
			<Swiper
				className="cursor-grab"
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
				modules={[Pagination, Autoplay]}
			>
				<SwiperSlide>
					<img
						loading="lazy"
						className="sm:rounded-2xl"
						src="/Images/MainSlider/slide1.jpg"
						alt="slider image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img className="sm:rounded-2xl" src="/Images/MainSlider/slide2.jpg" alt="" />
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

// exports
export default MainSlider;
