import { Rate } from "antd";
import { useState } from "react";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const Rating = ({ handleChange }) => {
  const [value, setValue] = useState(3);
  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
    </span>
  );
};
export default Rating;
