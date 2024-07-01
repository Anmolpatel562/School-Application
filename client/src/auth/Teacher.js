import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKENDURL;

export const createTeacher = async ({
  name,
  gender,
  dob,
  email,
  phone,
  salary,
}) => {
  try {
    const response = await axios.post(`${backendUrl}teacher/createTeacher`, {
        name,
        gender,
        dob,
        email,
        phone,
        salary,
    });
    if (response) {
      alert(response.data.message);
    }
  } catch (error) {
    console.log(error);
  }
};
