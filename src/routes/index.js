const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");

module.exports = function ({ HomeRoutes }) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());

  apiRoutes.use("/", HomeRoutes);

  // con esto todos los endpoints van a tener el /api/v1
  router.use("/api/v1", apiRoutes);

  return router;
};
