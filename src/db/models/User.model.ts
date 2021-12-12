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

@Table({
    paranoid: true,
    timestamps: true,
})
class User extends Model {
    @Column(DataType.STRING)
    nickName: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    password: string;

    @Default(0)
    @Column(DataType.NUMBER)
    score: number;

    @Default(false)
    @Column(DataType.BOOLEAN)
    isAdmin: boolean;
    }

export default User;