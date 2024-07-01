import React, { useEffect, useState } from "react";
import styles from "../components_css/AdminPage.module.css";
import { getAllClasses } from "../auth/Class";
import { deleteClass } from "../auth/Class";
import ClassDetails from "./ClassDetails.jsx";
import {getClassDetails} from "../auth/Class.js"

const AdminPage = () => {
  const [showClassDetails,setShowClassDetails] = useState(false);
  const [classDetails,setClassDetails] = useState(null);
  const deleteClassHandler = async (id) => {
    await deleteClass(id);
  };

  const classDetailsHandler = async (id) => {
    const response = await getClassDetails(id);
    setClassDetails(response.data.classInfo)
    console.log(response);
    setShowClassDetails(true);
  }

  const [classesData, setClassesData] = useState([]);
  useEffect(() => {
    fetchAllClasses();
  }, []);

  const fetchAllClasses = async () => {
    const response = await getAllClasses();
    console.log(response)
    if (response) {
      setClassesData(response.data.classes);
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <div style={{ fontSize: "30px" }}>Classes</div>
      <div>
        {classesData.map((item) => {
          return (
            <div className={styles.classContainer}>
              {showClassDetails?<ClassDetails item={classDetails} setShowClassDetails={setShowClassDetails}></ClassDetails>:<></>}
              <div>{item.className}</div>
              <div className={styles.features}>
                <div className={styles.eachFeature} onClick={()=>classDetailsHandler(item._id)}>Class Details</div>
                <div className={styles.eachFeature}
               
                >Update</div>
                <div
                  className={styles.eachFeature}
                  onClick={() => deleteClassHandler(item._id)}
                >
                  Delete
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPage;
