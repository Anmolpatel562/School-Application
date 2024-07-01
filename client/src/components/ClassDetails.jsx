import React from "react";
import styles from "../components_css/ClassDetails.module.css";
const ClassDetails = ({ item ,setShowClassDetails}) => {
  console.log(item);
  const cancelHandler = () => {
    setShowClassDetails(false);
  }
  return (
    <div className={styles.classDetailsContainer}>
      <div className={styles.groupDetails}>
        <div>Class name : </div>
        <div>{item.className}</div>
      </div>
      <div className={styles.groupDetails}>
        <div>Year : </div>
        <div>{item.year}</div>
      </div>

      <div className={styles.groupDetails}>
        <div>StudentFees : </div>
        <div>{item.studentFees}</div>
      </div>
      <div className={styles.groupDetails}>
        <div>Created At : </div>
        <div>{item.createdAt}</div>
      </div>

      <div className={styles.groupDetails}>
        <div>Last Updated : </div>
        <div>{item.updatedAt}</div>
      </div>
      <div className={styles.cancelButtonContainer}>
        <div className={styles.cancelBtton} onClick={cancelHandler}>Cancel</div>
      </div>
    </div>
  );
};

export default ClassDetails;
