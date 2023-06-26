import React from "react";
import "./SendMail.css";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { closeSendMessege } from "../../features/mailSlice";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dipatch(closeSendMessege());
  };

  const dipatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMailHeader">
        <h3>New message</h3>
        <Close
          className="sendMailClose"
          onClick={() => dipatch(closeSendMessege())}
        />
      </div>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMailError"> To is Required!</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMailError"> Subject is Required!</p>
        )}
        <input
          name="message"
          placeholder="Message"
          type="text"
          className="sendMailMessage"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMailError"> Message is Required!</p>
        )}
        <div className="sendMailOptions">
          <Button
            className="sendMailSend"
            color="primary"
            variant="contained"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
