import express from 'express';
import {
  createStudentCont,
  getAllStudentsCont,
  getStudentCont,
  updateStudentCont,
  deleteStudentCont
} from '../controllers/student_controller.js'; // match casing and paths

const router = express.Router();

router.post('/register', createStudentCont);
router.get('/all', getAllStudentsCont);
router.get('/:id', getStudentCont);
router.put('/update/:id', updateStudentCont);
router.delete('/delete/:id', deleteStudentCont);


// router.get('/', getAllStudents);
// router.get('/:id', getStudentById);
// router.put('/:id', updateStudent);


export default router;
