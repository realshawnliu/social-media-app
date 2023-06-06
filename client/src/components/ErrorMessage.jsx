import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { ErrorOutlineOutlined } from "@mui/icons-material";

const ErrorMessage = ({ error }) => {
  const { palette } = useTheme();
  const main = palette.neutral.main;

  // Show error message for a fixed time period
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        color: { main },
      }}
    >
      <ErrorOutlineOutlined sx={{ marginRight: "0.5rem" }} />
      <Typography color={main} variant="body1" fontWeight="500">
        {error}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
