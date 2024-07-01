import React, { useEffect, useState } from "react";
import style from "../components_css/CreateClass.module.css";
import { getAllStudentsByClassId } from "../auth/Student";
import { createClass } from "../auth/Class";

const CreateClass = () => {
  const [classDetails, setClassDetails] = useState({
    className: "",
    year: "",
    studentFees: "",
  });

  const createClassHandler = async() => {
    if(classDetails.className === ""){
       alert("ClassName is empty");
       return;
    }else if(classDetails.year === ""){
       alert("Year is empty");
       return;
    }else if(classDetails.studentFees === ""){
      alert("StudentFees is empty");
      return;
    }
    await createClass(classDetails);
    setClassDetails({
      className: "",
      year: "",
      studentFees: "",
    })
  };

  return (
    <div className={style.createClassContainer}>
      <div className={style.inputFieldGroup}>
        <label>Class Name</label>
        <input
          className={style.inputFields}
          type="text"
          value={classDetails.className}
          onChange={(e) =>
            setClassDetails({
              ...classDetails,
              className: e.target.value,
            })
          }
        />
      </div>
      <div className={style.inputFieldGroup}>
        <label>Year</label>
        <input
          className={style.inputFields}
          type="text"
          value={classDetails.year}
          onChange={(e) =>
            setClassDetails({
              ...classDetails,
              year: e.target.value,
            })
          }
        />
      </div>
      <div className={style.inputFieldGroup}>
        <label>StudentFees</label>
        <input className={style.inputFields} type="text" value={classDetails.studentFees}
          onChange={(e) =>
            setClassDetails({
              ...classDetails,
              studentFees: e.target.value,
            })
          }/>
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
        <div className={style.createButton} onClick={createClassHandler}>
          Create Class
        </div>
      </div>
    </div>
  );
};

export default CreateClass;
