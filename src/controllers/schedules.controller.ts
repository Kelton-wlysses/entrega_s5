import { Request,Response } from 'express';
import createSchedulesService from '../services/schedules/createSchedules.service';
import listScheduleIDPropertyService from '../services/schedules/listSchedulesPropertie.service';

const createSchedulesController = async (req:Request, res:Response)=>{
    const schedule = req.body
    const createSchedule = await createSchedulesService(schedule)
    return res.status(201).json({
        message:"Schedule created", 
        createSchedule
    })
}

const listSchedulesIdPropertieController = async (req:Request, res:Response)=>{
    const id = req.params.id
    const schedule = await listScheduleIDPropertyService(id)
    return res.status(200).json(schedule)

}
export {createSchedulesController,listSchedulesIdPropertieController}
