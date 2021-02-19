import React from "react";

const stepper = (props) => {
  const onSelect = (current, stepIndex) => {
    return () => {
      const { steps, name, onChange } = props;
      const updated = steps.map((step, index) => ({
        ...step,
        selected: index === stepIndex,
        highlighted: index <= stepIndex
      }));

      onChange && onChange(name, { value: updated }, { ...current, stepIndex });
    };
  };

  const onKeyPress = (current, index) => {
    return (e) => {
      if (e.key === "Enter" || e.keyCode === 13) {
        onSelect(current, index)();
      }
    };
  };

  const {
    steps: [],
    label,
    ...otherProps
  } = props;

  const stepsDisplay = steps.map((step, index) => {
    const isLast = index !== steps.length - 1;
    return (
      <div
        className={
          "stepper-wrapper position-relative display-flex hover-highlight--primary"
        }
        key={`step_${index}`}
        role="button"
        tabIndex={index}
        onClick={onSelect(step, index)}
        onKeyPress={onKeyPress(step, index)}
      >
        <div
          className={`step-number marginright-lg ${
            step.selected
              ? "step-number-active"
              : "step-number-disabled marginleft-xs"
          }`}
        ></div>
        <div
          className={`step-description ${
            step.highlighted && "step-description-active"
          } ${step.selected && "step-number-description-active"}`}
        >
          {step.value}
        </div>
        {isLast && <div className="divider-line position-absolute"></div>}
      </div>
    );
  });

  return (
    <div
      className="stepper-container-vertical padding-lg marginleft-lg"
      {...otherProps}
    >
      <div>
        {label && (
          <div className="stepper-heading marginbottom-md">{label}</div>
        )}
        {stepsDisplay}
      </div>
    </div>
  );
};

export default stepper;
