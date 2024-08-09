import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function PasswordChangeForm() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Handle password change logic here
    console.log("Password changed");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a", // Dark background color
        padding: "20px",
        borderRadius: "8px",
        width: "400px",
        margin: "auto",
        color: "#fff", // White text color
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        Password change
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        Please enter your old password, for security's sake, and then enter your
        new password twice so we can verify you typed it in correctly.
      </Typography>
      <TextField
        label="Old password"
        type="password"
        fullWidth
        variant="outlined"
        value={oldPassword}
        onChange={handleOldPasswordChange}
        sx={{
          marginBottom: "20px",
          backgroundColor: "#333",
          color: "#fff",
          input: { color: "#fff" },
          label: { color: "#aaa" },
        }}
      />
      <TextField
        label="New password"
        type="password"
        fullWidth
        variant="outlined"
        value={newPassword}
        onChange={handleNewPasswordChange}
        sx={{
          marginBottom: "10px",
          backgroundColor: "#333",
          color: "#fff",
          input: { color: "#fff" },
          label: { color: "#aaa" },
        }}
      />
      <Box sx={{ marginBottom: "20px", color: "#aaa", fontSize: "14px" }}>
        <ul>
          <li>
            Your password can’t be too similar to your other personal
            information.
          </li>
          <li>Your password must contain at least 8 characters.</li>
          <li>Your password can’t be a commonly used password.</li>
          <li>Your password can’t be entirely numeric.</li>
        </ul>
      </Box>
      <TextField
        label="New password confirmation"
        type="password"
        fullWidth
        variant="outlined"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        sx={{
          marginBottom: "20px",
          backgroundColor: "#333",
          color: "#fff",
          input: { color: "#fff" },
          label: { color: "#aaa" },
        }}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#007bff", // Blue button color
          color: "#fff",
          "&:hover": {
            backgroundColor: "#0056b3",
          },
        }}
        onClick={handleSubmit}
      >
        CHANGE MY PASSWORD
      </Button>
    </Box>
  );
}
