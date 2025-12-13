import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔥 MISSING STATES (NOW ADDED)
  const [view, setView] = useState("table");
  const [selectedStudent, setSelectedStudent] = useState(null);


  // =====================
  // GET ALL STUDENTS (FIXED: TOKEN ADDED)
  // =====================
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await axios.get(`/students`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (Array.isArray(res.data?.students)) {
        setStudents(res.data.students);
      } else if (Array.isArray(res.data)) {
        setStudents(res.data);
      } else {
        setStudents([]);
      }
    } catch (error) {
      toast.error("Unauthorized or failed to load students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // =====================
  // ADD STUDENT
  // =====================
  const addStudent = async (student) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "/add-student",
        student,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data?.student) {
        setStudents((prev) => [...prev, res.data.student]);
      } else {
        fetchStudents();
      }

      toast.success("Student added successfully 🎉");
    } catch (error) {
      toast.error("Failed to add student");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // =====================
  // UPDATE STUDENT
  // =====================
  const updateStudent = async (id, student) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await axios.put(
        `/update-student/${id}`,
        student,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data?.student) {
        setStudents((prev) =>
          prev.map((s) => (s._id === id ? res.data.student : s))
        );
      } else {
        fetchStudents();
      }

      toast.success("Student updated successfully ✏️");
    } catch (error) {
      toast.error("Failed to update student");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // =====================
  // DELETE STUDENT
  // =====================
  const deleteStudent = async (id) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      await axios.delete(`/delete-student/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setStudents((prev) => prev.filter((s) => s._id !== id));
      toast.success("Student deleted 🗑️");
    } catch (error) {
      toast.error("Failed to delete student");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        loading,

        // 🔥 NOW DASHBOARD CAN USE THESE
        view,
        setView,
        selectedStudent,
        setSelectedStudent,

        fetchStudents,
        addStudent,
        updateStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

// ✅ Custom hook
export const useStudent = () => useContext(StudentContext);
