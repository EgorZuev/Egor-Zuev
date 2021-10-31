import { IKoaContext } from "@/interfaces";
import { usersFactory } from "@/routes/users/users.service";
import { ServerValidationError } from "@/utils/errors";
import { transformAndValidate } from "class-transformer-validator";
import { IMessageDTO, IUserDTO } from "./dto";

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

export const createMessage = async (ctx: IKoaContext) => {
  const body: IMessageDTO = ctx.request.body;

  await transformAndValidate(IMessageDTO, body).catch(
    (err: ServerValidationError)=>
    {
      throw new ServerValidationError(err.errorCode, err.message)
    }
  );

  const result = await usersFactory().createMessage(body);
  ctx.body = result;
};