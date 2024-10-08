import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import TableComp from "../../Components/Table/TableComponent";
import { RecordColumns } from "../../assets/Columns/RecordColumns";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecords } from "../../store/Slices/RecordsSlice";

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: white;
  @media screen and (max-width: 850px) {
    .filterSide {
      display: none;
    }
    .tableSide {
      width: 100%;
    }
  }
`;

const Records = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const RecordsState = useSelector((state) => state.RecordsState);

  let isMounted = false;
  useEffect(() => {
    if (!isMounted) {
      isMounted = true;
      dispatch(fetchRecords());
    }
  }, []);
  return (
    <StyledContainer>
      <Navbar />
      <div className="flex h-full w-[100%]">
        {RecordsState.loading ? (
          <div>Loading ... </div>
        ) : (
          <>
            <div className="min-w-[300px] flex flex-col min-h-screen border-2 border-gray-700 filterSide">
              <div className="">
                <input
                  placeholder="filter"
                  className="w-full px-2 py-2 bg-black border-2 border-gray-400 text-white bg-light_black rounded-t-lg outline-none"
                />
              </div>
              <div className="">
                <div className="flex flex-col w-full border-b-[1px] border-b-gray-700">
                  <div className="w-full bg-[#264B5D] py-2 px-4 text-[#F5DD5D] mt-1">
                    DATA ENTRY
                  </div>
                  <div className="flex justify-between text-white py-2 px-4 font-roboto bg-[#00363A]">
                    <div
                      className="text-[#81d4fa] cursor-pointer"
                      onClick={() => {
                        navigate("/records");
                      }}
                    >
                      Records
                    </div>
                    <div className="text-white flex gap-x-3">
                      <div
                        className="flex items-center gap-x-1 cursor-pointer"
                        onClick={() => {
                          navigate("/records/add");
                        }}
                      >
                        <IoMdAdd className="text-[#599328] text-xl" />
                        Add
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[calc(100%-300px)] tableSide">
              <TableComp
                columns={RecordColumns}
                rows={RecordsState.data}
                title={"Records"}
              />
            </div>
          </>
        )}
      </div>
    </StyledContainer>
  );
};

export default Records;
