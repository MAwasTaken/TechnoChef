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
                    <head className='flex flex-row-reverse'>
                        <img src="./../../../public/Images/AboutUs/aboutus.png" alt="" width="900" />
                        <div className='flex flex-col justify-center gap-y-7 text-center'>
                            <h1 className='text-4xl text-center font-bold'>شرکت بازرگانی تکنوشف</h1>
                            <p className='text-gray-800 leading-6 text-base'>Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptates quaerat ipsa repudiandae, eius reprehenderit, adipisci porro totam beatae possimus debitis explicabo saepe! Dolores odio eveniet placeat quia facere optio.loipsum dolor, sit amet consectetur adipisicing elit. Sint in modi ipsam voluptatibus eius minima amet ipsa sequi. Natus repellat saepe error asperiores illo id ducimus dolor aut rerum voluptatem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam explicabo aliquam ad porro placeat reprehenderit, dolor odio temporibus reiciendis dolores, odit voluptatibus eveniet repudiandae sequi enim neque necessitatibus vero cumque.</p>
                        </div>
                    </head>
                </main>
            </div>
            <Footer />
        </>

    )
}

export default AboutUs