const Deadline = require('../models/deadline.model');

const createDeadline = async ({ TaskID, ReminderTime }) => {
  try {
    const createdDeadline = await Deadline.create({
      TaskID,
      ReminderTime,
    });
    return createdDeadline;
  } catch (error) {
    throw error;
  }
}

const getAllDeadlines = async () => {
  try {
    const allDeadlines = await Deadline.findAll();
    return allDeadlines;
  } catch (error) {
    throw error;
  }
};

const getDeadlineByTaskID = async (TaskID) => {
  try {
    const deadline = await Deadline.findByPk(TaskID);
    return deadline;
  } catch (error) {
    throw error;
  }
}

const getDeadlineByReminderTime = async (ReminderTime) => {
  try {
    const deadline = await Deadline.findOne({ where: { ReminderTime: ReminderTime } });
    return deadline;
  } catch (error) {
    throw error;
  }
}