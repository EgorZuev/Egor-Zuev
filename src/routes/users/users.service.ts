import User from "@/db/models/User.model";
import { IUserDTO } from "./dto";
import { Op } from "sequelize";
import moment from "moment"
import New from "@/db/models/New.model";

export class UsersService {
  async getList() {
    const Users = await User.findAll();
    const News = await New.findAll();
    return { Users, News };
  }

  async register(user: IUserDTO) {
    const founded = await User.findOne({where: {nickName: user.nickName}})
    if(founded){
      return {success: false, message: "nickName уже зарегистрирован"}
    }

    const result = new User();

    result.nickName = user.nickName
    result.password = user.password

    await result.save();

    return {
      success: true,
      message: "Успешная регистрация",
      data: result
    }
  }
}
export const usersFactory = () => new UsersService();
