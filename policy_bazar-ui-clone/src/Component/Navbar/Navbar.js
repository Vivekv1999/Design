import React, { useState } from "react";
import "./Navbar.css";
import { navHeaders } from "../../Common/ConstantCommon";
// import { Button } from "react-bootstrap";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Navbar = () => {
  const [dropDown,setDropDown]=useState(null)
  return (
    <div className="app_main_wrapper app_navbar p-4">
      <div className="flex justify-between align-middle px-40 border-b-2">
        <div>
          <img
            src={"https://static.pbcdn.in/cdn/images/new-home/logopb.svg?v=5"}
            width={"155px"}
            height={"70px"}
            className="nav_logo"
            alt="policy bazar logo"
          />
        </div>
        <div className="">
          <header className="nav_header">
            <nav className="nav_menu  flex justify-between items-center align-middle gap-9 w-100">
              <ul className="flex gap-12 relative">
                {navHeaders.length > 0 &&
                  navHeaders.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <li
                          className="text-[#172B4D]  hover:cursor-pointer hover:text-blue-700"
                          style={{ listStyle: "none" }}
                          onMouseEnter={()=>setDropDown(index)}
                          onMouseLeave={()=>setDropDown(null)}
                        >
                          {item.label} 
                          {dropDown===index ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/> }
                                                  </li>
{                            console.log(";;;;;;;;;",index,dropDown,"pppppppppppp")}
                        {item.menuItem && dropDown===index && (
                          <div
                           className="absolute top-12 bg-[#eceff794]"
                          >
{                            console.log(";;;;;;;;;",index,dropDown)}
                            <div className="absolute top-full rounded-sm py-2.5 border text-gray-700 w-56 z-10">
                              {item.menuItem.map((data) => {
                                return (
                                  <React.Fragment>
                                    <ul>
                                      <li className="ml-3">{data.label}</li>
                                    </ul>
                                  </React.Fragment>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
              </ul>

              <button className="border-2 rounded-lg px-2 py-0" style={{}}>
                Sign in
              </button>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Navbar;