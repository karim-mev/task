const { Category } = require("../models");

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id);
  return category;
};

const getCategoryByName = async (name) => {
  const category = await Category.findOne({ where: { CategoryName: name } });
  return category;
};

const createCategory = async (category) => {
  const newCategory = await Category.create(category);
  return newCategory;
};

const updateCategory = async (category) => {
  const updatedCategory = await Category.update(category, {
    where: {
      CategoryID: category.CategoryID,
    },
  });
  return updatedCategory;
};

module.exports = {
  getCategories,
  getCategoryById,
  getCategoryByName,
  createCategory,
  updateCategory,
};
