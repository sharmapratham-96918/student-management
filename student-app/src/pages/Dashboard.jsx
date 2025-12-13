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
      className="w-12 h-12 text-indigo-400 dark:text-indigo-300 mb-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a4.5 4.5 0 002.34-1.471l1.458-1.457a4.5 4.5 0 000-6.364L19.843 4.888A4.5 4.5 0 0013.5 3h-2.25C9.434 3 8 4.434 8 6.25v13.5c0 1.816 1.434 3.25 3.25 3.25h2.25c1.816 0 3.25-1.434 3.25-3.25v-2.25zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 14.25a.75.75 0 110-1.5.75.75 0 010 1.5zM12 9.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
      />
    </svg>
  );

const Dashboard = () => {
  // Assuming 'isLoading' is also available from useStudent for a loading state
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
    // Applied a neutral background color to the entire body/page for contrast
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900"> 
      
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
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 transition-all duration-300">
        
        {/* Loading State */}
        {isLoading && (
            <div className="flex justify-center items-center h-64 text-gray-500 dark:text-gray-400">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading students...
            </div>
        )}

        {/* Empty State */}
        {!isLoading && students.length === 0 && (
            <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg mt-10">
                <EmptyStateIcon />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    No Students Found
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 text-center max-w-md">
                    It looks like you haven't added any student records yet. Click the button below or the sidebar link to get started!
                </p>
                <button
                    onClick={openCreateForm}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
                >
                    + Add First Student
                </button>
            </div>
        )}

        {/* Content View */}
        {!isLoading && students.length > 0 && (
            <div className="mt-6">
                {view === "table" ? (
                    <StudentTable
                        setShowForm={setShowForm}
                        setFormMode={setFormMode}
                    />
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