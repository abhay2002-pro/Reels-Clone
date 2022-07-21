import React, { useState } from "react";
import { Button, Alert, LinearProgress } from "@mui/material";
import MovieIcon from "@material-ui/icons/Movie";
import { v4 as uuidv4 } from "uuid";
import { database, storage } from "../firebase";

function UploadFile({ user }) {
  console.log(user);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = async (file) => {
    if (file == null) {
      setError("Please upload a video first");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    if (file.size / (1024 * 1024) > 100) {
      setError("Please select a file of less than 10MB");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    let uid = uuidv4();
    const uploadTask = storage.ref(`/users/${uid}/${file.name}`).put(file);
    uploadTask.on("state_changed", fn1, fn2, fn3);
    setLoading(true);
    function fn1(snapshot) {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress} done.`);
    }
    function fn2(error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 2000);
      setLoading(false);
      return;
    }
    function fn3() {
      uploadTask.snapshot.ref.getDownloadURL().then((url) => {
        console.log(url);
        let obj = {
          likes: [],
          comments: [],
          pid: uid,
          pUrl: url,
          uName: user.fullname,
          uProfile: user.profileUrl,
          userId: user.userId,
          createdAt: database.getTimeStamp(),
        };
        database.posts
          .add(obj)
          .then(async (ref) => {
            let res = await database.users.doc(user.userId).update({
              postIds: user.postId != "" ? [...user.postIds, ref.id] : [ref.id],
            });
          })
          .then(() => {
            setLoading(false);
          })
          .catch((err) => {
            setError(error);
            setTimeout(() => {
              setError("");
            }, 2000);
            setLoading(false);
          });
      });
    }
  };
  return (
    <div>
      {error !== "" ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => handleChange(e.target.files[0])}
            id="upload-input"
            style={{ display: "none" }}
          />
          <label htmlFor="upload-input">
            <Button
              variant="outlined"
              color="secondary"
              component="span"
              disabled={loading}
            >
              <MovieIcon />
              &nbsp;Upload Video
            </Button>
          </label>
          {loading && (
            <LinearProgress color="secondary" style={{ marginTop: "3%" }} />
          )}
        </>
      )}
    </div>
  );
}

export default UploadFile;
