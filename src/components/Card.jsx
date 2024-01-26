import React, { useState } from "react";
import DialogBox from "./DialogBox";
import {
  AiOutlinePhone,
  AiOutlineGlobal,
  AiOutlineMail,
  AiOutlineHeart,
  AiOutlineEdit,
  AiOutlineDelete,
  AiFillHeart,
} from "react-icons/ai";
import { useDispatch } from "react-redux";

function Card(props) {
  const dispatch = useDispatch();

  const [isHeartClicked, setHeartClicked] = useState(false);
  const [isCardVisible, setCardVisible] = useState(true);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleHeartClick = () => {
    setHeartClicked(!isHeartClicked);
  };
  const handleDeleteClick = () => {
    setCardVisible(false);
  };
  const handleEditClick = () => {
    setDialogOpen(true);
  };
  const handleSaveCallback = () => {
    if (isCardVisible) {
      setCardVisible(false);
    }
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
  if (!isCardVisible) {
    return null;
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "350px",
        margin: "0 ",
        border: "1px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* PROFILE IMAGE */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <img
          src="https://avatars.dicebear.com/v2/avataaars/Antonette.svg?options[mood][]=happy"
          alt="happy"
          style={{ width: "80%", maxWidth: "200px", height: "auto" }}
        />
      </div>

      {/* INFO SECTION */}
      <div
        style={{
          textAlign: "left",
          padding: "1.5rem",
          fontFamily: "Poppins",
        }}
      >
        <p style={{ fontWeight: "500", fontSize: "16px" }}>{props.name}</p>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "0.5rem" }}
        >
          <AiOutlineMail />
          <p style={{ fontSize: "14px", margin: "0 0 5px 10px" }}>
            {props.email}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <AiOutlinePhone />
          <p style={{ fontSize: "14px", margin: "0 0 5px 10px" }}>
            {props.phone}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <AiOutlineGlobal />
          <p style={{ fontSize: "14px", margin: "0 0 5px 10px" }}>
            <a
              href={props.website}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {props.website}
            </a>
          </p>
        </div>
      </div>

      {/* ACTION ICONS */}
      <div
        style={{
          display: "flex",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          height: "5vh",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderRight: "1px solid #000",
            width: "33.3%",
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
            height: "2vh",
          }}
          onClick={handleHeartClick}
        >
          {isHeartClicked ? (
            <AiFillHeart style={{ color: "red" }} />
          ) : (
            <AiOutlineHeart />
          )}
        </div>
        <div
          style={{
            borderRight: "1px solid #000",
            width: "33.3%",
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
            height: "2vh",
          }}
          onClick={handleEditClick}
        >
          <AiOutlineEdit />
        </div>
        <div
          style={{
            width: "33.3%",
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
            height: "2vh",
          }}
          onClick={handleDeleteClick}
        >
          <AiOutlineDelete />
        </div>
      </div>
      <DialogBox
        isOpen={isDialogOpen}
        onClose={closeDialog}
        initialData={props}
        handleSaveCallback={handleSaveCallback}
      />
    </div>
  );
}

export default Card;
