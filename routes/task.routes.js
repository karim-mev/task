const express = require("express");
const { getAllTasksCont, createTaskCont } = require("../controllers/tasks.controller");

const router = express();

router.get('/', getAllTasksCont);
router.get('/:UserID', getUserTasksCont);
router.get('/:TaskID', getTaskByTaskIDCont);
router.post('/', createTaskCont);
router.put('/:TaskID', updateTaskCont);
router.delete('/:TaskID', deleteTaskCont);

module.exports = router;
