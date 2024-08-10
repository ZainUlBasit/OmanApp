import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { IoMdAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import ActionItem from "../../Components/Item/ActionItem";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const StyledContainer = styled.div`
    min-height: 100vh;
    background-color: black;
    .actionCard {
      margin: 0px 10px 0px 10px;
    }

    @media screen and (max-width: 780px) {
      .mainCon {
        flex-direction: column;
      }
      .actionCard {
        margin: 0px 10px 0px 10px;
      }
    }

    @media screen and (min-width: 781px) {
      .mainCon {
        flex-direction: row;
      }
    }
  `;

  return (
    <StyledContainer>
      <Navbar />
      <div className="w-full px-4 py-3 text-white">Oman Data</div>
      <div className="flex mainCon items-start">
        {/* Main Data Entry Card */}
        <div className="flex flex-col w-full border-b-[1px] border-b-gray-700">
          <div className="w-full bg-[#264B5D] py-2 px-4 text-white">
            DATAENTRY
          </div>
          <div className="flex justify-between text-white py-2 px-4 font-roboto">
            <div
              className="text-[#81d4fa] cursor-pointer"
              onClick={() => {
                navigate("/records");
              }}
            >
              Records
            </div>
            <div className=" text-white flex gap-x-3">
              <div
                className="flex items-center gap-x-1 cursor-pointer"
                onClick={() => {
                  navigate("/records/add");
                }}
              >
                <IoMdAdd className="text-[#599328] text-xl" />
                Add
              </div>
              <div
                className="flex items-center gap-x-1 cursor-pointer"
                onClick={() => {
                  navigate("/records");
                }}
              >
                <MdEdit className="text-[#EFB80B]" />
                Change
              </div>
            </div>
          </div>
        </div>
        {/* <div className="min-w-[250px] actionCard">
          <div className="flex flex-col text-white bg-[#212121] min-h-[50vh]">
            <div className="border-b-2 border-b-[#272727] py-4 px-3 font-roboto text-xl">
              Recent actions
            </div>
            <div className="flex flex-col">
              <div className="px-3 py-3">My actions</div>
              <div className="flex flex-col gap-y-1 px-2">
                <ActionItem name="Zain Ul Basit" type={"add"} />
                <ActionItem name="Zain Ul Basit" type={"edit"} />
                <ActionItem name="Zain Ul Basit" type={"add"} />
                <ActionItem name="Zain Ul Basit" type={"edit"} />
                <ActionItem name="Zain Ul Basit" type={"add"} />
                <ActionItem name="Zain Ul Basit" type={"add"} />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </StyledContainer>
  );
};

export default Home;
