import { useState } from "react";
import { useStudent } from "../context/StudentContext";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StudentTable from "../components/StudentTable";
import StudentCard from "../components/StudentCard";
import StudentModal from "../components/StudentModal";
import StudentForm from "../components/StudentForm";

// Icon for the empty state
const EmptyStateIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-20 h-20 text-purple-400 dark:text-purple-300 mb-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a4.5 4.5 0 002.34-1.471l1.458-1.457a4.5 4.5 0 000-6.364L19.843 4.888A4.5 4.5 0 0013.5 3h-2.25C9.434 3 8 4.434 8 6.25v13.5c0 1.816 1.434 3.25 3.25 3.25h2.25c1.816 0 3.25-1.434 3.25-3.25v-2.25zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 14.25a.75.75 0 110-1.5.75.75 0 010 1.5zM12 9.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
    />
  </svg>
);

const SparkleIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Dashboard = () => {
  const { students, view, setView, setSelectedStudent, isLoading } = useStudent();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("create");

  const openCreateForm = () => {
    setSelectedStudent(null);
    setFormMode("create");
    setShowForm(true);
  };

  const handleToggleView = () => {
    setView(view === "table" ? "card" : "table");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
      
      {/* Animated background pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Navbar (Sticky, Z-50) */}
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
        onToggleView={handleToggleView}
        onAddStudent={openCreateForm}
      />

      {/* Main Content Area */}
      <main className="relative max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 transition-all duration-300">
        
        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col justify-center items-center h-64 mt-20">
            <div className="relative">
              {/* Outer rotating ring */}
              <div className="w-24 h-24 rounded-full border-4 border-purple-200 dark:border-purple-800 border-t-purple-600 dark:border-t-purple-400 animate-spin"></div>
              
              {/* Inner pulsing circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse shadow-lg flex items-center justify-center">
                  <SparkleIcon className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
                Loading students...
              </p>
              <div className="flex justify-center space-x-1 mt-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && students.length === 0 && (
          <div className="relative mt-20 mx-auto max-w-2xl">
            {/* Glassmorphic card */}
            <div className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-2xl border border-purple-200/50 dark:border-purple-700/50">
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-fuchsia-500/5"></div>
              
              {/* Content */}
              <div className="relative flex flex-col items-center justify-center p-12 lg:p-16">
                
                {/* Animated icon container */}
                <div className="relative mb-8">
                  {/* Pulsing background circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-purple-400/20 animate-ping"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-pink-400/30 animate-pulse"></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                    <EmptyStateIcon />
                  </div>
                </div>

                {/* Text content */}
                <h3 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400 mb-3">
                  No Students Yet!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md text-lg">
                  Start building your student database by adding your first student record. It's quick and easy!
                </p>

                {/* CTA Button */}
                <button
                  onClick={openCreateForm}
                  className="group relative inline-flex items-center space-x-3 px-8 py-4 overflow-hidden rounded-2xl font-bold text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  
                  {/* Icon */}
                  <div className="relative w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  
                  <span className="relative">Add Your First Student</span>
                  
                  {/* Arrow */}
                  <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 opacity-20 blur-2xl"></div>
                <div className="absolute bottom-6 left-6 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-300 to-blue-400 opacity-20 blur-2xl"></div>
              </div>

              {/* Bottom gradient border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500"></div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 rotate-12 animate-bounce shadow-lg" style={{ animationDelay: '0ms' }}></div>
            <div className="absolute -top-2 -right-6 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 animate-bounce shadow-lg" style={{ animationDelay: '200ms' }}></div>
            <div className="absolute -bottom-3 right-8 w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-400 -rotate-12 animate-bounce shadow-lg" style={{ animationDelay: '400ms' }}></div>
          </div>
        )}

        {/* Content View */}
        {!isLoading && students.length > 0 && (
          <div className="mt-6 relative">
            {/* View mode indicator */}
            <div className="mb-6 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-purple-200/50 dark:border-purple-700/50 shadow-lg">
                  <SparkleIcon className="w-5 h-5 text-purple-500" />
                  <span className="font-bold text-gray-700 dark:text-gray-200">
                    {students.length} {students.length === 1 ? 'Student' : 'Students'}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold shadow-md">
                  {view === "table" ? "📊 Table View" : "🎴 Card View"}
                </div>
              </div>
            </div>

            {view === "table" ? (
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-purple-200/50 dark:border-purple-700/50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md">
                <StudentTable
                  setShowForm={setShowForm}
                  setFormMode={setFormMode}
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {students.map((s) => (
                  <StudentCard
                    key={s._id}
                    student={s}
                    setShowForm={setShowForm}
                    setFormMode={setFormMode}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Modals (placed outside main to ensure they float correctly) */}
      <StudentModal />
      {showForm && (
        <StudentForm
          mode={formMode}
          close={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;