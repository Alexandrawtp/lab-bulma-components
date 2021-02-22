import React from 'react';

const CoolButtons = props => {
  console.log(props);
  let classes = "button";
  if (props.isPrimary) {
    classes += " is-primary"
  }
  if (props.isDanger) {
    classes += " is-danger"
  }
  if (props.isSuccess) {
    classes += " is-success"
  }
  if (props.className) {
    classes += " is-rounded my-class"
  }
  return (
    <div className="field">
      <button className={classes}>{props.children}</button>
    </div>
  );
}

export default CoolButtons;
