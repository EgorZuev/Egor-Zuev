import { IKoaContext } from "@/interfaces";
import { usersFactory } from "@/routes/users/users.service";
import { ServerValidationError } from "@/utils/errors";
import { transformAndValidate } from "class-transformer-validator";
import { IUserDTO, IUserLoginDTO, IUserUpdateDTO, INewUpdateDTO, ICoinAddDTO } from "./dto";

export const list = async (ctx: IKoaContext) => {
  const usersList = await usersFactory().getList();
  ctx.body = { ...usersList };
};

export const create = async (ctx: IKoaContext) => {
  const body: IUserDTO = ctx.request.body;

  await transformAndValidate(IUserDTO, body).catch(
    (err: ServerValidationError)=>
    {
      throw new ServerValidationError(err.errorCode, err.message)
    }
  );

  const result = await usersFactory().register(body);
  ctx.body = result;
};

export const login = async (ctx: IKoaContext) => {
  const body: IUserLoginDTO = ctx.request.body;

  await transformAndValidate(IUserLoginDTO, body).catch(
    (err: ServerValidationError) => {
      throw new ServerValidationError(err.errorCode, err.message);
    }
  );

  const result = await usersFactory().login(body);
  ctx.body = result;
};

export const update = async (ctx: IKoaContext) => {
  const body: IUserUpdateDTO = ctx.request.body;

  await transformAndValidate(IUserUpdateDTO, body).catch(
    (err: ServerValidationError) => {
      throw new ServerValidationError(err.errorCode, err.message);
    }
  );

  const result = await usersFactory().update(body);
  ctx.body = result;
};

export const newsUpdate = async (ctx: IKoaContext) => {
  const body: INewUpdateDTO = ctx.request.body;

  await transformAndValidate(INewUpdateDTO, body).catch(
    (err: ServerValidationError) => {
      throw new ServerValidationError(err.errorCode, err.message);
    }
  );

  const result = await usersFactory().newsUpdate(body);
  ctx.body = result;
};

export const scoreUpdate = async (ctx: IKoaContext) => {
  const body: ICoinAddDTO = ctx.request.body;

  await transformAndValidate(INewUpdateDTO, body).catch(
    (err: ServerValidationError) => {
      throw new ServerValidationError(err.errorCode, err.message);
    }
  );

  const result = await usersFactory().scoreUpdate(body);
  ctx.body = result;
};