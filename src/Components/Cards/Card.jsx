import React from "react";

const Card = ({ values }) => {
  return (
    <div className="border-2 border-black rounded-lg px-2 py-4 flex flex-col gap-y-5">
      {values.map(({ title, value }) => {
        return (
          <div className="flex justify-between">
            <div className="font-bold">{title} :</div>
            <div className="">{value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
