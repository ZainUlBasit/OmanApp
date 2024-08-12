import React, { useEffect, useState } from "react";
import { UpdateUserByIdAPI } from "../../Api_Requests/Api_Requests";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecords } from "../../store/Slices/RecordsSlice";
import PageLoader from "../Loader/PageLoader";
import Navbar from "../Navbar/Navbar";
import CustomInput from "../Input/CustomInput";
import CustomSelect from "../Input/CustomSelect";
import { IoMdAdd } from "react-icons/io";
import { ErrorToast, SuccessToast } from "../../Utils/ShowToast";
import AddingLightLoader from "../Loader/AddingLightLoader";

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: white;
  @media screen and (max-width: 850px) {
    .filterSide {
      display: none;
    }
  }
`;

const EditRecordForm = () => {
  const location = useLocation();
  const recordData = JSON.parse(location.state) || {};
  const [Reg_type, setReg_type] = useState("");
  const [Reg_no, setReg_no] = useState("");
  const [Name, setName] = useState("");
  const [ArabicName, setArabicName] = useState("");
  const [DOB, setDOB] = useState("");
  const [Nationality, setNationality] = useState("");
  const [Sex, setSex] = useState("");
  const [PassportNo, setPassportNo] = useState("");
  const [CivilId, setCivilId] = useState("");
  const [Sponsor, setSponsor] = useState("");
  const [Category, setCategory] = useState("");
  const [MedicalValidity, setMedicalValidity] = useState("");
  const [To, setTo] = useState("");
  const [MedicalCenter, setMedicalCenter] = useState("");
  const [Loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const payload = {
      registration_type: Reg_type,
      registration_number: Reg_no,
      name: Name,
      arabic_name: ArabicName,
      dob: DOB,
      nationality: Nationality,
      gender: Sex,
      passport_number: PassportNo,
      civil_id: CivilId,
      category: Category,
      medical_validity: MedicalValidity,
      to: To,
      medical_center: MedicalCenter,
    };
    try {
      const response = await UpdateUserByIdAPI(recordData._id, payload);
      if (response.data.success) {
        SuccessToast(response.data.message);
        navigate("/records");
      } else {
        ErrorToast("Unable to update Record");
      }
    } catch (err) {
      console.log(err);
      ErrorToast("Unable to update Record");
    }
  };
  const { id } = useParams();
  const dispatch = useDispatch();
  const RecordsState = useSelector((state) => state.RecordsState);
  const navigate = useNavigate();
  const [DataLoading, setDataLoading] = useState(true);

  let isMounted = false;
  useEffect(() => {
    if (!isMounted) {
      isMounted = true;
      if (recordData) {
        console.log(recordData);
        setReg_type(recordData.registration_type);
        setReg_no(recordData.registration_number);
        setName(recordData.name);
        setArabicName(recordData.arabic_name);
        setDOB(recordData.dob);
        setNationality(recordData.nationality);
        setSex(recordData.gender);
        setPassportNo(recordData.passport_number);
        setCivilId(recordData.civil_id);
        setSponsor(recordData.sponsor);
        setCategory(recordData.category);
        setMedicalValidity(recordData.medical_validity);
        setTo(recordData.to);
        setMedicalCenter(recordData.medical_center);
        setDataLoading(false);
      } else {
        navigate("/");
      }
    }
  }, []);
  return (
    <StyledContainer>
      <Navbar />
      {RecordsState.loading ? (
        <div className="h-full">
          <PageLoader />
        </div>
      ) : (
        RecordsState.data && (
          <div className="flex h-full">
            <div className="w-[300px] flex flex-col min-h-screen border-2 border-gray-700 filterSide">
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
                    <div className="text-[#81d4fa] cursor-pointer">
                      Add records
                    </div>
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
            <div className="flex-grow px-8 py-4">
              <div className="py-4 font-thin text-2xl font-roboto">
                Edit record
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="border-b-[1px] border-b-gray-800 py-3">
                  <CustomInput
                    label={"Registration type"}
                    value={Reg_type}
                    setValue={setReg_type}
                    placeholder={"Enter Registration Type"}
                  />
                </div>
                <div className="border-b-[1px] border-b-gray-800 py-3">
                  <CustomInput
                    label={"Registration number"}
                    value={Reg_no}
                    setValue={setReg_no}
                    placeholder={"Enter Registration Number"}
                  />
                </div>
                <div className="border-b-[1px] border-b-gray-800 py-3">
                  <CustomInput
                    label={"Name"}
                    value={Name}
                    setValue={setName}
                    placeholder={"Enter Name"}
                  />
                </div>
                <div className="border-b-[1px] border-b-gray-800 py-3">
                  <CustomInput
                    label={"Arabic Name"}
                    value={ArabicName}
                    setValue={setArabicName}
                    placeholder={"Enter Arabic Name"}
                  />
                </div>
              </div>
              <div className="border-b-[1px] border-b-gray-800 py-3">
                <CustomInput
                  label={"Date of Birth"}
                  value={DOB}
                  setValue={setDOB}
                  placeholder={"Enter Date of Birth"}
                />
              </div>
              <div className="border-b-[1px] border-b-gray-800 py-3">
                <CustomInput
                  label={"Nationality"}
                  value={Nationality}
                  setValue={setNationality}
                  placeholder={"Enter Nationality"}
                />
              </div>
              <div className="border-b-[1px] border-b-gray-800 py-3">
                <CustomSelect
                  label={"Sex"}
                  value={Sex}
                  setValue={setSex}
                  options={[
                    { _id: "Male", label: "Male" },
                    { _id: "Female", label: "Female" },
                  ]}
                />
              </div>
              <div className="border-b-[1px] border-b-gray-800 py-3">
                <CustomInput
                  label={"Passport Number"}
                  value={PassportNo}
                  setValue={setPassportNo}
                  placeholder={"Enter Passport Number"}
                />
              </div>
              <div className="border-b-[1px] border-b-gray-800 py-3">
                <CustomInput
                  label={"Civil ID"}
                  value={CivilId}
                  setValue={setCivilId}
                  placeholder={"Enter Civil ID"}
                  type={"number"}
                />
              </div>
              <div className="border-b-[1px] border-b-gray-800 py-3">
                <CustomInput
                  label={"Sponsor"}
                  value={Sponsor}
                  setValue={setSponsor}
                  placeholder={"Enter Sponsor"}
                />
              </div>
              <div className="border-b-[1px] border-b-gray-800 py-3">
                <CustomInput
                  label={"Category"}
                  value={Category}
                  setValue={setCategory}
                  placeholder={"Enter Category"}
                />
              </div>
              <div className="border-b-[1px] border-b-gray-800 py-3">
                <CustomInput
                  label={"Medical Validity"}
                  value={MedicalValidity}
                  setValue={setMedicalValidity}
                  placeholder={"Enter Medical Validity"}
                />
              </div>
              <div className="border-b-[1px] border-b-gray-800 py-3">
                <CustomInput
                  label={"To"}
                  value={To}
                  setValue={setTo}
                  placeholder={"Enter To"}
                />
              </div>
              <div className="border-b-[1px] border-b-gray-800 py-3">
                <CustomInput
                  label={"Medical Center"}
                  value={MedicalCenter}
                  setValue={setMedicalCenter}
                  placeholder={"Enter Medical Center"}
                />
              </div>
              {Loading ? (
                <AddingLightLoader />
              ) : (
                <div className="flex gap-x-4 bg-[#212121] justify-end py-4 px-4 flex-wrap rounded-lg">
                  <div
                    className="py-2 px-4 rounded-lg bg-[#264B5D] hover:bg-[#619AB6] cursor-pointer transition-all ease-in-out duration-500"
                    onClick={(e) => {
                      onSubmit(e);
                    }}
                  >
                    Update
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      )}
    </StyledContainer>
  );
};

export default EditRecordForm;
