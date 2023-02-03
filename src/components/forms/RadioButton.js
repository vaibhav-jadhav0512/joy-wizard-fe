import { Radio } from "antd";
import { useState } from "react";
const plainOptions = ["Yes", "No"];

const RadioButton = () => {
  const [value1, setValue1] = useState("Apple");
  const onChange1 = ({ target: { value } }) => {
    setValue1(value);
  };

  return (
    <>
      <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      <br />
    </>
  );
};
export default RadioButton;
