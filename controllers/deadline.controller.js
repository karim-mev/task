const {
  createDeadline,
  getAllDeadlines,
  getDeadlineByTaskID,
  getDeadlineByReminderTime,
} = require("../services/deadline.services");

const createDeadlineCont = async (req, res) => {
  const { TaskID, ReminderTime } = req.body;
  try {
    const createdDeadline = await createDeadline({
      TaskID,
      ReminderTime,
    });
    res.status(201).json(createdDeadline);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllDeadlinesCont = async (req, res) => {
  try {
    const allDeadlines = await getAllDeadlines();
    res.status(200).json(allDeadlines);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getDeadlineByTaskIDCont = async (req, res) => {
  const TaskID = req.params.TaskID;
  try {
    const deadline = await getDeadlineByTaskID(TaskID);
    if (deadline) {
      res.status(200).json(deadline);
    } else {
      res.status(404).json({ error: "Deadline not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getDeadlineByReminderTimeCont = async (req, res) => {
  const ReminderTime = req.params.ReminderTime;
  try {
    const deadline = await getDeadlineByReminderTime(ReminderTime);
    if (deadline) {
      res.status(200).json(deadline);
    } else {
      res.status(404).json({ error: "Deadline not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createDeadlineCont,
  getAllDeadlinesCont,
  getDeadlineByTaskIDCont,
  getDeadlineByReminderTimeCont,
};
