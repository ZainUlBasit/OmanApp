import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import styled from "styled-components";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BannerHeader = styled.h1.attrs({
  className:
    "relative bg-[#121212] py-[20px] text-xl flex items-center rounded-t-lg pl-10 text-white justify-center font-[Roboto] font-[700] text-[1.4rem] select-none",
})`
  & {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1.4rem")};
    padding: ${(props) => (props.padding ? props.padding : "8px 0px")};
  }
`;

const TableWrapper = styled.div`
  /* Tailwind="flex justify-center flex-col"> */
  margin-top: 1px;
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  // margin: 0px 120px;
  width: 100%;
  background-color: #121212;
  padding: ${(props) =>
    props.isAct ? "0px 20px 0px 140px" : "0px 20px 0px 20px"};
`;

export default function TableComp({ rows, columns, title }) {
  console.log(rows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [SearchText, setSearchText] = useState("");
  const [Open, setOpen] = useState(false);
  const [OpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [Id, setId] = useState("");
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return rows.length == 0 ? (
    // <LoadingError />
    <></>
  ) : (
    <TableWrapper isAct={false} width="80px">
      <div
        className="relative bg-[#121212] py-[20px] text-xl flex items-center rounded-t-lg pl-10 text-white justify-between font-[Roboto] font-[700] text-[1.4rem] select-none"
        padding="20px 0px"
      >
        <div className="flex border-[1px] w-[300px] maxWeb1:w-[400px] maxWeb2:w-[450px] maxWeb3:w-[500px] maxWeb4:w-[550px] border-white items-center gap-x-2 px-3 py-[7px] maxWeb1:px-4 maxWeb1:py-[8px] maxWeb2:px-5 maxWeb2:py-[10px] rounded-full overflow-hidden my-[10px] maxWeb1:my-[15px] maxWeb2:my-[20px]">
          <BsSearch className="text-[1.2rem] maxWeb1:text-[1.8rem]" />
          <input
            className="outline-none bg-inherit text-white w-full maxWeb1:text-[1.2rem] maxWeb2:text-[1.3rem] maxWeb3:text-[1.5rem] maxWeb4:text-[1.8rem] text-[1rem]"
            placeholder={"Search..."}
            value={SearchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        {title === "Records" && (
          <div
            className="font-roboto font-semibold text-[1rem] border-2 border-white px-3 py-2 rounded-full hover:bg-white hover:text-black transition-all ease-in-out duration-700 cursor-pointer"
            onClick={() => {
              navigate("/records/add");
            }}
          >
            Add New Record
          </div>
        )}
      </div>

      <BannerHeader padding="20px 0px">{title.toUpperCase()}</BannerHeader>
      {/* Search Bar */}
      <div className="flex">
        {/* <Search Value={Value} setValue={setValue} Placeholder={placeholder} /> */}
      </div>
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#121212",
        }}
      >
        <TableContainer
          className="border-[2px] border-[#000] bg-[#121212] border-t-white"
          sx={{ maxHeight: 550, borderRadius: "0px 0px 10px 10px" }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
                    align={column.align}
                    className="select-none"
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#212121",
                      color: "white",
                      fontWeight: "normal",
                      // fontSize: "1.1rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <div className="text-sm font-roboto">{column.label}</div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length &&
                rows
                  // .filter((data) => {
                  //   const lowercaseSearch = SearchText?.toLowerCase();
                  //   const lowerCaseName = data?.name?.toLowerCase();

                  //   return lowercaseSearch !== ""
                  //     ? lowerCaseName.includes(lowercaseSearch)
                  //     : true;
                  // })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={index}
                        style={{ cursor: "pointer", whiteSpace: "nowrap" }}
                      >
                        {columns.map((column) => {
                          let value;
                          if ("itemId" === column.id)
                            value = row[column.id]?.name;
                          else if (
                            "addeddate" === column.id ||
                            "date" === column.id
                          )
                            value = new Date(
                              row[column.id] * 1000
                            ).toLocaleDateString();
                          else if (column.id !== "actions")
                            value = row[column.id];

                          const c_id = row["_id"];
                          return (
                            <TableCell
                              id={c_id}
                              // onClick={HandleDoubleClick}
                              className={
                                column.id === "contact"
                                  ? "font-[georgia] select-none"
                                  : "font-[Roboto] select-none"
                              }
                              key={column.id}
                              align={column.align}
                              style={{
                                fontWeight: "700",
                                fontSize: "0.95rem",
                                color: "white",
                              }}
                            >
                              {column.id === "actions" &&
                              title === "Records" ? (
                                <div className="flex justify-start items-center gap-x-2 text-white">
                                  <BiEdit
                                    className="text-[1.2rem] maxWeb1:text-[2rem] maxWeb2:text-[2.5rem] maxWeb3:text-[3rem] maxWeb4:text-[3rem] cursor-pointer hover:text-[green] transition-all duration-500"
                                    onClick={() => {
                                      setId(row._id);
                                      // setOpen(true);
                                    }}
                                  />
                                  <RiDeleteBin5Line
                                    className="text-[1.2rem] maxWeb1:text-[2rem] maxWeb2:text-[2.5rem] maxWeb3:text-[3rem] maxWeb4:text-[3rem] cursor-pointer hover:text-[red] transition-all duration-500"
                                    onClick={() => {
                                      setId(row._id);
                                    }}
                                  />
                                </div>
                              ) : column.id === "actions" &&
                                title === "Records" ? (
                                <div className="flex justify-start items-center gap-x-2 text-white">
                                  <div className="bg-green-800 text-white">
                                    Online Record
                                  </div>
                                  <div className="bg-gray-800 text-white">
                                    Al Razi
                                  </div>
                                  <div className="bg-gray-800 text-white">
                                    Noor Ul Shipa
                                  </div>
                                  <div className="bg-gray-800 text-white">
                                    Al Gharbia
                                  </div>
                                  <div className="bg-gray-800 text-white">
                                    Badr Al Sama
                                  </div>
                                  <div className="bg-gray-800 text-white">
                                    General 2
                                  </div>
                                </div>
                              ) : column.format && typeof value === "number" ? (
                                column.format(value)
                              ) : (
                                value || "N/A"
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* {OpenDeleteModal && (
        <DeleteModal
          key={`delete-${Id}`} // Ensure unique key for each modal instance
          Open={OpenDeleteModal}
          setOpen={setOpenDeleteModal}
          onSubmit={handleDelete}
          Loading={Loading}
        />
      )} */}
    </TableWrapper>
  );
}
