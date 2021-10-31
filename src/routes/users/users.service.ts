import User from "@/db/models/User.model";
import Message from "@/db/models/Message.model";
import Hobby from "@/db/models/Hobby.model";
import { IMessageDTO, IUserDTO } from "./dto";

export class UsersService {
  async getList() {
    const foundUsers = await User.findAll({
      include: [
        { model: Message },
        { model: Hobby }
      ]
    });

    return { data: foundUsers };
  }

  async register(user: IUserDTO) {
    const founded = await User.findOne({where: {email: user.email}})
    if(founded){
      return {success: false, message: "email уже зарегистрирован"}
    }

    const result = new User();

    result.fullName = user.fullName
    result.email = user.email
    result.password = user.password

    await result.save();

    return {
      success: true,
      message: "Успешная регистрация",
      data: result
    }
  }

  async createMessage(message: IMessageDTO){
    const founded = await User.findOne({where: {email: message.email}})
    if(founded){
      const result = new Message();

      result.userId = founded.id;
      result.info = message.message

      await result.save();

      return {
        success: true,
        message: "Сообщение отправлено!",
        data: result
      }
    }
    return {success: false, message: "email не зарегистрирован"}
  }
}
export const usersFactory = () => new UsersService();
