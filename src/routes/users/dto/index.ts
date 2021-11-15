import { IsDefined, IsEmail, Length } from "class-validator";

export class IUserDTO{
    @Length(6, 127, {})
    fullName: string;

    @IsEmail()
    email: string;

    @Length(6, 20, {})
    password: string;
}

export class IMessageDTO{
    @IsEmail()
    email: string;

    @Length(1,1023,{})
    message: string;
}

export class ICreateUserDTO extends IUserDTO {}