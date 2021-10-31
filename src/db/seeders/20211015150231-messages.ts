import config from "@/config";
import User from "@/db/models/User.model";
import Message from "../models/Message.model";

const seedMessages = {

    development: [
        {
            info: "Давайте перекличку",
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            info: "Я тут",
            userId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            info: "И я на месте",
            userId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            info: "Меня на паре не будет",
            userId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            info: "Почему?",
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            info: "Извинитие за опоздание",
            userId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ] as Message[]
};

export const up = async ({ context: sequelize }) => {
    if (!seedMessages[config.env].length) return;
    await sequelize
        .getQueryInterface()
        .bulkInsert("Messages", seedMessages[config.env]);
};

export const down = async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().bulkDelete("Messages", {
        uuid: seedMessages[config.env].map((u) => u.uuid),
    });
};
