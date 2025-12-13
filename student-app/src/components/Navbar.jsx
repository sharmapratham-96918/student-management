import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MenuIcon = (props) => (
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
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const UserIcon = (props) => (
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
      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a8.966 8.966 0 10-11.963 0m11.963 0A8.966 8.966 0 0012 12c-2.899 0-5.46-1.554-6.84-3.899M12 21a9 9 0 100-18 9 9 0 000 18z"
    />
  </svg>
);

const Navbar = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    // UPDATED: Changed bg-white to bg-gray-50 and dark:bg-gray-800 to dark:bg-gray-900
    <nav className="bg-gray-50 dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Menu Toggle + App Name */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition duration-150 ease-in-out"
              aria-label="Toggle Menu"
            >
              <MenuIcon className="text-gray-600 dark:text-gray-300" />
            </button>

            <h1 className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
              Student Manager
            </h1>
          </div>

          {/* Right: User info + Logout */}
          {user && (
            <div className="flex items-center space-x-4">
              {/* User Info Group */}
              <div className="flex items-center space-x-2">
                {/* User Avatar Placeholder */}
                <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-indigo-200 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-200">
                  <UserIcon className="w-5 h-5" />
                </div>
                
                <div className="text-sm hidden sm:block">
                  <p className="font-medium text-gray-800 dark:text-gray-100 truncate max-w-[150px]">
                    {user.name}
                  </p>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      user.isAdmin
                        ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100"
                    }`}
                  >
                    {user.isAdmin ? "Admin" : "User"}
                  </span>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;