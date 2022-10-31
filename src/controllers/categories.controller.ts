import { instanceToPlain } from "class-transformer";
import { Response, Request } from "express";
import createCategoriesService from "../services/categories/createCategories.service";
import listCategoryIdPropertieService from "../services/categories/listCategoiresIdProperties.service";
import listCategoriesService from "../services/categories/listCategories.service";


const createCategorieController = async(req:Request, res:Response)=>{

  const category = req.body
  const createdCategorie = await createCategoriesService(category)
  return res.status(201).json(instanceToPlain(createdCategorie))

}

const listCategoriesController = async(req:Request, res:Response)=>{
  const properties = await listCategoriesService()
  return res.json(properties)
}

const listCategorieIdPropeties = async(req:Request, res:Response)=>{

  const id: string = req.params.id
  const categoriesidProperties = await listCategoryIdPropertieService(id)
  return res.json(categoriesidProperties)
}

export {createCategorieController,listCategoriesController,listCategorieIdPropeties}