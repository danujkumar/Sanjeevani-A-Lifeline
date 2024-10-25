import React from "react";
import { Button, Popover, Rating, Stack, Typography } from "@mui/material";
import Reviews from "./Reviews";
import Booking from "../Booking/Booking";
import { useLocation } from "react-router-dom";

const DocProf = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();
  const data = location.state;

  console.log(data)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className="bg-gradient-to-r from-violet-800 to-blue-900 ">
        <div className="flex flex-row">
          <div className=" mt-2 ml-3 size-14 hover:cursor-pointer">
            <img src="./Images/whitelogo.png" alt="No logo" onClick={()=>{window.location.href = '/Home';}} />
          </div>
          <div className=" ml-3 mt-5 size-40">
            <img src="./Images/whitesanjeevani.png" onClick={()=>{window.location.href = '/Home';}}/>
          </div>
        </div>
        <div className="text-white text-5xl p-2 font-serif">
          {data.name}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className=" ml-4 flex flex-col">
          <div className=" p-10 font-serif font-medium max-w-xl">
            {data.experience}
          </div>
          <div className="ml-7 flex flex-row">
            <div className="p-3">
              <Button
                className=" rounded-3xl"
                variant="contained"
                href="#contained-buttons"

                onClick={()=>{window.location.href = '/Book-your-doctor';}}
              >
                Book Now
              </Button>
            </div>
            <div className="p-3">
              <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
              >
                Rate Now
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                {/* The content of the popover */}
                <div className="sm:w-96 rounded-3xl w-72">
                  <div>
                    <img src="./Images/reviewcover.png" alt="No cover" />
                  </div>
                  <div className="flex flex-row justify-center">

                    <Rating className="mt-2" name="size-large" defaultValue={2} size="large" />
                  </div>
                  <div className=" p-2">
                    <textarea
                      className="w-full p-2 h-32 border-2 rounded-lg"
                      placeholder="Write a review"
                    >
                      Yashraj
                    </textarea>
                  </div>
                  <div className="px-2 flex flex-row justify-end mb-2"> 
                    <Button
                      className=" rounded-3xl"
                      variant="contained"
                      href="#contained-buttons"
                      onClick={handleClose}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </Popover>
            </div>
          </div>
        </div>
        <div className=" -mt-40 size-80">
          <img src="./Images/doctoronprofile.png" />
        </div>
      </div>
      <Reviews />
    </>
  );
};

export default DocProf;
