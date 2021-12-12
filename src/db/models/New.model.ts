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

@Table({
    paranoid: true,
    timestamps: true,
})
class New extends Model {
    @AllowNull(false)
    @Column(DataType.STRING)
    title: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    content: string;
}

export default New;
