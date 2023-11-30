"use client";
import { useEffect } from "react";
import { useAppContext } from "@/context";
import { userStore } from "@/store/user";
import { fetchStore } from "@/store/fetch";

const Menu = () => {
  // TEST CONTEXT
  const { stateTestContext } = useAppContext();

  const user = userStore((state) => state.user);
  const updateUser = userStore((state) => state.updateUser);
  const counter = userStore((state) => state.counter);
  const increment = userStore((state) => state.incrementCounter);

  const fetch = fetchStore((state) => state.name);
  const updateFetch = fetchStore((state) => state.updateFetch);
  const testFetch = fetchStore((state) => state.fetchData);
  const dataFetch = fetchStore((state) => state.data);

  const testFetch2 = async () => await testFetch();
  useEffect(() => {
    testFetch2();
    setTimeout(() => console.log("data fetch by zustand", dataFetch), 9000);
  }, []);
  return (
    <div>
      Menu
      <p className="my-3 p-3 shadow-sm rounded-md bg-gray-50 hover:bg-white duration-150">
        {stateTestContext}
      </p>
      {/* from store */}
      <div className="my-3 p-3 shadow-sm rounded-md bg-gray-50 hover:bg-white duration-150">
        <h3>ZUSTAND TEST</h3>
        <p>{user.name}</p>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => updateUser({ name: e.target.value })}
        />
        <hr />
        <h3>COUNTER BY ZUSTAND</h3>
        <p>{counter}</p>
        <button onClick={() => increment()}>+</button>
        <hr />
        <div>
          <h2>{fetch}</h2>
          <input
            type="text"
            placeholder="name for fetch"
            onChange={(e) => updateFetch(e.target.value)}
          />
        </div>
      </div>
      {/* from store */}
    </div>
  );
};

export default Menu;
