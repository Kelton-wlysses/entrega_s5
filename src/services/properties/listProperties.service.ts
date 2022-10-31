import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";

const listPropertiesService = async() : Promise<Property[]>=>{

    const propertiesRespository = AppDataSource.getRepository(Property)
    const propertie = await propertiesRespository.find()

    if (!propertie) {
        throw new AppError("Category not found!", 404 );
    }

    return propertie
} 
export default listPropertiesService