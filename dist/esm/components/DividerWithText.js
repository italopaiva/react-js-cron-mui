import React from "react";
import { Box } from '@mui/material';
const DividerWithText = ({
  children
}) => {
  const line = React.createElement(Box, {
    component: "div",
    sx: {
      borderBottom: "2px solid lightgray",
      width: "100%"
    }
  });
  return React.createElement(Box, {
    component: "div",
    sx: {
      display: 'flex',
      alignItems: 'center'
    }
  }, line, React.createElement(Box, {
    component: "span",
    sx: {
      py: 0.5,
      px: 2,
      fontWeight: 500,
      fontSize: 22,
      color: "lightgray"
    }
  }, children), line);
};
export default DividerWithText;