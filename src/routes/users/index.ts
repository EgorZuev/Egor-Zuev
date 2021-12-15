import checkAuth from "@/middlewares/checkAuth";
import { Context, DefaultState } from "koa";
import Router from "koa-router";
import { create, list, login, newsUpdate, scoreUpdate, update } from "@/routes/users/users.controller";

const router = new Router<DefaultState, Context>();

router.prefix("/");

router.get("/users", checkAuth, list);

router.post("/users", checkAuth, create);

router.post("/login", checkAuth, login);

router.post("/users/update", checkAuth, update);

router.post("/news/update", checkAuth, newsUpdate);

router.post("/addcoin", checkAuth, scoreUpdate);

export default router;
