import { useStudent } from "../context/StudentContext";

// Icon Components
const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const FatherIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MotherIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const RollIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
  </svg>
);

const ClassIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const AddressIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SubjectsIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const SparkleIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const StudentModal = () => {
  const { selectedStudent, setSelectedStudent } = useStudent();

  if (!selectedStudent) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={() => setSelectedStudent(null)}
    >
      {/* Enhanced backdrop with blur */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Modal Card */}
      <div 
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glassmorphic card with gradient */}
        <div className="relative overflow-hidden rounded-3xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl">
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-fuchsia-500/10"></div>
          
          {/* Header Section */}
          <div className="relative p-8 pb-6 border-b border-purple-200/50 dark:border-purple-700/50">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                    <UserIcon />
                  </div>
                  {/* Active indicator */}
                  {selectedStudent.isActive && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-3 border-white dark:border-gray-800 shadow-lg animate-pulse"></div>
                  )}
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-purple-400/50 animate-ping"></div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <SparkleIcon />
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Student Profile</span>
                  </div>
                  <h2 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
                    {selectedStudent.name}
                  </h2>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedStudent(null)}
                className="group p-2.5 rounded-xl bg-white/50 hover:bg-red-500 dark:bg-gray-700/50 dark:hover:bg-red-500 backdrop-blur-md border border-gray-200/50 dark:border-gray-600/50 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                <CloseIcon className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              </button>
            </div>

            {/* Status Badge */}
            <div className="mt-4">
              <span className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl font-bold text-sm shadow-lg ${
                selectedStudent.isActive
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                  : "bg-gradient-to-r from-gray-400 to-gray-500 text-white"
              }`}>
                <div className={`w-2 h-2 rounded-full ${selectedStudent.isActive ? 'bg-white animate-pulse' : 'bg-gray-200'}`}></div>
                <span>{selectedStudent.isActive ? "✓ Active Student" : "○ Inactive"}</span>
              </span>
            </div>

            {/* Decorative gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500"></div>
          </div>

          {/* Content Section */}
          <div className="relative p-8 space-y-4">
            
            {/* Section: Family Information */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center space-x-2">
                <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <span>Family Information</span>
              </h3>

              {/* Father */}
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-blue-100/50 to-cyan-100/50 dark:from-blue-900/30 dark:to-cyan-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-md">
                  <FatherIcon />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">Father's Name</p>
                  <p className="text-base font-bold text-gray-800 dark:text-white">{selectedStudent.fatherName}</p>
                </div>
              </div>

              {/* Mother */}
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-pink-100/50 to-rose-100/50 dark:from-pink-900/30 dark:to-rose-900/30 backdrop-blur-sm border border-pink-200/50 dark:border-pink-700/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center shadow-md">
                  <MotherIcon />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">Mother's Name</p>
                  <p className="text-base font-bold text-gray-800 dark:text-white">{selectedStudent.motherName}</p>
                </div>
              </div>
            </div>

            {/* Section: Academic Information */}
            <div className="space-y-3 pt-4">
              <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center space-x-2">
                <div className="w-1 h-4 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></div>
                <span>Academic Information</span>
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {/* Roll Number */}
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-purple-100/50 to-violet-100/50 dark:from-purple-900/30 dark:to-violet-900/30 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-violet-400 flex items-center justify-center shadow-md">
                    <RollIcon />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">Roll No.</p>
                    <p className="text-base font-bold text-gray-800 dark:text-white">{selectedStudent.rollNumber}</p>
                  </div>
                </div>

                {/* Class */}
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-indigo-100/50 to-blue-100/50 dark:from-indigo-900/30 dark:to-blue-900/30 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center shadow-md">
                    <ClassIcon />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">Class</p>
                    <p className="text-base font-bold text-gray-800 dark:text-white">{selectedStudent.class}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Contact Information */}
            <div className="space-y-3 pt-4">
              <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center space-x-2">
                <div className="w-1 h-4 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                <span>Contact Information</span>
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-r from-green-100/50 to-emerald-100/50 dark:from-green-900/30 dark:to-emerald-900/30 backdrop-blur-sm border border-green-200/50 dark:border-green-700/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center shadow-md flex-shrink-0">
                  <AddressIcon />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Address</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-white leading-relaxed">{selectedStudent.address}</p>
                </div>
              </div>
            </div>

            {/* Section: Subjects */}
            <div className="space-y-3 pt-4">
              <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center space-x-2">
                <div className="w-1 h-4 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
                <span>Enrolled Subjects</span>
              </h3>

              <div className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-r from-orange-100/50 to-yellow-100/50 dark:from-orange-900/30 dark:to-yellow-900/30 backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center shadow-md flex-shrink-0">
                  <SubjectsIcon />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Subjects</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedStudent.subjects.map((subject, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold shadow-md hover:scale-105 transition-transform duration-200"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedStudent(null)}
              className="group relative w-full mt-6 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-base px-6 py-4 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              <span className="relative flex items-center justify-center space-x-2">
                <span>Close Profile</span>
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-300/20 to-orange-400/20 rounded-full transform translate-x-16 -translate-y-16 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-300/20 to-blue-400/20 rounded-full transform -translate-x-20 translate-y-20 blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;