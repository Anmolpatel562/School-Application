import { React, useEffect, useState } from "react";
import styles from "../components_css/CreateStudentTeacherPage.module.css";
import CreateClass from "../components/CreateClass";
import CreateTeacher from "../components/CreateTeacher";
import CreateStudent from "../components/CreateStudent";


const CreateStudentTeacherPage = () => {

  const [selectedFeature, setSelectedFeature] = useState({
    name: "Class",
    classCss: "rgb(192, 192, 192) 0px 0px 15px -3px",
    teacherCss: "",
    studentCss: "",
    classBg: "white",
    teacherBg: "",
    studentBg: "",
  });

  const selectedPanelHandler = (name) => {
    if (name === "Class") {
      setSelectedFeature({
        name: "Class",
        classCss: "rgb(192, 192, 192) 0px 0px 15px -3px",
        teacherCss: "",
        studentCss: "",
        classBg: "white",
        teacherBg: "",
        studentBg: "",
      });
    } else if (name === "Teacher") {
      setSelectedFeature({
        name: "Teacher",
        classCss: "",
        teacherCss: "rgb(192, 192, 192) 0px 0px 15px -3px",
        studentCss: "",
        classBg: "",
        teacherBg: "white",
        studentBg: "",
      });
    } else if (name === "Student") {
      setSelectedFeature({
        name: "Student",
        classCss: "",
        teacherCss: "",
        studentCss: "rgb(192, 192, 192) 0px 0px 15px -3px",
        classBg: "",
        teacherBg: "",
        studentBg: "white",
      });
    }
  };

  return (
    <div className={styles.createStudentTeacherPageContainer}>
      <div style={{ textAlign: "center", fontSize: "25px" }}>Create New</div>
      <div style={{ width: "70%", margin: "0 auto" }} className={styles.header}>
        <div
          style={{
            boxShadow: selectedFeature.classCss,
            backgroundColor: selectedFeature.classBg,
          }}
          onClick={() => selectedPanelHandler("Class")}
          className={styles.userGroup}
        >
          Class
        </div>
        <div
          style={{
            boxShadow: selectedFeature.teacherCss,
            backgroundColor: selectedFeature.teacherBg,
          }}
          onClick={() => selectedPanelHandler("Teacher")}
          className={styles.userGroup}
        >
          Teacher
        </div>
        <div
          style={{
            boxShadow: selectedFeature.studentCss,
            backgroundColor: selectedFeature.studentBg,
          }}
          onClick={() => selectedPanelHandler("Student")}
          className={styles.userGroup}
        >
          Student
        </div>
      </div>
      <div className={styles.mainSection}>
        {selectedFeature.name === "Student" ? (
          <CreateStudent />
        ) : selectedFeature.name === "Teacher" ? (
          <CreateTeacher />
        ) : (
          <CreateClass />
        )}
      </div>
    </div>
  );
};

export default CreateStudentTeacherPage;
