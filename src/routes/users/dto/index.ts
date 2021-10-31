import { IsDefined, IsEmail, Length } from "class-validator";

export class IUserDTO{
    @IsDefined()
    fullName: string;

    @IsEmail()
    @IsDefined()
    email: string;

    @IsDefined()
    @Length(6, 20, {})
    password: string;
}

export class IMessageDTO{
    @IsDefined()
    email: string;

    @IsDefined()
    message: string;
}

export class ICreateUserDTO extends IUserDTO {}