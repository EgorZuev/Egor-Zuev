import User from "@/db/models/User.model";
import { IUserDTO, IUserLoginDTO, IUserUpdateDTO, INewUpdateDTO, ICoinAddDTO } from "./dto";
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
      user: result
    }
  }

  async login(body: IUserLoginDTO) {
    const foundUser = await User.findOne({
      where: { nickName: body.nickName },
    });

    if (!foundUser) {
      return { success: false, message: "login не найден" };
    }

    if (body.password != foundUser.password) {
      return { success: false, message: "неверный пароль" };
    }

    return {
      success: true,
      message: "успешная аутентификация",
      user: foundUser
    };
  }

  async update(body: IUserUpdateDTO) {
    const foundUser = await User.findOne({
      where: { id: body.id },
    });

    if (!foundUser) {
      return { success: false, message: "пользователь не найден" };
    }

    if (body.password) {
      foundUser.password = body.password;
    }

    if (body.nickName) {
      foundUser.nickName = body.nickName;
    }

    await foundUser.save();

    return {
      success: true,
      message: "успешное редактирование профиля",
      user: foundUser,
    };
  }

  async newsUpdate(body: INewUpdateDTO) {
    const foundNew = await New.findOne({
      where: { id: body.id },
    });

    if (!foundNew) {
      return { success: false, message: "новость не найдена" };
    }

    if (body.title) {
      foundNew.title = body.title;
    }

    if (body.content) {
      foundNew.content = body.content;
    }

    await foundNew.save();

    return {
      success: true,
      message: "успешное редактирование новости",
      news: foundNew,
    };
  }

  async scoreUpdate(body: ICoinAddDTO) {
    const foundUser = await User.findOne({
      where: { id: body.id },
    });

    if (!foundUser) {
      return { success: false, message: "пользователь не найден" };
    }

      foundUser.score++;

    await foundUser.save();

    return {
      success: true,
      message: "успешное редактирование новости",
      news: foundUser,
    };
  }
}
export const usersFactory = () => new UsersService();
