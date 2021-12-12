import config from "@/config";
import New from "@/db/models/New.model";

const seedNews = {

    development: [
        {
            title: "Привет",
            content: "Это новости *Angry Red Ball* тут есть всё про обновления и т.п.",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: "Акция!",
            content: "2 курсовые работы по цене 3х XD",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: "Обновление",
            content: "Добавил в игру саму игру, а за тем пришлось придумывать реализацию БД на C#",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: "Информация",
            content: "Не тот волк, кто волк, а лишь тот волк, кто в душе волк (⊙_⊙)？",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ] as New[]
};

export const up = async ({ context: sequelize }) => {
    if (!seedNews[config.env].length) return;
    await sequelize
        .getQueryInterface()
        .bulkInsert("News", seedNews[config.env]);
};

export const down = async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().bulkDelete("News", {
        uuid: seedNews[config.env].map((u) => u.uuid),
    });
};
