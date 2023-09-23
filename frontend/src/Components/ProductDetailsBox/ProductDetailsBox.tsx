// react
import React, { useState } from 'react';

// icons
import { BiShoppingBag, BiSort } from 'react-icons/bi';
import { BiCategory } from 'react-icons/bi';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import { AiFillDollarCircle } from 'react-icons/ai';


export const ProductDetailsBox = () => {
    return (
        <div className="flex justify-center items-center">
            <div className='flex flex-col md:flex-row gap-x-2 items-center p-5 justify-center w-[1200px] h-max lg:rounded-3xl bg-gray-600	'>
                {/* right side (responsive:up) */}
                <div className="flex w-2/6 justify-center items-center h-max">
                    <div className="flex w-[250px] h-[300px]">
                        <img
                            className="mx-auto h-[300px] w-[300px]"
                            src="Images/Products/p1.png"
                            alt="تصویر محصول"
                            loading="lazy"
                        />
                    </div>
                </div>
                {/* divider */}
                <div className="flex">
                    <span className="bg-white-300 h-full w-[2px]"></span>
                </div>
                {/* left side (responsive:down) */}
                <div className="flex p-5 gap-y-6 md:gap-y-0 items-center md:items-start flex-col w-full h-full">
                    <div className="flex flex-col items-start gap-y-8 justify-center h-2/3">
                        <h1 className='text-Light/80 line-clamp-2 font-bold tracking-tighter text-2xl'>یخچال امرسان مدل ۲۴ فوت 55 کیلوگرمی</h1>
                        <div className="flex md:flex-col md:gap-y-8 md:gap-x-0 gap-x-20 items-center justify-center flex-row">
                            <div className="flex bg-gray-100 py-2 px-4 rounded-2xl"><span>در دسته یخچال ها </span></div>
                            <div className="flex flex-row justify-end gap-x-4">
                                <span className='text-Light/80 text-lg'>رنگ :</span>
                                <button className='w-6 h-6 bg-blue-800 rounded-full'></button>
                                <button className='w-6 h-6 bg-purple-800 rounded-full'></button>
                                <button className='w-6 h-6 bg-gray-800 rounded-full'></button>

                            </div>
                        </div>

                    </div>
                    <div className="flex h-max md:h-1/2 justify-center gap-y-8 items-center flex-col md:flex-row">
                        <div className="flex leading-6 mt-4 md:w-1/2">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deserunt eligendi! Beatae sint, fuga pariatur quidem quas temporibus tempore quibusdam aperiam voluptates, labore nihil doloribus nostrum eius placeat quos est. Sapiente vel, cum praesentium corrupti quam id at debitis voluptatibus, expedita eos deserunt sunt, cupiditate nisi delectus numquam alias aspernatur recusandae soluta!</span>
                        </div>
                        <div className="flex flex-col w-1/2 gap-y-1 items-end px-10 justify-center ">
                            <div className="flex flex-row gap-x-4 items-center">
                                <span className="flex justify-center items-center rounded-lg bg-gradient-to-l from-red-500 to-red-600 pt-[3px] text-center text-[10px] font-bold text-white/70 h-6 w-10 text-sm">
                                    ۱۰۰٪
                                </span>
                                <span className="line font-Lalezar text-left font-bold tracking-tight text-red-500/80 line-through text-xl">
                                    ۹۹۹٫۹۹۹٫۹۹۹
                                </span>
                            </div>
                            <div className='flex flex-row items-center gap-x-2'>
                                <span className="font-Lalezar text-white/70 mt-1 text-2xl">
                                    ۹۹۹٫۹۹۹٫۹۹۹
                                </span>
                                <div className="h-6 w-6 text-yellow-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="currentColor">
                                        <path
                                            d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <a href="/" className='flex items-center flex-row justify-center bg-yellow-500 gap-x-3 rounded-2xl px-11 py-3 hover:bg-yellow-600 font-Lalezar text-lg'><div className="flex gap-x-3 items-center justify-center"><span>خرید</span><BiShoppingBag className='text-red-500 text-xl'></BiShoppingBag></div></a>
                        </div>
                    </div>

                </div>




            </div>
        </div>

    )
}
// exports
export default ProductDetailsBox;
