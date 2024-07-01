import React, { useEffect, useState } from "react";
import styles from "../pages_css/HomePage.module.css";
import { useNavigate } from "react-router-dom";
import AdminPage from "../components/AdminPage.jsx";
import AnalyticsPage from "../components/AnalyticsPage.jsx";
import CreateStudentTeacherPage from "../components/CreateStudentTeacherPage.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  const [selectedFeature, setSelectedFeature] = useState({
    name: "Dashboard",
    dashboardCss: "rgb(192, 192, 192) 0px 0px 15px -3px",
    analyticsCss: "",
    createQuizCss: "",
  });

  const selectedPanelHandler = (name) => {
    if (name === "Analytics") {
      setSelectedFeature({
        name: "Analytics",
        dashboardCss: "",
        analyticsCss: "rgb(192, 192, 192) 0px 0px 15px -3px",
        createQuizCss: "",
      });
    } else if (name === "Dashboard") {
      setSelectedFeature({
        name: "Dashboard",
        dashboardCss: "rgb(192, 192, 192) 0px 0px 15px -3px",
        analyticsCss: "",
        createQuizCss: "",
      });
    } else if (name === "CreateQuiz") {
      setSelectedFeature({
        name: "CreateQuiz",
        dashboardCss: "",
        analyticsCss: "",
        createQuizCss: "rgb(192, 192, 192) 0px 0px 15px -3px",
      });
    }
  };

  const logoutBtnHandler = () => {
    localStorage.removeItem("token");
    navigate("/userLoginSignUpPage", {
      state: "navigated from logout",
    });
  };

  return (
    <div className={styles.topContainer}>
      <div className={styles.sideBar}>
        <div className={styles.appName}>My School App</div>
        <div className={styles.featuresDiv}>
          <button
            style={{ boxShadow: selectedFeature.dashboardCss }}
            className={styles.features}
            onClick={() => selectedPanelHandler("Dashboard")}
          >
            Dashboard
          </button>
          <button
            style={{ boxShadow: selectedFeature.analyticsCss }}
            className={styles.features}
            onClick={() => selectedPanelHandler("Analytics")}
          >
            Analytics
          </button>
          <button
            style={{ boxShadow: selectedFeature.createQuizCss }}
            className={styles.features}
            onClick={() => selectedPanelHandler("CreateQuiz")}
          >
            Create 
          </button>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "120px",
              height: "1px",
              backgroundColor: "#474444",
              marginBottom: "15px",
            }}
          ></div>
          <div
            style={{ cursor: "pointer", fontWeight: "600", fontSize: "18px" }}
            onClick={logoutBtnHandler}
          >
            LOGOUT
          </div>
        </div>
      </div>
      <div className={styles.mainSection}>
        {selectedFeature.name === "Dashboard" ? (
          <AdminPage />
        ) : selectedFeature.name === "Analytics" ? (
          <AnalyticsPage />
        ) : selectedFeature.name === "CreateQuiz" ? (
          <CreateStudentTeacherPage />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default HomePage;
