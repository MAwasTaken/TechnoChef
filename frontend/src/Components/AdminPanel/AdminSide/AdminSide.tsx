import React from 'react';
import Users from './../Users/Users';
import AllProducts from './../Products/AllProducts';


const AdminSide = () => {
    // State to keep track of which component to show
    const [activeComponent, setActiveComponent] = React.useState('');

    // Function to handle button click
    const handleButtonClick = (componentName: string) => {
        setActiveComponent(componentName)
    }
    return (
        <div className="flex flex-row">
            {/* Side section */}
            <div className="flex flex-col w-1/5 gap-y-5 fixed sticky top-0 bg-gray-200 p-6 h-screen">
                <h2 className="flex justify-center text-lg font-bold">داشبورد مدیریت</h2>
                <ul className='flex flex-col gap-y-2'>
                    {/* Render buttons */}
                    <li>
                        <button
                            className={`w-full py-2 px-4 rounded ${activeComponent === 'AllProducts' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleButtonClick('AllProducts')}
                        >
                            محصولات
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full py-2 px-4 rounded ${activeComponent === 'Users' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleButtonClick('Users')}
                        >
                            کاربران فعال
                        </button>
                    </li>
                    {/* Add more buttons here */}
                </ul>
            </div>

            {/* Render active component */}
            <div className="w-3/4 p-4">
                {activeComponent === 'AllProducts' && <AllProducts />}
                {activeComponent === 'Users' && <Users />}
                {/* Add more conditional rendering for other components */}
            </div>
        </div>)
}

export default AdminSide;