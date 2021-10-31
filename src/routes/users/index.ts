import checkAuth from "@/middlewares/checkAuth";
import { Context, DefaultState } from "koa";
import Router from "koa-router";
import { create, list, createMessage } from "@/routes/users/users.controller";

const router = new Router<DefaultState, Context>();

router.prefix("/users");

router.get("/", checkAuth, list);

router.post("/", checkAuth, create);

router.post("/messages", checkAuth, createMessage)

export default router;
