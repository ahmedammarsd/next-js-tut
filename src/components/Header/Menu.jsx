"use client";
import { useAppContext } from "@/context";

const Menu = () => {
  // TEST CONTEXT
  const { stateTestContext } = useAppContext();
  return (
    <div>
      Menu
      <p className="my-3 p-3 shadow-sm rounded-md bg-gray-50 hover:bg-white duration-150">
        {stateTestContext}
      </p>
    </div>
  );
};

export default Menu;
