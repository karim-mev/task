const Progress = require('../models/progress');

const getProgress = async() => {
    try {
        const progress = await Progress.findAll();
        return progress;
    } catch (error) {
        throw error;
    }
}

const getProgressById = async(id) => {
    try {
        const progress = await Progress.findByPk(id);
        return progress;
    } catch (error) {
        throw error;
    }
}

const getProgressByTaskID = async(TaskID) => {
    try {
        const progress = await Progress.findOne({ where: { TaskID: TaskID } });
        return progress;
    } catch (error) {
        throw error;
    }
}

const createProgress = async({ TaskID }) => {
    try {
        const createdProgress = await Progress.create({
            TaskID,
        });
        return createdProgress;
    } catch (error) {
        throw error;
    }
}

const updateProgress = async({ TaskID }) => {
    try {
        const updatedProgress = await Progress.update({
            TaskID,
        }, { where: { TaskID: TaskID } });
        return updatedProgress;
    } catch (error) {
        throw error;
    }
}

const deleteProgress = async(id) => {
    try {
        const progress = await Progress.destroy({ where: { ProgressID: id } });
        return progress;
    } catch (error) {
        throw error;
    }
}