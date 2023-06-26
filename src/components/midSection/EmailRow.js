import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useDispatch } from "react-redux";
import { selectMail } from "../../features/mailSlice";
import { useHistory } from "react-router";

const EmailRow = ({ id, title, subject, description, time }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("/mail");
  };

  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRowOptions"></div>
      <Checkbox />
      <IconButton>
        <StarOutlineIcon />
      </IconButton>
      <IconButton>
        <LabelImportantOutlinedIcon />
      </IconButton>
      <h3 className="emailRowTitle">{title}</h3>
      <div className="emailRowMassage">
        <h4>
          {subject}{" "}
          <span className="emailRowDescription"> - {description}</span>
        </h4>
      </div>
      <p className="emailRowTime">{time}</p>
    </div>
  );
};

export default EmailRow;
