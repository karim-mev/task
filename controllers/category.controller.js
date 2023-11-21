const {
  getCategories,
  getCategoryById,
  getCategoryByName,
  createCategory,
  updateCategory,
} = require("../services/category.service");

const getCategoriesCont = async (req, res) => {
  try {
    const categories = await getCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategoryByIdCont = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await getCategoryById(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategoryByNameCont = async (req, res) => {
  try {
    const { name } = req.params;
    const category = await getCategoryByName(name);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCategoryCont = async (req, res) => {
  try {
    const category = req.body;
    const newCategory = await createCategory(category);
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCategoryCont = async (req, res) => {
  try {
    const category = req.body;
    const updatedCategory = await updateCategory(category);
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCategoriesCont,
  getCategoryByIdCont,
  getCategoryByNameCont,
  createCategoryCont,
  updateCategoryCont,
};
