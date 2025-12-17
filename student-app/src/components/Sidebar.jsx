import { useAuth } from "../context/AuthContext";

// Icon components
const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ViewToggleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m-6 0H4.5A2.25 2.25 0 002.25 19.5v1.25a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 20.75v-1.25a2.25 2.25 0 00-2.25-2.25H15m-6 0h9"
    />
  </svg>
);

const AddStudentIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.5a48.454 48.454 0 01-1.066 10.5c-.373 1.382-1.56 2.35-3.026 2.47a40.85 40.85 0 01-7.317 0c-1.466-.12-2.653-1.088-3.026-2.47A48.454 48.454 0 011.296 7.5M12 13.5h.008v.008H12V13.5z"
    />
  </svg>
);

const SparkleIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Sidebar = ({
  isOpen,
  closeSidebar,
  onToggleView,
  onAddStudent,
}) => {
  const { user } = useAuth();

  return (
    <>
      {/* Overlay: Dark backdrop with blur effect */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-all duration-300 animate-in fade-in"
        />
      )}

      {/* Sidebar: Modern gradient design with glassmorphism */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 z-50 transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-2xl`}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-700 dark:via-purple-700 dark:to-fuchsia-700"></div>
        
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-pink-400/20 animate-pulse"></div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col">
          
          {/* Header with gradient border */}
          <div className="relative p-6 border-b border-white/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                  <SparkleIcon />
                </div>
                <h2 className="text-xl font-black text-white drop-shadow-lg">
                  Menu
                </h2>
              </div>
              
              <button
                onClick={closeSidebar}
                className="group p-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                <CloseIcon className="text-white drop-shadow-lg" />
              </button>
            </div>
            
            {/* Decorative gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400"></div>
          </div>

          {/* Navigation Links with spacing */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            
            {/* Section Label */}
            <div className="flex items-center space-x-2 mb-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Actions</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>

            {/* Toggle View Button */}
            <button
              onClick={() => {
                onToggleView();
                closeSidebar();
              }}
              className="group relative w-full overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Button background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              
              {/* Button content */}
              <div className="relative flex items-center px-5 py-4 space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <ViewToggleIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-white text-base drop-shadow-md">Toggle View</div>
                  <div className="text-xs text-white/80 font-medium">Switch layout mode</div>
                </div>
                <svg className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {/* Add Student Button (Admin only) */}
            {user?.isAdmin && (
              <button
                onClick={() => {
                  onAddStudent();
                  closeSidebar();
                }}
                className="group relative w-full overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Button background */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Button content */}
                <div className="relative flex items-center px-5 py-4 space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <AddStudentIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-white text-base drop-shadow-md flex items-center space-x-2">
                      <span>Add Student</span>
                      <span className="text-yellow-300">⭐</span>
                    </div>
                    <div className="text-xs text-white/80 font-medium">Create new entry</div>
                  </div>
                  <svg className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            )}

            {/* Info Card */}
            <div className="mt-8 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-5 h-5 text-orange-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Quick Tip</h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Use keyboard shortcuts to navigate faster through your student data!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with user info */}
          {user && (
            <div className="p-6 border-t border-white/30">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 backdrop-blur-md">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-purple-600 shadow-md animate-pulse"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate drop-shadow-md">
                    {user.name}
                  </p>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${
                    user.isAdmin
                      ? "bg-gradient-to-r from-green-400 to-emerald-400 text-green-900"
                      : "bg-gradient-to-r from-blue-400 to-cyan-400 text-blue-900"
                  }`}>
                    {user.isAdmin ? "⭐ Admin" : "👤 User"}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right edge gradient border */}
        <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-pink-400 to-yellow-400"></div>
      </aside>
    </>
  );
};

export default Sidebar;