import config from "@/config";
import User from "@/db/models/User.model";

const seedUsers = {

    development: [
        {
            nickName: "Первый",
            password: "123456",
            score: 0,
            isAdmin: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            nickName: "Второй",
            password: "123456",
            score: 5,
            isAdmin: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            nickName: "Третий",
            password: "123456",
            score: 2,
            isAdmin: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            nickName: "Четвёртый",
            password: "123456",
            score: 1,
            isAdmin: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            nickName: "Пятый",
            password: "123",
            score: 4,
            isAdmin: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ] as User[]
};

export const up = async ({ context: sequelize }) => {
    if (!seedUsers[config.env].length) return;
    await sequelize
        .getQueryInterface()
        .bulkInsert("Users", seedUsers[config.env]);
};

export const down = async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().bulkDelete("Users", {
        uuid: seedUsers[config.env].map((u) => u.uuid),
    });
};
