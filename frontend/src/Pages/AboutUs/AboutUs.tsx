import React from 'react'
// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="container">
                <main className='flex flex-col justify-center'>
                    <section className='flex flex-row-reverse'>
                        <img src="./Images/AboutUs/aboutus.png" alt="" width="900" />
                        <div className='flex flex-col justify-center gap-y-7 text-center'>
                            <h1 className='text-4xl text-center font-bold'>شرکت بازرگانی تکنوشف</h1>
                            <p className='text-gray-800 leading-6 text-base'>شرکت بازرگانی لوازم خانگی پارسیان سرو نیوساد با برند تکنوشف بیش از یک دهه تجربه یکی از شرکت های پیشگام در زمینه توزیع و فروش لوازم خانگی می باشد . این شرکت کوشش دارد با افتخار نیازهای خانواده هارا در زمینه امور خانگی برآورده نماید. هدف ما اراءه محصولات با کیفیت با برند معتبر تکنو در پی توسعه فرهنگ مصرف پایدار خانواده است : تا یک همراه قابل اعتماد در امور خانه ها باشیم و بتوانیم بهترین خدمات را به مشتریان عزیزمان اراءه دهیم . متخصصان ما با برسی دقیق نیازهای بازار همواره در همه ی مراحل انتخاب خرید و فروش بهترین و برترین محصولات را به شما هموطنان عزیز اراءه میدهند . ما با بهره گیری از تجربه روزافزون و دانش فنی متخصصان به طور پیوسته در حال بهبود روش های خدمات رسانی و افزایش کیفیت محصولات خود هستیم . از جمله خدماتی که ما در اختیار مشتریان عزیزمان قرار میدهیم می توان به مشاوره فنی خدمات پس از فروش و تحویل سریع محصولات اشاره کرد . ما هم چنین اهمیت بالایی به نظرات و انتقادات مشتریانمان میدهیم و کوشش داریم تا با به کارگیری آن ها بهترین راه کار هارا در امور لوازم خانگی منزل شما پیشنهاد دهیم .</p>
                        </div>
                    </section>
                    <section className='flex flex-row'>
                        <img src="./../../../public/Images/AboutUs/aboutus.png" alt="" width="900" />
                        <div className='flex flex-col justify-center gap-y-7 text-center'>
                            <h1 className='text-4xl text-center font-bold'>شرایط فروش محصولات</h1>
                            <p className='text-gray-800 leading-6 text-base'>Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptates quaerat ipsa repudiandae, eius reprehenderit, adipisci porro totam beatae possimus debitis explicabo saepe! Dolores odio eveniet placeat quia facere optio.loipsum dolor, sit amet consectetur adipisicing elit. Sint in modi ipsam voluptatibus eius minima amet ipsa sequi. Natus repellat saepe error asperiores illo id ducimus dolor aut rerum voluptatem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam explicabo aliquam ad porro placeat reprehenderit, dolor odio temporibus reiciendis dolores, odit voluptatibus eveniet repudiandae sequi enim neque necessitatibus vero cumque.</p>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>

    )
}

export default AboutUs