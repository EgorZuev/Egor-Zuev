import {
  Table,
  Column,
  Model,
  DataType,
  Unique,
  AllowNull,
  Default,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import User from "./User.model";

@Table({
    paranoid: true,
    timestamps: true,
})
class Hobby extends Model {
    @Column(DataType.STRING)
    info: string;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    userId: number;

    @BelongsTo(() => User, 'userId')
    user: User;
}

export default Hobby;
