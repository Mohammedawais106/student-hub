// services/studentService.js
import Member from '../Model/student_model.js';

export const createStudentService = async (user) => {
  try {
    const student = new Member(user);
    console.log("minestudetn",student);
    const addstudent = await student.save();
    console.log("this is finall",addstudent);
    
    return "success";
  } catch (error) {
    console.log("❌ Error when storing student data:", error.message);
    return "failed"; // ✅ ADD this return
  }
};


export const getAllStudentsService = async () => {
  try {
    const students = await Member.find(); // fetch all students
    return students;
  } catch (error) {
    console.log("❌ Error in service retrieving students:", error.message);
    throw error; // propagate error to controller
  }
};



export const getStudentService = async (id) => {
  try {
    const student = await Member.findById(id); // fetch single student
    return student;
  } catch (error) {
    console.log("❌ Error in service retrieving student:", error.message);
    throw error;
  }
};




export const updateStudentService = async (id, data) => {
  try {
    const updatedStudent = await Member.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );
    return updatedStudent;
  } catch (error) {
    console.log("❌ Error in service updating student:", error.message);
    throw error;
  }
};


export const deleteStudentService = async (id) => {
  try {
    const deletedStudent = await Member.findByIdAndDelete(id);
    return deletedStudent;
  } catch (error) {
    console.log("❌ Error in service deleting student:", error.message);
    throw error;
  }
};
