import React, { useState } from "react";
import styled from "styled-components";

const StyledContainerA = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  align-items: center;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: start;
    column-gap: 4px;
    row-gap: 4px;
    width: 100vw;
    padding: 0px 10px;
    .CustomLabel {
      width: 100%;
    }
    .CustomInput {
      width: 100%;
    }
  }
`;

const CustomSelect = ({ label, options, value, setValue }) => {
  return (
    <StyledContainerA>
      <div className="w-[200px] CustomLabel">{label}:</div>
      <select
        className="w-[280px] px-3 py-2 rounded-md border-2 border-gray-600 bg-[#121212] text-white placeholder:text-gray-600 CustomInput"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value={""} disabled>
          Select Option
        </option>
        {options.map((option) => (
          <option
            key={option._id}
            value={option._id}
            className="cursor-pointer"
          >
            {option.label}
          </option>
        ))}
      </select>
    </StyledContainerA>
  );
};

export default CustomSelect;
