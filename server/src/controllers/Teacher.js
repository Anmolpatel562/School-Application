const Teacher = require("../models/Teacher");

const getTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "Invalid Teacher id",
      });
    }
    const teacher = await Teacher.findById(id);
    res.status(200).json({
      message: "Teacher fetched",
      teacher,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const createTeacher = async (req, res) => {
  try {
    const { name, gender, dob, email, phone, salary } = req.body;
    if (
      !name ||
      !gender ||
      !dob ||
      !email ||
      !phone ||
      !salary 
    ) {
      return res.status(400).json({
        message: "Incomplete credentials (createTeacher)",
      });
    }

    const contactDetails = {
      email: email,
      phone: phone,
    };

    const response = await Teacher.create({
      name,
      gender,
      dob,
      contactDetails,
      salary,
    });

    res.status(200).json({
      message: "Teacher created Successfully.",
      response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, dob, email, phone, salary, assignedClass } = req.body;

    const contactDetails = {
      email: email,
      phone: phone,
    };

    await Teacher.findByIdAndUpdate(id, {
      name,
      gender,
      dob,
      contactDetails,
      salary,
      assignedClass,
    });

    res.status(200).json({
      message: "teacher Updated Successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "Invalid teacher id",
      });
    }
    await Teacher.findByIdAndDelete(id);

    res.status(200).json({
      message: "teacher Deleted Successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = { getTeacher, updateTeacher, deleteTeacher, createTeacher };
