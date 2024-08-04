import React from "react";

export default ({name,placeHolder, onChange}) => 
    <input className='input_component' placeHolder={placeHolder} name={name} onChange={onChange} />;
