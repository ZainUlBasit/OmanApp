import { useEffect, useRef, useState } from "react";
import Card from "./Components/Cards/Card";
import styled from "styled-components";
import QrCode from "./Components/QrCode/QrCode";
import { useReactToPrint } from "react-to-print";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRecords } from "./store/Slices/RecordsSlice";
import { BASE_URL } from "./assets/Config";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 12px 8px;
  column-gap: 1.25rem;
  @media (max-width: 560px) {
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
const StyledTopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.75rem;
  position: relative;
  @media (max-width: 560px) {
    .leftside {
      font-size: 0.8rem;
      left: 1rem;
    }
    .rightside {
      font-size: 0.9rem;
      right: 1rem;
    }
    .ImageLogo {
      width: 50px;
    }
    .TitleTextEn {
      font-size: 1rem;
    }
    .TitleTextAr {
      font-size: 1.2rem;
    }
  }
`;

function App() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const RecordsState = useSelector((state) => state.RecordsState);

  let isMounted = false;
  useEffect(() => {
    if (!isMounted) {
      isMounted = true;
      dispatch(fetchRecords(id));
    }
  }, []);

  const { t } = useTranslation();
  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => contentToPrint.current,
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });
  return RecordsState.loading ? (
    <div className="flex flex-col justify-center items-center py-5">
      <div>loading...</div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center py-5">
      <div
        className="border-custom-bg border-2 px-8 py-2 font-bold hover:bg-black hover:text-white cursor-pointer rounded-full text-md font-roboto transition-all ease-in-out duration-500"
        onClick={handlePrint}
      >
        Print
      </div>
      <div className="w-screen" ref={contentToPrint}>
        <StyledTopDiv className="flex justify-center items-center px-2 py-3 text-xl relative">
          <div className="absolute top-10 left-10 text-md font-roboto leftside">
            <div className="">Sultanate Of Oman</div>
            <div className="">Ministry Of Health</div>
          </div>
          <div className="w-full flex flex-col items-center justify-center py-4 gap-y-3">
            <img src="/logo.png" className="ImageLogo" alt="" />
            <div className="text-2xl TitleTextAr">
              شهادة الفحص الطبي للوافدين
            </div>
            <div className="text-xl TitleTextEn">
              Expatriates Medical Exam Certificate
            </div>
          </div>

          <div className="absolute top-10 right-10 text-xl text-md font-roboto rightside">
            <div className="">سلطنة عمان</div>
            <div className="">وزارة الصحة</div>
          </div>
        </StyledTopDiv>
        <StyledDiv>
          <div className="flex flex-col gap-y-3 w-[70%] leftside">
            <Card
              values={[
                {
                  title: "Application Type",
                  value: RecordsState.data.registration_type,
                },
                {
                  title: "Application Number",
                  value: RecordsState.data.registration_number,
                },
              ]}
            />
            <Card
              values={[
                {
                  title: "Name",
                  value: RecordsState.data.name,
                },
                {
                  title: "Date of Birth",
                  value: RecordsState.data.dob,
                },
                {
                  title: "Nationality",
                  value: RecordsState.data.nationality,
                },
                {
                  title: "Gender",
                  value: RecordsState.data.gender,
                },
                {
                  title: "Passport No.",
                  value: RecordsState.data.passport_number,
                },
                {
                  title: "Civil No.",
                  value: RecordsState.data.civil_id,
                },
                {
                  title: "Sponsor",
                  value: "/////////",
                },
                {
                  title: "Category",
                  value: RecordsState.data.category,
                },
              ]}
            />
            <Card
              values={[
                {
                  title: "Validity of the Medical",
                  value: RecordsState.data.medical_validity,
                },
                {
                  title: "To",
                  value: RecordsState.data.to,
                },

                {
                  title: "Medical Center",
                  value: RecordsState.data.medical_center,
                },
              ]}
            />
          </div>
          <div className="border-2 border-[red] px-4 flex items-center justify-between flex-col h-full w-[35%] rounded-lg rightside gap-y-10 py-8">
            <div className="flex flex-col justify-center">
              <QrCode Value={`${BASE_URL}/${RecordsState.data._id}`} />

              <div className="flex justify-center items-center text-xl font-roboto pt-5">
                <div className="">Scan Me / {t("scanme")}</div>
              </div>
            </div>
            <div className="flex items-center flex-col gap-y-1">
              <div className="text-3xl">{RecordsState.data.arabic_name}</div>
              <div className="text-xl">{RecordsState.data.name}</div>
            </div>
            <div className="flex w-full flex-col gap-y-2">
              <div className="flex justify-between w-full">
                <div className="text-xl">Medical Status</div>
                <div className="text-2xl">الحالة الطبية</div>
              </div>
              <div className="border-dotted border-4 flex items-center justify-center py-4 rounded-xl border-[green] text-[green] font-bold font-roboto">
                FIT / {t("fit")}
              </div>
            </div>
            <img src="/ApproveLogo.png" className="max-w-[200px]" alt="" />
          </div>
        </StyledDiv>
      </div>
    </div>
  );
}

export default App;
