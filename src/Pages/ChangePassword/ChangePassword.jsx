import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PasswordChangeForm from "../../Components/Forms/PasswordChangeForm";
import { IoMdAdd } from "react-icons/io";
import TableComp from "../../Components/Table/TableComponent";
import { RecordColumns } from "../../assets/Columns/RecordColumns";
import styled from "styled-components";
import CustomInput from "../../Components/Input/CustomInput";
import { ChangePasswordUserApi } from "../../Api_Requests/Api_Requests";
import { ErrorToast, SuccessToast } from "../../Utils/ShowToast";

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: white;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    .filterSide {
      display: none;
      width: 0%;
    }
    .tableSide {
      width: 100%;
    }
  }
`;

const StyledContainerA = styled.div`
  //              {/* <div className="w-full flex justify-end font-roboto text-sm flex-col pl-[200px] pt-4"> */}

  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-family: "Roboto";
  font-size: 0.875rem;
  line-height: 1.25rem;
  /* align-items: center; */
  flex-direction: column;
  padding-left: 205px;
  padding-top: 1rem /* 16px */;

  @media screen and (max-width: 850px) {
    padding-left: 10px;
  }
`;

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      ErrorToast("New Password and Confirm Password not Same!");
    } else {
      try {
        const response = await ChangePasswordUserApi({
          userId: "66b7387b97e7c12d815eec66",
          oldPassword,
          newPassword,
        });
        SuccessToast("Message Successfully changed!");
        setConfirmPassword("");
        setNewPassword("");
        setOldPassword("");
      } catch (error) {
        ErrorToast("Unable to update password!");
      }
    }
  };
  return (
    <StyledContainer>
      <Navbar />
      <div className="flex h-full w-[100%]">
        <div className="w-[25%] flex flex-col min-h-screen border-2 border-gray-700 filterSide">
          <div className="">
            <input
              placeholder="filter"
              className="w-full px-2 py-2 bg-black border-2 border-gray-400 text-white rounded-t-lg outline-none"
            />
          </div>
          <div className="">
            <div className="flex flex-col w-full border-b-[1px] border-b-gray-700">
              <div className="w-full bg-[#264B5D] py-2 px-4 text-[#F5DD5D] mt-1">
                DATA ENTRY
              </div>
              <div className="flex justify-between text-white py-2 px-4 font-roboto bg-[#00363A]">
                <div className="text-[#81d4fa] cursor-pointer">Records</div>
                <div className="text-white flex gap-x-3">
                  <div className="flex items-center gap-x-1 cursor-pointer">
                    <IoMdAdd className="text-[#599328] text-xl" />
                    Add
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[75%] flex flex-col tableSide">
          <div className="px-4 py-4 font-bold text-2xl pb-8">
            Change Password
          </div>
          <div className="text-sm px-4">
            Please enter your old password, for security’s sake, and then enter
            your new password twice so we can verify you typed it in correctly.
          </div>
          <div className="flex flex-col px-4 ">
            <div className="border-b-[1px] border-b-gray-800 py-3">
              <CustomInput
                label={"Old Password"}
                value={oldPassword}
                setValue={setOldPassword}
                placeholder={"*****************"}
                type={"password"}
              />
            </div>
            <div className="border-b-[1px] border-b-gray-800 py-3">
              <CustomInput
                label={"New Password"}
                value={newPassword}
                setValue={setNewPassword}
                placeholder={"*****************"}
                type={"password"}
              />
              <StyledContainerA>
                {/* <div className="w-full flex justify-end font-roboto text-sm flex-col pl-[200px] pt-4"> */}
                <div className="text-start">
                  Your password can’t be too similar to your other personal
                  information.
                </div>
                <div className="">
                  Your password must contain at least 8 characters.
                </div>
                <div className="">
                  Your password can’t be a commonly used password.
                </div>
                <div className="">Your password can’t be entirely numeric.</div>
                {/* </div> */}
              </StyledContainerA>
            </div>
            <div className="border-b-[1px] border-b-gray-800 py-3">
              <CustomInput
                label={"Confirm Password"}
                value={confirmPassword}
                setValue={setConfirmPassword}
                placeholder={"*****************"}
                type={"password"}
              />
            </div>
            <div className="flex gap-x-4 bg-[#212121] justify-end py-4 px-4 flex-wrap rounded-lg">
              <div
                className="py-2 px-4 rounded-lg bg-[#264B5D] hover:bg-[#619AB6] cursor-pointer transition-all ease-in-out duration-500"
                onClick={onSubmit}
              >
                CHANGE MY PASSWORD
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default ChangePassword;
