
import { useEffect, useState } from "react";
import { BsCurrencyDollar, BsBook } from "react-icons/bs";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Card = () => {
    const [allCourse, setAllCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, [])

    const handleCourseSelect = (course) => {
        const isRemove = selectedCourse.find((item) => item.img == course.img);
        if (isRemove) {
            return toast.error('Sorry all ready added !!!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else {
            setSelectedCourse([...selectedCourse, course])
        }

    }
    console.log(selectedCourse)


    return (
        <div>
            <h1 className='text-4xl text-center pt-12 font-bold'>Course Registration</h1>
            <div className="flex gap-4 container mx-auto mt-8">
                <div className="w-3/4 gap-4  grid grid-cols-3">
                    {allCourse.map((course) => (

                        <div key={course.img} className='bg-white rounded-xl p-3'>
                            <img className='w-full' src={course.img} alt="" />
                            <h2 className='mt-3 text-lg font-semibold'>{course.course_name}</h2>
                            <p className='mt-3 text-gray-400'>{course.details}</p>

                            <div className="flex gap-5 mt-4">
                                <div className="flex items-center gap-2">
                                    <p className="text-2xl"><BsCurrencyDollar /></p>
                                    <p className="text-gray-500 font-medium">Price: {course.price}</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="text-2xl"><BsBook /></p>
                                    <p className="text-gray-500 font-medium">Credit: {course.credit}hr</p>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-[#2F80ED] text-white px-28 py-2 rounded mt-6 font-semibold" onClick={() => handleCourseSelect(course)}>Select</button>
                                <ToastContainer />
                            </div>
                            <div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-1/4">
                    <Cart selectedCourse={selectedCourse}></Cart>
                </div>
            </div>

        </div >
    );
};

export default Card;
