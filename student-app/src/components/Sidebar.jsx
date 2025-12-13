import { useAuth } from "../context/AuthContext";

// Icon components (using simple SVGs for this example)
const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
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
    strokeWidth={1.5}
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
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.5H12M14.25 7.5H12m2.25 0h-3.75M6 10.5h.008v.008H6V10.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM6 13.5h.008v.008H6V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
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
      {/* Overlay: Increased opacity for modern look, uses z-40 */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
        />
      )}

      {/* Sidebar: New modern colors, improved shadow, and generous padding */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-50 dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } border-r border-gray-200 dark:border-gray-700`}
      >
        
        {/* Header/Title with Close Button */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Navigation
          </h2>
          <button
            onClick={closeSidebar}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Navigation Links / Buttons */}
        <div className="p-4 space-y-2">
          
          {/* Toggle View */}
          <button
            onClick={() => {
              onToggleView();
              closeSidebar();
            }}
            className="group flex items-center w-full px-4 py-2.5 text-left rounded-lg text-sm font-medium text-indigo-700 bg-indigo-100 dark:text-indigo-200 dark:bg-indigo-700 hover:bg-indigo-200 dark:hover:bg-indigo-600 transition duration-150 ease-in-out"
          >
            <ViewToggleIcon className="w-5 h-5 mr-3 text-indigo-500 dark:text-indigo-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-100" />
            Toggle View
          </button>

          {/* Add Student (Admin only) */}
          {user?.isAdmin && (
            <button
              onClick={() => {
                onAddStudent();
                closeSidebar();
              }}
              className="group flex items-center w-full px-4 py-2.5 text-left rounded-lg text-sm font-medium text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-700 hover:bg-green-200 dark:hover:bg-green-600 transition duration-150 ease-in-out"
            >
              <AddStudentIcon className="w-5 h-5 mr-3 text-green-500 dark:text-green-200 group-hover:text-green-600 dark:group-hover:text-green-100" />
              + Add Student
            </button>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;