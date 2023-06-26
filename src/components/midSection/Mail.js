import React from "react";
import "./Mail.css";
import { IconButton } from "@mui/material";

import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldLess,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectMail } from "../../features/mailSlice";
import { useHistory } from "react-router";
const Mail = () => {
  const selectedMail = useSelector(selectMail);
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <div className="mail">
      <div className="mailTools">
        <div className="mailToolsLeft">
          <IconButton onClick={handleClick}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mailToolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mailBody">
        <div className="mailBodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className="mailImportant" />
          <p>{selectedMail?.title}</p>
          <p className="mailTime">{selectedMail?.time}</p>
        </div>
        <div className="mailMassege">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
