const express = require("express");

const router = express();

router.get("/", getProgressCont);
router.get("/:id", getProgressByIdCont);
router.get("/:TaskID", getProgressByTaskIDCont);
router.post("/", createProgressCont);
router.put("/:id", updateProgressCont);
router.delete("/:id", deleteProgressCont);

module.exports = router;