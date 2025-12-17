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
  const { selectedStudent, addStudent, updateStudent } = useStudent();
  const [formData, setFormData] = useState(emptyStudent);

  // ======================
  // Sync form for CREATE & EDIT
  // ======================
  useEffect(() => {
    if (mode === "edit" && selectedStudent?._id) {
      setFormData({
        name: selectedStudent.name ?? "",
        fatherName: selectedStudent.fatherName ?? "",
        motherName: selectedStudent.motherName ?? "",
        rollNumber: selectedStudent.rollNumber ?? "",
        address: selectedStudent.address ?? "",
        class: selectedStudent.class ?? "",
        subjects: selectedStudent.subjects?.join(", ") ?? "",
        isActive: selectedStudent.isActive ?? true,
      });
    }

    if (mode === "create") {
      setFormData(emptyStudent); // 🔥 RESET FORM
    }
  }, [mode, selectedStudent]);

  // ======================
  // Input change handler
  // ======================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ======================
  // Submit handler
  // ======================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name.trim(),
      fatherName: formData.fatherName.trim(),
      motherName: formData.motherName.trim(),
      rollNumber: Number(formData.rollNumber),
      address: formData.address.trim(),
      class: Number(formData.class),
      subjects: formData.subjects
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      isActive: formData.isActive,
    };

    try {
      if (mode === "create") {
        await addStudent(payload);
      } else {
        if (!selectedStudent?._id) {
          alert("Student not loaded yet.");
          return;
        }
        await updateStudent(selectedStudent._id, payload);
      }

      close(); // close modal on success
    } catch (error) {
      console.error(error);
      alert("Failed to save student.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-200 p-6 rounded-xl w-full max-w-lg space-y-3"
      >
        <h2 className="text-xl font-bold">
          {mode === "create" ? "Add Student" : "Edit Student"}
        </h2>

        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="fatherName"
          placeholder="Father Name"
          value={formData.fatherName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          name="motherName"
          placeholder="Mother Name"
          value={formData.motherName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          name="rollNumber"
          placeholder="Roll Number"
          value={formData.rollNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          name="class"
          placeholder="Class"
          value={formData.class}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

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
