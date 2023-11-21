const Task = require("../models/task");

const createTask = async ({ UserID, Title, Description, CategoryID, DueDate, Status }) => {
  try {
    const createdTask = await Task.create({
      UserID,
      Title,
      Description,
      CategoryID,
      DueDate,
      Status,
    });
    return createdTask;
  } catch (error) {
    throw error;
  }
}

const getAllTasks = async () => {
  try {
    const allTasks = await Task.findAll();
    return allTasks;
  } catch (error) {
    throw error;
  }
};

const getUserTasks = async (UserID) => {
    try {
        const userTasks = await Task.findAll({ where: { UserID: UserID } });
        return userTasks;
    } catch (error) {
        throw error;
    }
}

const getTaskByTaskID = async (TaskID) => {
  try {
    const task = await Task.findByPk(TaskID);
    return task;
  } catch (error) {
    throw error;
  }
}

const getTaskByCategoryName = async (CategoryName) => {
  try {
    //const task = await Task.findOne({ where: { CategoryName: CategoryName } });
    const task = await Task.findAll({
      include: [{
        model: Category,
        where: { CategoryName: CategoryName },
      }],
    });
    return task;
  } catch (error) {
    throw error;
  }
}

const updateTask = async ({ UserID, Title, Description, CategoryID, DueDate, Status }) => {
  try {
    const task = await Task.update(
      { UserID, Title, Description, CategoryID, DueDate, Status },
      { where: { TaskID: TaskID } }
    );
    return task;
  } catch (error) {
    throw error;
  }
}

const deleteTask = async (TaskID) => {
  try {
    const task = await Task.destroy({ where: { TaskID: TaskID } });
    return task;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createTask,
  getAllTasks,
  getTaskByTaskID,
  updateTask,
  deleteTask,
};
