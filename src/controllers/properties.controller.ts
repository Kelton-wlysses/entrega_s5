import { Response, Request } from "express";

import createPropertieService from "../services/properties/createProperties.service";
import listPropertiesService from "../services/properties/listProperties.service";

const createPropertiesController = async(req:Request, res:Response)=>{

  const propertie = req.body
  const createPropertie = await createPropertieService(propertie)
  return res.status(201).json(createPropertie)
 
}

const listPropertiesController = async(req:Request, res:Response)=>{
  const properties = await listPropertiesService()
  return res.json(properties)
}

export {createPropertiesController, listPropertiesController}
