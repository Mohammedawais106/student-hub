import express from 'express';
import {
  createStudentCont,
  getAllStudentsCont,
  getStudentCont,
  updateStudentCont,
  deleteStudentCont
} from '../Controllers/student_controller.js'; // match casing and paths

const router = express.Router();

router.post('/register', createStudentCont);
router.get('/all', getAllStudentsCont);
router.get('/:id', getStudentCont);
router.put('/update/:id', updateStudentCont);
router.delete('/delete/:id', deleteStudentCont);




export default router;
