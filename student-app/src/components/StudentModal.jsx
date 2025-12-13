import { useStudent } from "../context/StudentContext";

const StudentModal = () => {
  const { selectedStudent, setSelectedStudent } = useStudent();

  if (!selectedStudent) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">
          {selectedStudent.name}
        </h2>

        <p>Father: {selectedStudent.fatherName}</p>
        <p>Mother: {selectedStudent.motherName}</p>
        <p>Roll: {selectedStudent.rollNumber}</p>
        <p>Class: {selectedStudent.class}</p>
        <p>Address: {selectedStudent.address}</p>
        <p>Subjects: {selectedStudent.subjects.join(", ")}</p>
        <p>Status: {selectedStudent.isActive ? "Active" : "Inactive"}</p>

        <button
          onClick={() => setSelectedStudent(null)}
          className="mt-4 w-full bg-gray-700 text-white py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default StudentModal;
