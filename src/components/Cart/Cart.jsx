/* eslint-disable react/prop-types */


const Cart = ({ selectedCourse, remainingCredit, totalCredit }) => {
    // console.log(selectedCourse)
    return (
        <div className="bg-white rounded-xl p-3">
            <h2 className="text-lg text-[#2F80ED] font-bold mb-8 py-4 border-b-2">Credit Hour Remaining {remainingCredit} hr</h2>
            <h3 className="text-2xl font-bold mb-5">Course Name</h3>
            {selectedCourse.map((course, idx) => (
                <p key={idx} className="text-gray-400">{course.course_name}</p>
            ))}

            <h4 className="pt-10 text-gray-500">Total Credit Hour : {totalCredit}</h4>

        </div>
    );
};

export default Cart;