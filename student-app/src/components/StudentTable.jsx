import { useStudent } from "../context/StudentContext";

const StudentTable = ({ setShowForm, setFormMode }) => {
  const {
    students,
    fetchSingleStudent,
    deleteStudent,
    updateStudent,
  } = useStudent();

  const toggleActive = async (student) => {
    await updateStudent(student._id, {
      ...student,
      isActive: !student.isActive,
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow">
        <thead>
          <tr className="text-left text-sm">
            <th className="p-3">Name</th>
            <th className="p-3">Roll</th>
            <th className="p-3">Class</th>
            <th className="p-3">Subjects</th>
            <th className="p-3">Active</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s._id} className="border-t">
              <td className="p-3">{s.name}</td>
              <td className="p-3">{s.rollNumber}</td>
              <td className="p-3">{s.class}</td>
              <td className="p-3">{s.subjects.join(", ")}</td>

              {/* Active Toggle */}
              <td className="p-3">
                <button
                  onClick={() => toggleActive(s)}
                  className={`px-3 py-1 rounded text-white text-sm ${
                    s.isActive ? "bg-green-600" : "bg-gray-500"
                  }`}
                >
                  {s.isActive ? "Active" : "Inactive"}
                </button>
              </td>

              <td className="p-3 space-x-2">
                {/* View */}
                <button
                  onClick={() => fetchSingleStudent(s._id)}
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                  View
                </button>

                {/* Edit */}
                <button
                  onClick={() => {
                    fetchSingleStudent(s._id);
                    setFormMode("edit");
                    setShowForm(true);
                  }}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>

                {/* Delete */}
                <button
                  onClick={() => deleteStudent(s._id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
