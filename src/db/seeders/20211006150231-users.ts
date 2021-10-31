import config from "@/config";
import User from "@/db/models/User.model";

const seedUsers = {

    development: [
        {
            fullName: "Первый",
            email: "1@mail.ru",
            password: "123",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            fullName: "Второй",
            email: "2@mail.ru",
            password: "123",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            fullName: "Третий",
            email: "3@mail.ru",
            password: "123",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            fullName: "Четвёртый",
            email: "4@mail.ru",
            password: "123",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            fullName: "Пятый",
            email: "5@mail.ru",
            password: "123",
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
