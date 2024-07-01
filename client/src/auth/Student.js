import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKENDURL;
export const getAllStudentsByClassId = async (classId) => {
  try {
    console.log(classId);
    if (!classId) {
      console.log("ClassId Empty !!");
      return;
    }
    const response = await axios.get(
      `${backendUrl}student/getAllStudentsByClassId/${classId}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const createStudent = async ({
  name,
  gender,
  dob,
  email,
  phone,
  feesPaid,
}) => {
  try {
    const response = await axios.post(`${backendUrl}student/createStudent`, {
      name,
      gender,
      dob,
      email,
      phone,
      feesPaid,
    });
    if (response) {
      alert(response.data.message);
    }
  } catch (error) {
    console.log(error);
  }
};
