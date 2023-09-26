// react
import { Link } from 'react-router-dom';

// packages
import { HiOutlineDocumentDuplicate, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';
import { BsInstagram, BsTelephone } from 'react-icons/bs';
import { PiTelegramLogoDuotone } from 'react-icons/pi';
import { TbDeviceLandlinePhone } from 'react-icons/tb';

// footer
const Footer: React.FC = () => {
	// tsx
	return (
		<div className="relative">
			<footer className="bg-Info/50 relative mt-4 flex flex-col p-4 backdrop-blur-[2px] md:mt-8 md:p-8">
				<div className="flex items-start justify-between">
					<div>
						<h4 className="font-Lalezar flex select-none items-center gap-x-1 text-sm md:gap-x-4 md:text-3xl">
							<HiOutlineDocumentDuplicate className="text-orange-500" />
							بخش های سایت
						</h4>
						<ul className="mr-4 mt-2 flex list-disc flex-col items-start justify-between gap-y-2 text-[10px] md:mr-10 md:mt-4 md:gap-y-4 md:text-lg">
							<li className="transition-all hover:text-blue-600">
								<Link to="/">خانه</Link>
							</li>
							<li className="transition-all hover:text-blue-600">
								<Link to="/products">محصولات</Link>
							</li>
							<li className="transition-all hover:text-blue-600">
								<Link to="/panel">پنل کاربری</Link>
							</li>
							<li className="transition-all hover:text-blue-600">
								<Link to="/about-us">درباره ما</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-Lalezar mr-4 flex select-none items-center gap-x-1 text-sm md:gap-x-4 md:text-3xl">
							<MdAlternateEmail className="text-orange-500" />
							صفحات مجازی
						</h4>
						<ul className="mr-5 mt-2 flex flex-col items-start justify-between gap-y-2 text-[10px] md:mr-10 md:mt-4 md:gap-y-4 md:text-lg">
							<li className="flex items-center gap-x-1 md:gap-x-2">
								<BsInstagram className="text-red-500" />
								<Link
									className="transition-all hover:text-blue-500"
									to="https://www.instagram.com/technoshef/"
								>
									اینستاگرام
								</Link>
							</li>
							<li className="flex items-center gap-x-1 md:gap-x-2">
								<PiTelegramLogoDuotone className="text-red-500" />
								<Link className="transition-all hover:text-blue-500" to="/">
									تلگرام
								</Link>
							</li>
							<li className="flex items-center gap-x-1">
								<div className="h-2 w-3 text-red-500 md:h-[18px] md:w-7">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										x="0"
										y="0"
										fill="currentColor"
										version="1.1"
										viewBox="0 0 1668.56 1221.19"
										xmlSpace="preserve"
									>
										<g>
											<path d="M283.94 167.31l386.39 516.64L281.5 1104h87.51l340.42-367.76L984.48 1104h297.8L874.15 558.3l361.92-390.99h-87.51l-313.51 338.7-253.31-338.7h-297.8zm128.69 64.46h136.81l604.13 807.76h-136.81L412.63 231.77z"></path>
										</g>
									</svg>
								</div>
								<Link className="transition-all hover:text-blue-500" to="/">
									توئیتر
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-5/12">
						<h4 className="font-Lalezar mr-4 flex select-none items-center gap-x-1 text-sm md:gap-x-4 md:text-3xl">
							<BsTelephone className="text-orange-500" />
							ارتباط با ما
						</h4>
						<ul className="mr-5 mt-2 flex flex-col items-start justify-between gap-y-2 text-[10px] md:mr-10 md:mt-4 md:gap-y-4 md:text-lg">
							<li className="flex items-center gap-x-1 md:gap-x-2">
								<HiOutlineMail className="text-red-500" />
								<Link
									className="flex items-center justify-center gap-x-2 transition-all hover:text-blue-500 md:gap-x-4"
									to="mailto:hi@technoshef.com"
								>
									<span className="hidden sm:block">ایمیل:</span>
									<span>info@technoshef.com</span>
								</Link>
							</li>
							<li className="flex items-center justify-center gap-x-1 md:gap-x-2">
								<TbDeviceLandlinePhone className="text-red-500" />
								<Link
									className="flex items-center justify-center gap-x-2 transition-all hover:text-blue-500 md:gap-x-4"
									to="tel:09122274876"
								>
									<span className="hidden sm:block">شماره تماس:</span>
									<span style={{ direction: 'ltr' }}>09122274876</span>
								</Link>
							</li>
							<li className="bg-Dark/60 hover:bg-Dark/70 h-10 w-10 cursor-pointer self-end rounded-lg p-2 transition-colors md:h-20 md:w-20">
								<Link
									referrerPolicy="origin"
									target="_blank"
									to="https://trustseal.enamad.ir/Error/ErrorReferrer"
									className="flex flex-wrap items-start justify-start gap-x-2 md:gap-x-4"
								>
									<img src="./Images/enamad.png" alt="" />
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex gap-x-1 items-center justify-center mt-1">
					<HiOutlineLocationMarker className="text-red-500 hidden sm:block" />
					<div className="flex flex-wrap md:text-base text-[10px] items-start justify-start gap-x-2 md:gap-x-2">
						<span className="hidden sm:block">آدرس:</span>
						<div className="flex flex-col">
							<span>
								تهران٫ شهرک‌غرب٫ بلوار دریا٫ نرسیده به چهار‌راه مسجد٫ خیابان رامشه٫ پلاک٫25 واحد2
							</span>
						</div>
					</div>
				</div>
				<span className="text-Dark/75 mt-2 w-full text-center md:mt-2">
					تمامی حقوق این سایت متعلق به
					<Link to="/" className="text-orange-500">
						{' '}
						تکنوشف{' '}
					</Link>
					بوده و هرگونه کپی برداری غیرمجاز خواهد بود.
				</span>
			</footer>
			<p className="mt-1 block w-full text-center font-bold text-gray-800 md:mt-2 md:text-xs">
				ساخته شده با 🩶 توسط{' '}
				<Link
					target="_blank"
					to="https://github.com/MAwasTaken"
					className="text-teal-600 hover:animate-pulse"
				>
					مهدی عبداللهی
				</Link>{' '}
				٫{' '}
				<Link
					to="https://github.com/hoja1381"
					target="_blank"
					className="text-teal-600 hover:animate-pulse"
				>
					حسین جهان‌دیده
				</Link>{' '}
				٫{' '}
				<Link
					to="https://github.com/milad-taghizadeh"
					target="_blank"
					className="text-teal-600 hover:animate-pulse"
				>
					میلاد تقی‌زاده
				</Link>
			</p>
			<div className="absolute -bottom-4 -z-10 mx-auto h-full w-screen bg-[url('/Images/SVGs/topSectionBackground.svg')] bg-bottom bg-no-repeat"></div>
		</div>
	);
};

// exports
export default Footer;
