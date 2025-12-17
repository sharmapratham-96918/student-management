import { useStudent } from "../context/StudentContext";

// Icon Components
const EditIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const DeleteIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const StudentIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const SparkleIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

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
      className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/30"></div>
      
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-fuchsia-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-fuchsia-500/10 transition-all duration-500"></div>
      
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-purple-400 via-pink-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '2px' }}></div>

      {/* Content */}
      <div className="relative p-6 backdrop-blur-sm">
        
        {/* Header with Avatar */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {/* Avatar */}
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <StudentIcon />
              </div>
              {/* Active indicator dot */}
              {student.isActive && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-800 shadow-md animate-pulse"></div>
              )}
            </div>

            <div>
              <h3 className="font-black text-lg text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                {student.name}
              </h3>
              <div className="flex items-center space-x-1 mt-0.5">
                <SparkleIcon />
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                  Student
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Student Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-900/30 dark:to-pink-900/30 backdrop-blur-sm">
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Roll Number</span>
            <span className="text-sm font-bold text-gray-800 dark:text-white">{student.rollNumber}</span>
          </div>
          
          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-gradient-to-r from-blue-100/50 to-cyan-100/50 dark:from-blue-900/30 dark:to-cyan-900/30 backdrop-blur-sm">
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Class</span>
            <span className="text-sm font-bold text-gray-800 dark:text-white">{student.class}</span>
          </div>
        </div>

        {/* Active Toggle Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleActive();
          }}
          className={`w-full mb-3 px-4 py-2.5 rounded-xl font-bold text-sm shadow-lg transition-all duration-300 hover:scale-105 ${
            student.isActive
              ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 hover:shadow-green-500/50"
              : "bg-gradient-to-r from-gray-400 to-gray-500 text-white hover:from-gray-500 hover:to-gray-600 hover:shadow-gray-500/50"
          }`}
        >
          <span className="flex items-center justify-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${student.isActive ? 'bg-white' : 'bg-gray-200'} ${student.isActive ? 'animate-pulse' : ''}`}></div>
            <span>{student.isActive ? "✓ Active" : "○ Inactive"}</span>
          </span>
        </button>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Edit Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              fetchSingleStudent(student._id);
              setFormMode("edit");
              setShowForm(true);
            }}
            className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-sm px-4 py-2.5 shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></span>
            <span className="relative flex items-center justify-center space-x-1.5">
              <EditIcon />
              <span>Edit</span>
            </span>
          </button>

          {/* Delete Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (window.confirm(`Are you sure you want to delete ${student.name}?`)) {
                deleteStudent(student._id);
              }
            }}
            className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold text-sm px-4 py-2.5 shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></span>
            <span className="relative flex items-center justify-center space-x-1.5">
              <DeleteIcon />
              <span>Delete</span>
            </span>
          </button>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-300/20 to-orange-400/20 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300"></div>
    </div>
  );
};

export default StudentCard;