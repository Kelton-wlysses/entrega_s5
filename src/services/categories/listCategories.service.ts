import AppDataSource from "../../data-source"
import { Category } from "../../entities/categories.entity"

const listCategoriesService = async() : Promise<Category[]>=>{

    const propertiesRespository = AppDataSource.getRepository(Category)
    const propertie = await propertiesRespository.find()

    return propertie
} 
export default listCategoriesService