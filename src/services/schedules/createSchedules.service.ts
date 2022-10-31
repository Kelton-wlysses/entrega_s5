import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";
import { Schedule } from "../../entities/schedules_users_properties.entity";
import { User } from "../../entities/user.entity";
import { IScheduleRequest } from "../../interfaces/schedules";
import { AppError } from "../../errors/appError";

const createSchedulesService =async ({ date, hour, propertyId, userId }:IScheduleRequest) => {
    
    const scheduleRespository = AppDataSource.getRepository(Schedule)
    const propertyRepository = AppDataSource.getRepository(Property)
    const userRepository = AppDataSource.getRepository(User)

    const schedules = await scheduleRespository.find()
    const properties = await propertyRepository.find()
    const users = await userRepository.find()

    const scheduleFilter = schedules.find(schedules => schedules)
    const property = properties.find((property) => property.id === propertyId)
    const user = users.find((user)=> user.id === userId)

    const dateAlready = scheduleFilter?.date.toString()
    const timeAlready = scheduleFilter?.hour.toString()

    if(!user){
        throw new AppError("Does not exists user", 404)
    }

    if(!property){
        throw new AppError("Does not exists property", 404)
    }
    
    if(dateAlready === date){
        throw new AppError("Not exists date ", 400)
    }

    if(timeAlready === hour){
        throw new AppError("Not exists time", 400)
    }

    const changeHour = Number(hour?.split(":")[0])

    if(changeHour< 8){
        throw new AppError("Does not exist time", 400)
    }

    if(changeHour>=18){
        throw new AppError("Does not exist time", 400)
    }

    const dateGenerator = new Date(date)

    const dayWeek = dateGenerator.getDay()

    if(dayWeek === 0 ){
        throw new AppError("Not exists day", 400)
    }
    
    if(dayWeek === 6){
        throw new AppError("Not exists day", 400)
    }

    const schedule = await scheduleRespository.save({
        user,
        property,
        date,
        hour
    })

    return schedule
}
export default createSchedulesService