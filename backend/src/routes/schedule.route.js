import express from 'express';
const router = express.Router();
import getScheduleByDate from "../middlewares/getScheduleByDate.middleware.js";
import addScheduleMiddleware from '../middlewares/addSchedule.middleware.js';
import getAllSchedule from '../middlewares/getAllSchedule.middleware.js';
import updateScheduleByIdMiddleware from '../middlewares/updateSchedule.middleware.js';
import deleteScheduleByIdMiddleware from '../middlewares/deleteSchedule.middleware.js';
import addMultipleSchedulesMiddleware from '../middlewares/addMultipleSchedule.middleware.js';
import deleteMultipleSchedulesByIdMiddleware from '../middlewares/deleteMultipleSchedule.middleware.js';

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