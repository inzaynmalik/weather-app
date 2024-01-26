import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../store";

function DialogBox({ isOpen, onClose, initialData, handleSaveCallback }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    website: initialData.website || "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  useEffect(() => {
    setFormData({
      name: initialData.name || "",
      email: initialData.email || "",
      phone: initialData.phone || "",
      website: initialData.website || "",
    });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";
    switch (name) {
      case "name":
        error = value.trim() === "" ? "Name is required" : "";
        break;
      case "email":
        error = /^\S+@\S+\.\S+$/.test(value) ? "" : "Invalid email format";
        break;
      case "phone":
        error = /^\d+$/.test(value) ? "" : "Phone must contain only numbers";
        break;
      case "website":
        error = value.trim() === "" ? "Website is required" : "";
        break;
      default:
        break;
    }
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleClose = () => {
    setFormData({
      name: initialData.name || "",
      email: initialData.email || "",
      phone: initialData.phone || "",
      website: initialData.website || "",
    });
    onClose();
  };

  const handleSave = () => {
    if (Object.values(errors).every((error) => error === "")) {
      console.log("Updated Data:", { id: initialData.id, ...formData });
      dispatch(updateUserData({ id: initialData.id, ...formData }));
      onClose();
    } else {
      console.log("Form has errors. Cannot save.");
    }
  };
  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "80%",
          maxWidth: "450px",
          height: "70%",
          maxHeight: "360px",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            paddingBottom: "10px",
            height: "4vh",
          }}
        >
          <p style={{ flex: 1, margin: 0 }}>Basic Modal</p>
          <AiOutlineClose
            onClick={onClose}
            style={{ cursor: "pointer", marginLeft: "auto" }}
          />
        </div>

        {/* Input Fields */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2rem",
            height: "70%",
          }}
        >
          <div
            style={{
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              htmlFor="name"
              style={{ marginRight: "10px", minWidth: "80px" }}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                flex: 1,
                height: "30px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
          </div>

          <div
            style={{
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              htmlFor="email"
              style={{ marginRight: "10px", minWidth: "80px" }}
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                flex: 1,
                height: "30px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </div>

          <div
            style={{
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              htmlFor="phone"
              style={{ marginRight: "10px", minWidth: "80px" }}
            >
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                flex: 1,
                height: "30px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
            {errors.phone && (
              <span style={{ color: "red" }}>{errors.phone}</span>
            )}
          </div>

          <div
            style={{
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              htmlFor="website"
              style={{ marginRight: "10px", minWidth: "80px" }}
            >
              Website:
            </label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              style={{
                flex: 1,
                height: "30px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
            {errors.website && (
              <span style={{ color: "red" }}>{errors.website}</span>
            )}
          </div>
          <hr
            style={{ marginBottom: "1rem", borderColor: "rgba(0, 0, 0, 0.1)" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "auto",
            }}
          >
            <button
              style={{
                marginRight: "1rem",
                padding: "0.5rem",
                minWidth: "6rem",
                cursor: "pointer",
              }}
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              style={{
                padding: "0.3rem",
                minWidth: "3rem",
                backgroundColor: "#1890ff",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
              onClick={handleSave}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogBox;
