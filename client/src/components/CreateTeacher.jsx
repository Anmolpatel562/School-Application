import { React, useState } from "react";
import style from "../components_css/CreateTeacher.module.css";
import { createTeacher } from "../auth/Teacher";

const CreateTeacher = () => {
  const [teacherDetails, setTeacherDetails] = useState({
    name: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
    salary: "",
  });

  const createTeacherHandler = async() => {
    if(!teacherDetails.name){
      alert("Name is empty");
      return;
    }else if(!teacherDetails.gender){
      alert("gnder is empty");
      return;
    }else if(!teacherDetails.dob){
      alert("dob is empty");
      return;
    }else if(!teacherDetails.email){
      alert("email is empty");
      return;
    }else if(!teacherDetails.phone){
      alert("phone is empty");
      return;
    }else if(!teacherDetails.salary){
      alert("salary is empty");
      return;
    }

    await createTeacher(teacherDetails);

  }

  return (
    <div>
      <div className={style.createClassContainer}>
        <div className={style.inputFieldGroup}>
          <label>Name</label>
          <input
            className={style.inputFields}
            type="text"
            value={teacherDetails.name}
            onChange={(e) =>
              setTeacherDetails({
                ...teacherDetails,
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
            value={teacherDetails.gender}
            onChange={(e) =>
              setTeacherDetails({
                ...teacherDetails,
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
            value={teacherDetails.dob}
            onChange={(e) =>
              setTeacherDetails({
                ...teacherDetails,
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
            value={teacherDetails.email}
            onChange={(e) =>
              setTeacherDetails({
                ...teacherDetails,
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
            value={teacherDetails.phone}
            onChange={(e) =>
              setTeacherDetails({
                ...teacherDetails,
                phone: e.target.value,
              })
            }
          />
        </div>
        <div className={style.inputFieldGroup}>
          <label>Salary</label>
          <input
            className={style.inputFields}
            type="text"
            value={teacherDetails.salary}
            onChange={(e) =>
              setTeacherDetails({
                ...teacherDetails,
                salary: e.target.value,
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
          <div className={style.createButton} onClick={createTeacherHandler}>Create Teacher</div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeacher;
