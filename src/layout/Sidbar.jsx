import React from "react";
import Flex from "../components/Flex";
import Container from "../components/Container";
import { BiMenuAltLeft } from "react-icons/bi";
import List from "../components/List";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Sidbar = () => {
  return (
    <div className="bg-[#F5F5F3] py-6 border border-[#979797]">
      <Container>
        <Flex className=" items-center">
          <div className="w-[15%]">

          <Flex className="items-center gap-x-3">
            <BiMenuAltLeft />
            <p className="text-primary text-sm">Shop by Category</p>
          </Flex>
          </div>
          <div className="w-[70%]">
            <div className="w-[600px] h-[50px] bg-red-500 relative mx-auto">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full h-full pl-5"
              />
              <FaSearch className="absolute top-1/2 right-4 -translate-y-1/2 " />
            </div>
          </div>
<div className="w-[15%]">

          <Flex className="gap-x-10">
            <Flex className="gap-x-1">
              <FaUser />
              <IoMdArrowDropdown />
            </Flex>
            <FaShoppingCart />
          </Flex>
</div>
        </Flex>
      </Container>
    </div>
  );
};

export default Sidbar;
