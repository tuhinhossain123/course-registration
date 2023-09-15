/* eslint-disable react/prop-types */


const Cart = ({ selectedCourse, remainingCredit, totalCredit, totalPrice }) => {
    let count = 1;
    return (
        <div className="bg-white rounded-xl p-3">
            <h2 className="text-lg text-[#2F80ED] font-bold py-4">Credit Hour Remaining {remainingCredit} hr</h2>
            <hr className="border-gray-300 border-2" />
            <h3 className="text-2xl font-bold pt-4 mb-2">Course Name</h3>
            {selectedCourse.map((course, idx) => (
                <p key={idx} className="text-gray-400">{count++} {course.course_name}</p>
            ))}
            <hr className="border-gray-300 border-2 mt-4" />
            <h4 className=" text-gray-500 pt-4">Total Credit Hour : {totalCredit}</h4>
            <hr className="border-gray-300 border-2 mt-4" />
            <h4 className="mt-4 font-semibold">Total Price: {totalPrice} USD</h4>

        </div>
    );
};

export default Cart;