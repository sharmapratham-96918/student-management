import { useStudent } from "../context/StudentContext";

const StudentCard = ({ student, setShowForm, setFormMode }) => {
  const {
    fetchSingleStudent,
    deleteStudent,
    updateStudent,
  } = useStudent();

  const toggleActive = async () => {
    await updateStudent(student._id, {
      ...student,
      isActive: !student.isActive,
    });
  };

  return (
    <div
      onClick={() => fetchSingleStudent(student._id)}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
    >
      <h3 className="font-semibold text-lg">{student.name}</h3>

      <p className="text-sm">Roll: {student.rollNumber}</p>
      <p className="text-sm">Class: {student.class}</p>

      {/* Active Toggle */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleActive();
        }}
        className={`mt-2 text-xs px-3 py-1 rounded text-white ${
          student.isActive ? "bg-green-600" : "bg-gray-500"
        }`}
      >
        {student.isActive ? "Active" : "Inactive"}
      </button>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-4">
    
    

        {/* Delete */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteStudent(student._id);
          }}
          className="flex-1 text-sm px-3 py-1 bg-red-600 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
