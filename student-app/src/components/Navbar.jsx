import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MenuIcon = (props) => (
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
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const UserIcon = (props) => (
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
      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a8.966 8.966 0 10-11.963 0m11.963 0A8.966 8.966 0 0012 12c-2.899 0-5.46-1.554-6.84-3.899M12 21a9 9 0 100-18 9 9 0 000 18z"
    />
  </svg>
);

const SparkleIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
    <nav className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-700 dark:via-purple-700 dark:to-fuchsia-700 shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-pink-400/10 animate-pulse"></div>
      
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Menu Toggle + App Name */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onMenuClick}
              className="group p-2.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:scale-110 hover:rotate-180"
              aria-label="Toggle Menu"
            >
              <MenuIcon className="text-white drop-shadow-lg transition-transform duration-300" />
            </button>

            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                <SparkleIcon />
              </div>
              <h1 className="text-2xl font-black tracking-tight text-white drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 hover:scale-105 cursor-default">
                Student Manager
              </h1>
            </div>
          </div>

          {/* Right: User info + Logout */}
          {user && (
            <div className="flex items-center space-x-3">
              {/* User Info Card */}
              <div className="hidden sm:flex items-center space-x-3 bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/30 shadow-lg hover:bg-white/25 transition-all duration-300 hover:scale-105">
                {/* Animated User Avatar */}
                <div className="relative">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg ring-2 ring-white/50 transform hover:rotate-12 transition-transform duration-300">
                    <UserIcon className="w-6 h-6 text-white" />
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white shadow-md animate-pulse"></div>
                </div>
                
                <div className="text-sm">
                  <p className="font-bold text-white truncate max-w-[150px] drop-shadow-md">
                    {user.name}
                  </p>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold shadow-md ${
                      user.isAdmin
                        ? "bg-gradient-to-r from-green-400 to-emerald-400 text-green-900"
                        : "bg-gradient-to-r from-blue-400 to-cyan-400 text-blue-900"
                    }`}
                  >
                    {user.isAdmin ? "⭐ Admin" : "👤 User"}
                  </span>
                </div>
              </div>

              {/* Mobile User Avatar */}
              <div className="sm:hidden relative">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg ring-2 ring-white/50">
                  <UserIcon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white shadow-md animate-pulse"></div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="group relative inline-flex items-center px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:scale-110 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <span className="relative flex items-center space-x-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span>Logout</span>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400"></div>
    </nav>
  );
};

export default Navbar;