const { Router } = require("express");
const { AuthMiddleware, ParseIntMiddleware } = require("../middlewares");


module.exports = function({ UserController }) {
    const router = Router();

    // OJO aqui que metemos el middelware del Auth
    router.get("", [AuthMiddleware, ParseIntMiddleware], UserController.getAll);
    router.get("/:userId", UserController.get);    
    router.patch("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);

    return router;
}