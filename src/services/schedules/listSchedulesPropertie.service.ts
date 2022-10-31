import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";

const listScheduleIDPropertyService = async(id: string ) => {

    const propertiesRespository = AppDataSource.getRepository(Property)

    const property = await propertiesRespository.findOne({
        where:{
            id
        },
        relations:{
            schedules: true
        }
    })

    if(!property){
        throw new AppError("No schedules exist", 404)
    }

    return property
}
export default listScheduleIDPropertyService