const Switch = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.setSwitch(true);
        }}
        style={{ background: props.switchValue === true ? "green" : "grey" }}
      >
        ON
      </button>
      <button
        onClick={() => {
          props.setSwitch(false);
        }}
        style={{ background: props.switchValue === false ? "red" : "grey" }}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
