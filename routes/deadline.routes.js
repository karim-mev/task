const express = require("express");

const router = express();

router.get("/", getDeadlineCont);
router.get("/:id", getDeadlineByIdCont);
router.get("/:TaskID", getDeadlineByTaskIDCont);
router.post("/", createDeadlineCont);
router.put("/:id", updateDeadlineCont);
router.delete("/:id", deleteDeadlineCont);

module.exports = router;