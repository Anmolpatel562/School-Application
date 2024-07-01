const Class = require("../models/Class");

const getClass = async (req, res) => {
  try {
    
    const { id } = req.params;
    console.log(id)
    if (!id) {
      return res.status(400).json({
        message: "Invalid Class id",
      });
    }
    const classInfo = await Class.findById(id);
    res.status(200).json({
      message: "Class fetched",
      classInfo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const getAllClasses = async (req,res) => {
  try{
  const classes = await Class.find();
  res.status(200).json({
    message:"Fetched Successfully",
    classes
  })
  }catch(error){
    console.log(error);
    res.status(500).json({
      message:"Something went wrong",
    })
  }
}

const createClass = async (req, res) => {
  try {
    const { className, year, studentFees } = req.body;

    if (!className || !year || !studentFees) {
      return res.status(400).json({
        message: "Incomplete Credentials",
      });
    }

    const response = await Class.create({
      className,
      year,
      studentFees,
    });
    res.status(200).json({
      message: "Class created Successfully,",
      response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const { className, year, studentFees } = req.body;

    await Class.findByIdAndUpdate(id, {
      className,
      year,
      studentFees,
    });
    res.status(200).json({
      message: "Class Updated Successfully,",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const deleteClass = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "Invalid Class id",
      });
    }
    await Class.findByIdAndDelete(id);
    res.status(200).json({
      message: "Class Deleted Successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = { getClass, createClass, updateClass, deleteClass, getAllClasses };
