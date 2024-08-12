import React from "react";
import { useTranslation } from "react-i18next";

const Card = ({ values }) => {
  const { t } = useTranslation();

  return (
    <div className="border-2 border-black rounded-lg px-2 py-4 flex flex-col gap-y-5">
      {values.map(({ title, value }) => (
        <div key={title} className="flex justify-between items-start gap-x-2">
          {/* English title */}
          <div className="font-bold whitespace-nowrap">{title} :</div>
          <div className="text-center">{value}</div>
          {/* Arabic title */}
          <div className="font-bold whitespace-nowrap">
            {t(title.replace(/\s/g, "").toLowerCase())}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
