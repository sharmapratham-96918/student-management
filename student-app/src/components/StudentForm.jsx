import { useEffect, useState } from "react";
import { useStudent } from "../context/StudentContext";

const emptyStudent = {
  name: "",
  fatherName: "",
  motherName: "",
  rollNumber: "",
  address: "",
  class: "",
  subjects: "",
  isActive: true,
};

const StudentForm = ({ mode = "create", close }) => {
  const { selectedStudent, createStudent, updateStudent } = useStudent();
  const [formData, setFormData] = useState(emptyStudent);

  // ======================
  // Prefill on Edit
  // ======================
  useEffect(() => {
    if (mode === "edit" && selectedStudent?._id) {
      setFormData({
        name: selectedStudent.name || "",
        fatherName: selectedStudent.fatherName || "",
        motherName: selectedStudent.motherName || "",
        rollNumber: selectedStudent.rollNumber || "",
        address: selectedStudent.address || "",
        class: selectedStudent.class || "",
        subjects: selectedStudent.subjects?.join(", ") || "",
        isActive: selectedStudent.isActive ?? true,
      });
    }
  }, [mode, selectedStudent]);

  // ======================
  // Change Handler
  // ======================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ======================
  // Submit
  // ======================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      fatherName: formData.fatherName,
      motherName: formData.motherName,
      rollNumber: Number(formData.rollNumber),
      address: formData.address,
      class: Number(formData.class),
      subjects: formData.subjects
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      isActive: formData.isActive,
    };

    console.log("SUBMIT PAYLOAD 👉", payload);

    try {
      if (mode === "create") {
        await createStudent(payload);
      } else {
        if (!selectedStudent?._id) {
          alert("Student not loaded yet. Please try again.");
          return;
        }
        await updateStudent(selectedStudent._id, payload);
      }

      close(); // close only on success
    } catch (err) {
      alert("Failed to save student. Check console.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 p-6 rounded-xl w-full max-w-lg space-y-3"
      >
        <h2 className="text-xl font-bold">
          {mode === "create" ? "Add Student" : "Edit Student"}
        </h2>

        {[
          ["name", "Name"],
          ["fatherName", "Father Name"],
          ["motherName", "Mother Name"],
          ["rollNumber", "Roll Number"],
          ["class", "Class"],
          ["address", "Address"],
        ].map(([key, label]) => (
          <input
            key={key}
            name={key}
            placeholder={label}
            value={formData[key]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        ))}

        <input
          name="subjects"
          placeholder="Subjects (comma separated)"
          value={formData.subjects}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
          />
          Active
        </label>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 text-white py-2 rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={close}
            className="flex-1 bg-gray-400 text-white py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
