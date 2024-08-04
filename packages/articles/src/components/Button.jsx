import React from "react";

export default ({ title, onClick }) => (
  <button className="button_component" onClick={onClick}>
    {title}
  </button>
);
