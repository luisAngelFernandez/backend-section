const {createContainer, asClass, asValue, asFunction} = require("awilix");

// config
const config = require("../config");
const app = require(".");

// services
const { HomeService, UserService, IdeaService, CommentService, AuthService } = require("../services");

// controllers
const {  HomeController, UserController, IdeaController, CommentController, AuthController} = require("../controllers");

// routes
const { HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

//models
const {User, Idea, Comment} = require("../models");

//repositories
const {UserRepository, IdeaRepository, CommentRepository} = require("../repositories");

const container = createContainer();

container.register({
    app : asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    AuthService: asClass(AuthService).singleton()
}).register({
    // Lo llama con el bind por se un controller y por temas de alcance (scope) y el controller pueda acceder al servicio
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton()
}).register({
    // Aqui como asFunction porque es una función
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton()
}).register({
    User : asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
})

module.exports = container;