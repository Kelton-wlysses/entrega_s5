import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";

const createUserService = async ({name, email, isAdm, password}: IUserRequest): Promise<User> =>{
  
  const userRepository = AppDataSource.getRepository(User);
  // const emailUser = await userRepository.find()

  // const verifyEmail = emailUser.find()

  if(!password){
    throw new AppError('Password is missing')
  }

  const hashedPassword = await hash(password, 10)

  const user = userRepository.create({
    name,
    email,
    isAdm,
    password: hashedPassword
  });
  await userRepository.save(user)

  return user

}
export default createUserService
