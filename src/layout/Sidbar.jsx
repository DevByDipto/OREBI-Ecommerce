import React from "react";
import Flex from "../components/Flex";
import Container from "../components/Container";
import { BiMenuAltLeft } from "react-icons/bi";
import List from "../components/List";

const Sidbar = () => {
  return (
    <div className="bg-[#979797] py-6">
      <Container>
        <Flex className="justify-between items-center">
          <ul className="flex gap-x-3">
            <List className="text-2xl text-primary">
              <BiMenuAltLeft />
            </List>
            <List className="text-primary">Shop by Category</List>
          </ul>
          <div>
            <div className="w-[600px] h-[50px] bg-red-500">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full h-full pl-5"
              />
            </div>
          </div>

          <div>
            <ul>
              <List></List>
              <List></List>
            </ul>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Sidbar;
