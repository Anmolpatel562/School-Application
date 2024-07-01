const Student = require("../models/Student");
const Class = require("../models/Class");

const getStudent = async (req,res) => {
  try{
    const {id} = req.params;
    if(!id){
      return res.status(400).json({
        message:"Invalid student id",
      })
    }
    const student = await Student.findById(id);
    res.status(200).json({
      message:"Student fetched",
      student,
    })
  }catch(error){
    console.log(error);
    res.status(500).json({
      message:"Something went wrong",
    })
  }
}

const getAllStudentsByClassId = async (req,res) => {
  try{
   const {classId} = req.params;
   if(!classId){
    return res.status(400).json({
      message:"Invalid class Id",
    })
   } 
   console.log(classId)
   const students = await Class.find({_id:classId},{studentList:1,_id:0});
   res.status(200).json({
    message:"Students Fetched",
    students
   })
  }catch(error){
    console.log(error);
    res.status(500).json({
      message:"Something went wrong",
    })
  }
}

const createStudent = async (req, res) => {
  try {
    const { name, gender, dob, email, phone, feesPaid } = req.body;
    if (!name || !gender || !dob  ) {
      return res.status(400).json({
        message: "Incomplete credentials (createStudent)",
      });
    }

    const contactDetails = {
      email: email,
      phone: phone,
    };

    console.log(contactDetails);

    const response = await Student.create({
      name,
      gender,
      dob,
      contactDetails,
    });

    res.status(200).json({
      message: "Student created Successfully.",
      response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, dob, email, phone, feesPaid } = req.body;

    const contactDetails = {
      email: email,
      phone: phone,
    };

    await Student.findByIdAndUpdate(id, {
      name,
      gender,
      dob,
      contactDetails,
      feesPaid,
    });

    res.status(200).json({
      message: "User Updated Successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "Invalid Student id",
      });
    }
    await Student.findByIdAndDelete(id);
    res.status(200).json({
      message: "Student Deleted Successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = { createStudent, updateStudent, deleteStudent, getStudent, getAllStudentsByClassId };
