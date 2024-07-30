import { useState } from "react";
import Card from "./Components/Cards/Card";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 12px 8px;
  column-gap: 1.25rem;
  @media (max-width: 1160px) {
    flex-direction: column;
    row-gap: 1.25rem;
    .rightside {
      width: 100%;
    }
    .leftside {
      width: 100%;
    }
  }
`;

function App() {
  return (
    <div className="w-screen">
      <div className="flex justify-center items-center px-2 py-3 text-xl relative">
        <div className="absolute top-4 left-10 text-sm">
          <div className="">Sultanate Of Oman</div>
          <div className="">Ministry Of Health</div>
        </div>
        <div className="w-full flex flex-col items-center justify-center py-4 gap-y-3">
          <img src="/logo.png" alt="" />
          <div className="text-2xl">شهادة الفحص الطبي للوافدين</div>
          <div className="text-xl">Expatriates Medical Exam Certificate</div>
        </div>

        <div className="absolute top-4 right-10 text-xl">
          <div className="">سلطنة عمان</div>
          <div className="">وزارة الصحة</div>
        </div>
      </div>
      <StyledDiv>
        <div className="flex flex-col gap-y-3 w-[70%] leftside">
          <Card
            values={[
              {
                title: "Application Type",
                value: "FOR VISA & RESIDENCY PURPOSE - RENEWAL",
              },
              {
                title: "Application Number",
                value: "RCW2407241618908",
              },
            ]}
          />
          <Card
            values={[
              {
                title: "Name",
                value: "ABDUL KALAM",
              },
              {
                title: "Date of Birth",
                value: "10-11-1989",
              },
              {
                title: "Nationality",
                value: "BANGLADESHI",
              },
              {
                title: "Gender",
                value: "MALE",
              },
              {
                title: "Passport No.",
                value: "EH0414847",
              },
              {
                title: "Civil No.",
                value: "91806846",
              },
              {
                title: "Sponsor",
                value: "الخليجية للانماء والتطوير",
              },
              {
                title: "Category",
                value: "RENEW - LABOUR, & RESIDENT CARD (WORKERS)",
              },
            ]}
          />
          <Card
            values={[
              {
                title: "Validity of the Medical",
                value: "25-04-2024",
              },
              {
                title: "To",
                value: "25-04-2024",
              },

              {
                title: "Medical Center",
                value: "Dhofar International Medical Center llc - Salalah",
              },
            ]}
          />
        </div>
        <div className="border-2 border-[red] px-4 flex items-center justify-between flex-col h-full w-[30%] rounded-lg rightside gap-y-10 py-8">
          <div className="flex items-center flex-col gap-y-1">
            <div className="text-3xl">عبدالكلام</div>
            <div className="text-xl">ABDUL KALAM</div>
          </div>
          <div className="flex w-full flex-col gap-y-2">
            <div className="flex justify-between w-full">
              <div className="text-xl">Medical Status</div>
              <div className="text-2xl">الحالة الطبية</div>
            </div>
            <div className="border-dotted border-2 border-black flex items-center justify-center py-4 rounded-xl">
              FIT / لائق صحياً
            </div>
          </div>
          <img src="/ApproveLogo.png" className="max-w-[200px]" alt="" />
        </div>
      </StyledDiv>
    </div>
  );
}

export default App;
