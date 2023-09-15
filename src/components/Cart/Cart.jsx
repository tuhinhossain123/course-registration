

const Cart = ({ selectedCourse }) => {
    console.log(selectedCourse)
    return (
        <div className="bg-white rounded-xl p-3">
            <h3 className="text-2xl font-bold mb-5">Course Name</h3>
            {selectedCourse.map((course) => (
                <p key={course.img} className="text-gray-400">{course.course_name}</p>
            ))}
            
        </div>
    );
};

export default Cart;