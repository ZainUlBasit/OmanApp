import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const navigate = useNavigate();
  const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 15px;
    font-family: "Roboto", sans-serif;
    background-color: #417690;
    color: white;

    @media screen and (max-width: 900px) {
      flex-direction: column;
      column-gap: 20px;
    }
  `;
  return (
    <StyledContainer>
      <div
        className="font-normal font-roboto text-xl text-[#F5DD5D] cursor-pointer select-none"
        onClick={() => {
          navigate("/");
        }}
      >
        Oman Administrator
      </div>
      <div className="flex items-center text-sm gap-x-2 font-normal flex-wrap gap-y-2">
        <div className="text-[#F5DD5D] select-none text-[15px]  whitespace-nowrap">
          WELCOME, <span className="font-bold">ADMIN.</span>
        </div>
        <div
          className="cursor-pointer whitespace-nowrap"
          onClick={() => {
            navigate("/all-records");
          }}
        >
          VIEW SITE
        </div>
        /
        <div
          className="cursor-pointer whitespace-nowrap"
          onClick={() => {
            navigate("/change-password");
          }}
        >
          CHANGE PASSWORD{" "}
        </div>
        / <div className="cursor-pointer whitespace-nowrap">LOG OUT</div>
      </div>
    </StyledContainer>
  );
};

export default Navbar;
