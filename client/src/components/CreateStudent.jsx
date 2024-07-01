import { React, useState } from "react";
import style from "../components_css/CreateStudent.module.css";
import {createStudent} from "../auth/Student"

const CreateStudent = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
  });

  const createStudentHandler = async () => {
    if (!studentDetails.name) {
      alert("Name is empty");
      return;
    } else if (!studentDetails.gender) {
      alert("gnder is empty");
      return;
    } else if (!studentDetails.dob) {
      alert("dob is empty");
      return;
    } else if (!studentDetails.email) {
      alert("email is empty");
      return;
    } else if (!studentDetails.phone) {
      alert("phone is empty");
      return;
    } 
   console.log(studentDetails)
    await createStudent(studentDetails);
    setStudentDetails({
      name: "",
      gender: "",
      dob: "",
      email: "",
      phone: "",
    })
  };

  return (
    <div>
      <div className={style.createClassContainer}>
        <div className={style.inputFieldGroup}>
          <label>Name</label>
          <input
            className={style.inputFields}
            type="text"
            value={studentDetails.name}
            onChange={(e) =>
              setStudentDetails({
                ...studentDetails,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className={style.inputFieldGroup}>
          <label>Gender</label>
          <input
            className={style.inputFields}
            type="text"
            value={studentDetails.gender}
            onChange={(e) =>
              setStudentDetails({
                ...studentDetails,
                gender: e.target.value,
              })
            }
          />
        </div>
        <div className={style.inputFieldGroup}>
          <label>DOB</label>
          <input
            className={style.inputFields}
            type="text"
            value={studentDetails.dob}
            onChange={(e) =>
              setStudentDetails({
                ...studentDetails,
                dob: e.target.value,
              })
            }
          />
        </div>
        <div className={style.inputFieldGroup}>
          <label>Email</label>
          <input
            className={style.inputFields}
            type="email"
            value={studentDetails.email}
            onChange={(e) =>
              setStudentDetails({
                ...studentDetails,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className={style.inputFieldGroup}>
          <label>Phone</label>
          <input
            className={style.inputFields}
            type="Number"
            value={studentDetails.phone}
            onChange={(e) =>
              setStudentDetails({
                ...studentDetails,
                phone: e.target.value,
              })
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
            cursor: "pointer",
          }}
        >
          <div className={style.createButton} onClick={createStudentHandler}>Create Student</div>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
