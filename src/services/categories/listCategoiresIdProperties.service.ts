import AppDataSource from '../../data-source'
import { Category } from '../../entities/categories.entity'
import { AppError } from '../../errors/appError'


const listCategoryIdPropertieService = async( id: string ) => {


    const categoryRepository = AppDataSource.getRepository(Category)

    const categoryProperties = await categoryRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        properties:true,
      },
    });

      
    if (!categoryProperties) {
      console.log('error 404')
      throw new AppError("Category not found!", 404 );
    }

    return categoryProperties;
}
export default listCategoryIdPropertieService
