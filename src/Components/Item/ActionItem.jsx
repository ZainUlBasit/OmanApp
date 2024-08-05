import React from "react";
import { IoMdAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";

const ActionItem = ({ type, name }) => {
  return (
    <div className="flex items-start justify-start gap-x-1 w-full">
      {type === "add" ? (
        <IoMdAdd className="mt-1 text-[#599328]" />
      ) : (
        type === "edit" && <MdEdit className="mt-1 text-[#EFB80B]" />
      )}
      <div className="flex flex-col">
        <div className="text-[#4AC1F7] text-[.9rem] font-semibold font-roboto">
          {name}
        </div>
        <div className="text-[0.6rem] font-roboto">Add record</div>
      </div>
    </div>
  );
};

export default ActionItem;
