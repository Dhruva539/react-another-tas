import React from "react";
import Stepper from "./stepper";

const verticalStepper = (props) => {
  const [menuOpen, setOpen] = useState(false);
  const [steps, setSteps] = useState([]);
  const toggle = () => {
    setOpen(!menuOpen);
  };
  const onChange = (name, value, current = {}) => {};
  const clickOutSidePanel = () => {
    menuOpen && setOpen(false);
  };
  return (
    <>
      <button onClick={toggle} onKeypress={toggle}></button>
      <Stepper
        className="vertical-stepper-parent"
        name="stepperSliderLabels"
        label="Expand To"
        steps={steps}
        onChange={onChange}
      />
    </>
  );
};

export default verticalStepper;
