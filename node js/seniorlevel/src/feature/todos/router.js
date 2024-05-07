const express = require("express");
import { validatoruserparams } from "./validator";
import { controler } from "./controller";
const router = express.Router();
router.get("/", validatoruserparams, controler);
module.exports = router;
