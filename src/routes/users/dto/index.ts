import { IsDefined, IsEmail, Length } from "class-validator";

export class IUserDTO{
    @Length(4, 32, {})
    nickName: string;

    @Length(6, 32, {})
    password: string;
}

export class INewsDTO{
    @Length(3, 32, {})
    title: string;

    @Length(1,1023,{})
    content: string;
}

export class ICreateUserDTO extends IUserDTO {}