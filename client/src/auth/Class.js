import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKENDURL;

export const createClass = async ({ className, year, studentFees }) => {
  try {
    console.log(className);
    console.log(year);
    console.log(studentFees);

    if (!className || !year || !studentFees) {
      console.log("ClassId Empty !!");
      return;
    }
    const response = await axios.post(
      `${backendUrl}class/createClass`,{className, year, studentFees}
    );
    if(response){
       alert(response.data.message);
    }
     
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getAllClasses = async () => {
  try{
   const response = await axios.get(`${backendUrl}class/getAllClasses`)
   return response;
  }catch(error){
    console.log(error);
  }
}

export const deleteClass = async (id) => {
  try{
    const response = await axios.delete(`${backendUrl}class/deleteClass/${id}`)
    alert("Class Deleted Successfully Please Refresh");
   }catch(error){
     console.log(error);
   }
}

export const getClassDetails = async (id) => {
  console.log(id)
  try{
  const response = await axios.get(`${backendUrl}class/getClass/${id}`)
  if(!response){
    return;
  }
  return response;
  }catch(error){
   console.log(error);
  }
}