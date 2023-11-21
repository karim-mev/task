const {
  getProgress,
  getProgressById,
  getProgressByTaskID,
  createProgress,
  updateProgress,
  deleteProgress,
} = require("../services/progress.services");

const getProgressCont = async (req, res) => {
  try {
    const progress = await getProgress();
    res.status(200).json(progress);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProgressByIdCont = async (req, res) => {
  const id = req.params.id;
  try {
    const progress = await getProgressById(id);
    if (progress) {
      res.status(200).json(progress);
    } else {
      res.status(404).json({ error: "Progress not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProgressByTaskIDCont = async (req, res) => {
  const TaskID = req.params.TaskID;
  try {
    const progress = await getProgressByTaskID(TaskID);
    if (progress) {
      res.status(200).json(progress);
    } else {
      res.status(404).json({ error: "Progress not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createProgressCont = async (req, res) => {
  const { TaskID } = req.body;
  try {
    const createdProgress = await createProgress({
      TaskID,
    });
    res.status(201).json(createdProgress);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateProgressCont = async (req, res) => {
  const { TaskID } = req.body;
  try {
    const updatedProgress = await updateProgress({
      TaskID,
    });
    if (!updatedProgress) {
      res.status(404).json({ error: "Progress not found" });
    } else {
      res.status(200).json(updatedProgress);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteProgressCont = async (req, res) => {
  const id = req.params.id;
  try {
    const progress = await deleteProgress(id);
    if (!progress) {
      res.status(404).json({ error: "Progress not found" });
    } else {
      res.status(200).json(progress);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getProgressCont,
  getProgressByIdCont,
  getProgressByTaskIDCont,
  createProgressCont,
  updateProgressCont,
  deleteProgressCont,
};
