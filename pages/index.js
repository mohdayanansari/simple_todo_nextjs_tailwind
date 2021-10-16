import Head from "next/head";
import { PlusCircleIcon } from "@heroicons/react/solid";
import List from "../components/styles/list";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const storeInput = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, input];
    });
    setInput("");
  };

  const deleteItem = (id) => {
    console.log("Clicked...🔥");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, i) => {
        return i !== id;
      });
    });
  };

  return (
    <div className="  px-[10px] h-[95vh] bg-white flex items-center justify-center w-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative w-[600px] h-[90vh] p-[20px] shadow-xl rounded-3xl bg-blue">
        <PlusCircleIcon
          onClick={addItem}
          className="absolute bg-white  bottom-[20px] w-20 h-20 right-[20px] text-blue-800 shadow-2xl rounded-full z-10"
        />

        <div className="">
          <h1 className="text-[60px] my-font font-thin text-center text-white ">
            Todo List
          </h1>
          <p className="text-xs font-semibold tracking-wider text-center text-white my-font opacity-80 ">
            remember your tasks
          </p>
        </div>
        {/* input field */}
        <div className="w-full flex items-center justify-center py-[20px]">
          <input
            type="text"
            onChange={storeInput}
            value={input}
            placeholder="add a task..."
            className="w-3/4 border-none outline-none rounded-3xl text-[17px] p-[20px] bg-white color-blue placeholder-blue-500 placeholder-opacity-70 focus:ring focus:ring-blue-500 focus:ring-offset-4 focus:ring-offset-blue-400 caret-blue-500"
          />
        </div>
        {/* Lists */}
        <div className="flex flex-col w-full gap-2 overflow-y-scroll my-font max-h-[450px] scrollbar-hide">
          {items.map((item, i) => {
            return (
              <List key={i} id={i} taskName={item} deleteItem={deleteItem} />
            );
          })}
        </div>
      </main>
    </div>
  );
}
