import User from "@/db/models/User.model";
import Message from "@/db/models/Message.model";
import Hobby from "@/db/models/Hobby.model";
import { IMessageDTO, IUserDTO } from "./dto";
import { Op } from "sequelize";
import moment from "moment"

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

    const USER_LIMIT = 2;
    const USER_DELAY = 60;
    const where: any = {};

    where.createdAt = {
      [Op.gte]: moment()
        .subtract(USER_DELAY, "seconds")
        .format("lll"),
    };

    const userCount = await User.count({where});  

    const test = where.createdAt;

    if(userCount >= USER_LIMIT){
      return{
        success: false,
        message:`За ${USER_DELAY} секунд зарегистрировано ${userCount} пользователей. Лимит: ${USER_LIMIT}!`,
      };
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
    if(!founded){
      return {success: false, message: "email не зарегистрирован"};
    }

    const MESSAGE_LIMIT = 3;
    const MESSAGE_DELAY = 5;
    const where: any = {};

    where.userId = founded.id;
    where.createdAt = {
      [Op.gte]: moment()
        .subtract(MESSAGE_DELAY, "seconds")
        .format("lll"),
    };

    const messageCount = await Message.count({where});  

    const test = where.createdAt;

    if(messageCount >= MESSAGE_LIMIT){
      return{
        success: false,
        message:`За ${MESSAGE_DELAY} секунд отправлено ${messageCount} сообщений. Лимит: ${MESSAGE_LIMIT}!`,
      };
    }

    const result = new Message();

    result.userId = founded.id;
    result.info = message.message;

    await result.save();

    return {
      success: true,
      message: "Сообщение отправлено!",
      data: result
    }
  }
}
export const usersFactory = () => new UsersService();
