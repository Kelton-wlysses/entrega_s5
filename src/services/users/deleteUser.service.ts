import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const userDeleteService = async (id: string): Promise<void> => {

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError('User not found', 404)
  }
  //fazer a verificação do isActive por aqui..
  
  await userRepository.update(
    id,
    {
      isActive: false 
    }
  )

  return 
  
}
export default userDeleteService;






