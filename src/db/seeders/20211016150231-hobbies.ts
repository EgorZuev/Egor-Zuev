import config from "@/config";
import User from "@/db/models/User.model";
import Message from "../models/Message.model";
import Hobby from "../models/Hobby.model";

const seedHobbies = {

    development: [
        {
            info: "Футбол",
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            info: "Баскетбол",
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            info: "Волейбол",
            userId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            info: "Шахматы",
            userId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            info: "Компьютерные игры",
            userId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            info: "Книги",
            userId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ] as unknown as Hobby[]
};

export const up = async ({ context: sequelize }) => {
    if (!seedHobbies[config.env].length) return;
    await sequelize
        .getQueryInterface()
        .bulkInsert("Hobbies", seedHobbies[config.env]);
};

export const down = async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().bulkDelete("Hobbies", {
        uuid: seedHobbies[config.env].map((u) => u.uuid),
    });
};
