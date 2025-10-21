
import { createStudentService,getAllStudentsService,getStudentService,updateStudentService,deleteStudentService } from "../Services/student_services.js";

export const createStudentCont = async (req,res) => {
  let { name, email, age, parentId } = req.body;
  try {
    const student = await createStudentService({name, email, age, parentId});

    if (student === "success") {
      console.log("YOUR DETAILS IS REGISTERD SUCCESSFULLY");
      res.status(201).json({ message: "Student registered successfully" }); // ✅ Added response
    } else {
      console.log("SOMETHING WENT WRONG");
      res.status(500).json({ message: "Failed to register student" }); // ✅ Added response
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



export const getAllStudentsCont = async (req,res) => {
  try {
    const students = await getAllStudentsService();
    res.status(200).json(students);
  } catch (err) {
    console.log("❌ Error retrieving students:", err.message);
    res.status(500).json({ error: "Failed to retrieve students" });
  }
};


export const getStudentCont = async (req,res) => {
  const { id } = req.params;
  try {
    const student = await getStudentService(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (err) {
    console.log("❌ Error retrieving student:", err.message);
    res.status(500).json({ error: "Failed to retrieve student" });
  }
};


export const updateStudentCont = async (req, res) => {
  const { id } = req.params;
  const { name, email, age, parentId } = req.body;

  try {
    const updated = await updateStudentService(id, { name, email, age, parentId });
    if (!updated) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student updated successfully", student: updated });
  } catch (err) {
    console.log("❌ Error updating student:", err.message);
    res.status(500).json({ error: "Failed to update student" });
  }
};




export const deleteStudentCont = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteStudentService(id);
    if (!deleted) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    console.log("❌ Error deleting student:", err.message);
    res.status(500).json({ error: "Failed to delete student" });
  }
};





export const getStudentById = async (req, res) => {
  try {
    const student = await getStudentByIdService(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await updateStudentService(req.params.id, req.body);
    if (!updatedStudent) return res.status(404).json({ error: 'Student not found' });
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await deleteStudentService(req.params.id);
    if (!deletedStudent) return res.status(404).json({ error: 'Student not found' });
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
