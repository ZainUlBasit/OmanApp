import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import TableComp from "../../Components/Table/TableComponent";
import { RecordColumns } from "../../assets/Columns/RecordColumns";
import { IoMdAdd } from "react-icons/io";

const Records = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <div className="flex h-full w-[100%]">
        <div className="min-w-[300px] w-[80%] flex flex-col min-h-screen border-2 border-gray-700 filterSide">
          <div className="">
            <input
              placeholder="filter"
              className="w-full px-2 py-2 bg-black border-2 border-gray-400 text-white rounded-t-lg outline-none"
            />
          </div>
          <div className="">
            <div className="flex flex-col w-full border-b-[1px] border-b-gray-700">
              <div className="w-full bg-[#264B5D] py-2 px-4 text-[#F5DD5D] mt-1">
                DATAENTRY
              </div>
              <div className="flex justify-between text-white py-2 px-4 font-roboto bg-[#00363A]">
                <div className="text-[#81d4fa] cursor-pointer">Add records</div>
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
        <div className="w-[80%]">
          <TableComp
            columns={RecordColumns}
            rows={[{}, {}]}
            title={"Records"}
          />
        </div>
      </div>
    </div>
  );
};

export default Records;
