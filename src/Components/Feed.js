import React, { useContext, useState, useEffect } from "react";
import styles from "./Feed.module.css";
import { AuthContext } from "../Context/AuthContext";
import UploadFile from "./UploadFile";
import { database } from "../firebase";

function Feed() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const unsub = database.users.doc(user.uid).onSnapshot((snapshot) => {
      setUserData(snapshot.data());
    });
    return () => {
      unsub();
    };
  }, [user]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className={styles.comp} style={{ width: "50%" }}>
        <h1>Welcome to Feed</h1>
      </div>
      <UploadFile user={userData} />
    </div>
  );
}

export default Feed;
