import { isDefined, IsDefined, IsEmail, IsOptional, Length } from "class-validator";

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

export class IUserLoginDTO {
    @Length(4, 32, {})
    nickName: string;
  
    @Length(6, 32, {})
    password!: string;
}

export class IUserUpdateDTO {
    id: number;

    @IsOptional()
    @Length(4, 32, {})
    nickName: string;
  
    @IsOptional()
    @Length(6, 32, {})
    password: string;
}

export class INewUpdateDTO {
    id: number;

    @IsOptional()
    @Length(3, 32, {})
    title: string;
  
    @IsOptional()
    @Length(1, 1023, {})
    content: string;
}

export class ICoinAddDTO {
    id: number;
}

export class ICreateUserDTO extends IUserDTO {}