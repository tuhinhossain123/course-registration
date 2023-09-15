
// import { FiDollarSign } from "react-icons/bs";
import { BsCurrencyDollar, BsBook } from "react-icons/bs";


const Card = () => {

    return (
        <div>
            <h1 className='text-4xl text-center pt-12 font-bold'>Course Registration</h1>
            <div className="flex gap-5 container mx-auto mt-8">
                <div className="w-3/4 gap-4  grid grid-cols-3">
                    <div className='bg-white rounded-xl p-3'>
                        <img className='w-full' src="https://i.ibb.co/7RhYxsk/Rectangle-2.png" alt="" />
                        <h2 className='mt-3 text-lg font-semibold'>Introduction to C++ for DSA</h2>
                        <p className='mt-3 text-gray-400'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                        <div className="flex gap-8 mt-4">
                            <div className="flex items-center gap-2">
                                <p className="text-2xl"><BsCurrencyDollar /></p>
                                <p className="text-gray-500 font-medium">Price: 15000</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="text-2xl"><BsBook /></p>
                                <p className="text-gray-500 font-medium">Credit: 2hr</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#2F80ED] text-white px-28 py-2 rounded mt-6 font-semibold">Select</button>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="w-1/4">
                    <h3>cart</h3>
                </div>
            </div>

        </div >
    );
};

export default Card;
