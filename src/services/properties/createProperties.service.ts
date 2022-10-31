import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Addresses } from "../../entities/addresses.entity";
import { Category }  from "../../entities/categories.entity";
import { Property } from "../../entities/properties.entity";
import { IPropertyRequest } from "../../interfaces/properties"; 


const createPropertyService = async ({ value, size, address:{ district, zipCode, number, city, state}, categoryId }: IPropertyRequest)=> {


  const categoryRepository = AppDataSource.getRepository(Category);
  const addressRepository = AppDataSource.getRepository(Addresses);
  const propertyRepository = AppDataSource.getRepository(Property);
  
  const addresses = await addressRepository.find();

  const addressAlreadyExists = addresses.find((address) => address.number === number);

  if (addressAlreadyExists) {
    throw new AppError("Address already exists", 400);
  }

  if (state.length > 2 || zipCode.length > 8 ) {
    throw new AppError("Invalid size", 400);
  }

  const newAddress = await addressRepository.save({
    district,
    zipCode,
    number,
    city,
    state,
  });

  const category = await categoryRepository.findOneBy({ id: categoryId });

  if (!category) {
    throw new AppError("Category not found!", 404);
  }

  const property = await propertyRepository.save({
    value,
    size,
    address: newAddress,
    category: {
      id: category?.id,
      name: category?.name,
    },
  });

  return property;
};
export default createPropertyService;