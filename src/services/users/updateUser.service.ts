import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";

const updateUserService = async(userUpdate: IUserUpdate, id: string): Promise<User | Array<string | number>> => {

  const {name, email, password} = userUpdate

  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id
  })

  const keys = Object.keys(userUpdate);

  if (!findUser){
    throw new AppError('User not found', 404)
  }

  if (
    keys.includes('isAdm') || keys.includes('isActive') || keys.includes('id')
  ) {
    throw new AppError('Unauthorized update', 401)
  }

  await userRepository.update(
    id,
    {
      name: name,
      email: email,
      password: password ? await hash(password, 10) : findUser.password,
    }
  )

  const user = await userRepository.findOneBy({
    id
  })

  return user!

}
export default updateUserService;




