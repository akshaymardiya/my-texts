import React from "react";

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
        <strong>{props.alert.type}: </strong><div>{props.alert.msg}</div>
      </div>
  );
}

export default Alert;
