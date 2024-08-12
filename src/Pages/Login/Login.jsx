import React, { useState } from "react";
import styled from "styled-components";
import { LoginUserApi } from "../../Api_Requests/Api_Requests";
import { ErrorToast } from "../../Utils/ShowToast";
import AddingLightLoader from "../../Components/Loader/AddingLightLoader";

const StyledContainerA = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  align-items: center;
  .CustomLabel {
    width: 100%;
    color: white;
  }
  .CustomInput {
    width: 100%;
  }
  flex-direction: column;
  align-items: start;
  column-gap: 7px;
  row-gap: 4px;
  /* width: 100vw; */
  padding: 0px 10px;
`;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [LoginLoading, setLoginLoading] = useState(false);

  const onSubmit = async (e) => {
    setLoginLoading(true);
    // if (!validateEmail(email)) {
    //   ErrorToast("Invalid Email!");
    // } else if (!password) {
    //   ErrorToast("Password Field Required!");
    // }
    try {
      const response = await LoginUserApi({ email, password });
      if (response.data.success) {
        localStorage.setItem("logged-in", true);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      ErrorToast(err?.response?.data?.error?.msg || err.message);
    }
    setLoginLoading(false);
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#212121]">
      <div className="min-w-[350px] max-w-[500px] bg-[#121212] rounded-lg overflow-hidden">
        <div className="bg-[#417690] text-white text-center py-6 font-roboto font-semibold text-2xl">
          Oman Administrator
        </div>
        <div className="flex flex-col gap-y-4 py-8 px-4">
          <StyledContainerA>
            <div className="w-[200px] CustomLabel">Email</div>
            <input
              placeholder={"Enter Email"}
              type={"email"}
              className="w-[280px] px-3 py-2 rounded-md border-2 border-gray-600 bg-[#121212] text-white placeholder:text-gray-600 CustomInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </StyledContainerA>
          <StyledContainerA>
            <div className="w-[200px] CustomLabel">Password</div>
            <input
              placeholder={"Enter Password"}
              type={"password"}
              className="w-[280px] px-3 py-2 rounded-md border-2 border-gray-600 bg-[#121212] text-white placeholder:text-gray-600 CustomInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </StyledContainerA>
          <div className="w-full flex justify-center items-center mt-4">
            {LoginLoading ? (
              <AddingLightLoader />
            ) : (
              <div
                className="py-2 px-4 rounded-lg w-fit bg-[#264B5D] hover:bg-[#619AB6] cursor-pointer transition-all ease-in-out duration-500 text-center text-white"
                onClick={onSubmit}
              >
                Login
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
