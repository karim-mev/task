const {
  createTask,
  getAllTasks,
  getUserTasks,
  getTaskByTaskID,
  updateTask,
  deleteTask,
} = require("../services/tasks.services");

const createTaskCont = async (req, res) => {
  const { UserID, Title, Description, CategoryID, DueDate, Status } = req.body;
  try {
    const createdTask = await createTask({
      UserID,
      Title,
      Description,
      CategoryID,
      DueDate,
      Status,
    });
    res.status(201).json(createdTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllTasksCont = async (req, res) => {
  try {
    const allTasks = await getAllTasks();
    res.status(200).json(allTasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUserTasksCont = async (req, res) => {
  const UserID = req.params.UserID;
  try {
    const userTasks = await getUserTasks(UserID);
    if (userTasks) {
      res.status(200).json(userTasks);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTaskByTaskIDCont = async (req, res) => {
  const TaskID = req.params.TaskID;
  try {
    const task = await getTaskByTaskID(TaskID);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateTaskCont = async (req, res) => {
  const { UserID, Title, Description, CategoryID, DueDate, Status } = req.body;
  try {
    const updatedTask = await updateTask({
      UserID,
      Title,
      Description,
      CategoryID,
      DueDate,
      Status,
    });
    if (!updatedTask) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.status(200).json(updatedTask);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteTaskCont = async (req, res) => {
  const TaskID = req.params.TaskID;
  try {
    const deletedTask = await deleteTask(TaskID);
    if (!deletedTask) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.status(200).json(deletedTask);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createTaskCont,
  getAllTasksCont,
  getUserTasksCont,
  getTaskByTaskIDCont,
  updateTaskCont,
  deleteTaskCont,
};
