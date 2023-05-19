const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

const Grid = styled(Box)({
  display: "grid grid-cols-2",
  gap: "10px"
});

export default Grid;