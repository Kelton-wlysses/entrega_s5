import  AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoriesService = async ({name}:ICategoryRequest):Promise<Category> => {

    const categoriesRespository = AppDataSource.getRepository(Category)

    const categoryAlreadyExist = await categoriesRespository.find()
    const categoryname = categoryAlreadyExist.find(category => category.name === name )

    if(categoryname){
        throw new AppError("Category already exists", 400)
    }

    const categorie = categoriesRespository.create({
        name
    })
    
    await categoriesRespository.save(categorie)


    return categorie
    
}

export default createCategoriesService;