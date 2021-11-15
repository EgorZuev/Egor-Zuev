import {
    Table,
    Column,
    Model,
    DataType,
    Unique,
    AllowNull,
    Default,
    IsEmail,
    HasMany,
} from "sequelize-typescript";
import Message from "./Message.model";
import Hobby from "./Hobby.model";

@Table({
    paranoid: true,
    timestamps: true,
})
class User extends Model {
    @Default("Аноним")
    @Column(DataType.STRING)
    fullName: string;

    @AllowNull(false)
    @IsEmail
    @Unique
    @Column(DataType.STRING)
    email: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    password: string;

    @HasMany(() => Message, { foreignKey: 'userId', onDelete: 'RESTRICT' })
    message: Message[];

    @HasMany(() => Hobby, { foreignKey: 'userId', onDelete: 'RESTRICT' })
    hobby: Hobby[];
    }

export default User;