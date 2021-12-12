import checkAuth from "@/middlewares/checkAuth";
import { Context, DefaultState } from "koa";
import Router from "koa-router";
import { create, list } from "@/routes/users/users.controller";

const router = new Router<DefaultState, Context>();

router.prefix("/users");

router.get("/", checkAuth, list);

router.post("/", checkAuth, create);

export default router;
