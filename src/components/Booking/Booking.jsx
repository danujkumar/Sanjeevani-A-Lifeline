import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Progress } from "@material-tailwind/react";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const location = useLocation();
  const details = useSelector((state) => state.details)

  useEffect(() => {
    console.log(details)
  }, [details])
  
  const data = location.state;
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <div className="bg-gradient-to-r from-violet-800 to-blue-900 ">
        <div className="flex flex-row">
          <div className=" mt-2 ml-3 size-14 hover:cursor-pointer">
            <img
              src="./Images/whitelogo.png"
              alt="No logo"
              onClick={() => {
                window.location.href = "/Home";
              }}
            />
          </div>
          <div className=" ml-3 mt-5 size-40 hover:cursor-pointer">
            <img
              src="./Images/whitesanjeevani.png"
              onClick={() => {
                window.location.href = "/Home";
              }}
            />
          </div>
        </div>
        <div className="text-white text-5xl p-2 font-serif">
          {data.name}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className=" ml-4 flex flex-col w-7/12">
          <div className=" p-10 font-serif font-medium max-w-xl">
            <div className="flex flex-col">
              <div className=" bg-purple-200 w-full mb-10">
                <TextField
                  className="w-full "
                  label="User Name"
                  color="secondary"
                  placeholder="Enter the User Name"
                  value={details.info.name != null ? details.info.name : ""}
                  focused
                />
              </div>
              <div className="flex sm:flex-row flex-col mb-7">
                <div className="bg-purple-200 w-1/4 mr-3">
                  <TextField
                    className=" w-full "
                    label="Age"
                    color="secondary"
                    placeholder="Age"
                    focused
                  />
                </div>
                <div className="bg-purple-200 w-1/4 sm:mt-0 mt-3">
                  <TextField
                    className="w-full "
                    label="Sex"
                    color="secondary"
                    placeholder="Sex"
                    focused
                  />
                </div>
              </div>
              <div className="mt-3 bg-purple-200 w-full">
                <TextField
                  className="w-full"
                  id="filled-textarea"
                  label=""
                  placeholder="Any important medical condition"
                  multiline
                  variant="filled"
                />

              <Button
                className=" rounded-3xl"
                variant="contained"
              >
                Upload PDF
              </Button>

              <div className="text-black text-2xl p-2 font-serif">
          0%
        </div>

              </div>
            </div>
          </div>
          <div className="ml-7 flex flex-row">
            <div className="p-3">
              <Button
                className=" rounded-3xl"
                variant="contained"
              >
                Book Now
              </Button>
              <Button
                className="rounded-3xl"
                variant="contained"
              >
                Chat with Us
              </Button>
            </div>
            <div>
             <div className="p-3 ml-2">
             <DatePicker className="rounded-xl hover:cursor-pointer bg-blue-200 px-2 py-2"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                isClearable
                placeholderText="Pick a date"
              />
             </div>
             
            </div>
          </div>
        </div>
        <div className=" -mt-40 size-80">
          <img src="./Images/doctoronprofile.png" />
        </div>
      </div>
    </>
  );
};

export default Booking;
