'use client';

import React, { useState } from 'react';

const RadioButtonGroup = (props) => {
  return (
    <div className="flex items-center gap-10">
      {props.options?.map((option, index) => (
        <div key={index} className='flex items-center space-x-3'>
            <input
                type="radio"
                id={option.id}
                name="contentType"
                value={option.value}
                checked={props.selectedOption === option.value}
                onChange={props.onChange}
                required
                />
            <label htmlFor={option.id} className="cursor-pointer">
                {option.label}
            </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
