import express from 'express';
const router = express.Router();
import getScheduleByDate from "../Controller/getScheduleByDate.middleware.js";
import addScheduleMiddleware from '../Controller/addSchedule.middleware.js';
import getAllSchedule from '../Controller/getAllSchedule.middleware.js';
import updateScheduleByIdMiddleware from '../Controller/updateSchedule.middleware.js';
import deleteScheduleByIdMiddleware from '../Controller/deleteSchedule.middleware.js';
import addMultipleSchedulesMiddleware from '../Controller/addMultipleSchedule.middleware.js';
import deleteMultipleSchedulesByIdMiddleware from '../Controller/deleteMultipleSchedule.middleware.js';

router.get('/:date', getScheduleByDate, (req, res) => {
  res.json(res.schedule);
});

router.post('/Schedule/Add', addScheduleMiddleware);

router.get('/Schedule/GetAll', getAllSchedule);

router.put('/Schedule/UpdateById/:id', updateScheduleByIdMiddleware);

router.delete('/Schedule/DeleteById/:id', deleteScheduleByIdMiddleware);

router.post('/Schedule/AddMultiple', addMultipleSchedulesMiddleware);

router.delete('/Schedule/DeleteMultiple', deleteMultipleSchedulesByIdMiddleware);

export default router;