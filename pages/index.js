import Head from "next/head";
import { PlusCircleIcon } from "@heroicons/react/solid";

export default function Home() {
  const addList = () => {
    console.log("Clickedd");
  };

  return (
    <div className="  px-[10px] h-[95vh] bg-white flex items-center justify-center w-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative w-[600px] h-[90vh] p-[20px] shadow-xl rounded-3xl bg-blue-400">
        <PlusCircleIcon
          onClick={addList}
          className="absolute bg-white bg-opacity-80 bottom-[20px] w-20 h-20 right-[20px] text-blue-800 shadow-2xl rounded-full "
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
            placeholder="add a task..."
            className="w-3/4 border-none outline-none rounded-3xl text-[17px] p-[20px] bg-blue-300 text-white placeholder-white placeholder-opacity-70 focus:ring focus:ring-blue-500 focus:ring-offset-4 focus:ring-offset-blue-400 caret-blue-500"
          />
        </div>
        {/* Lists */}
        <div className="flex flex-col w-full gap-2 overflow-y-scroll my-font max-h-[450px] scrollbar-hide">
          <div className="w-full bg-white rounded-xl p-[20px] shadow-lg font-bold text-gray-600 text-[17px] ">
            <div>task1</div>
          </div>
          <div className="w-full bg-white rounded-xl p-[20px] shadow-lg font-bold text-gray-600 text-[17px] ">
            <div>task1</div>
          </div>
          <div className="w-full bg-white rounded-xl p-[20px] shadow-lg font-bold text-gray-600 text-[17px] ">
            <div>task1</div>
          </div>
          <div className="w-full bg-white rounded-xl p-[20px] shadow-lg font-bold text-gray-600 text-[17px] ">
            <div>task1</div>
          </div>
          <div className="w-full bg-white rounded-xl p-[20px] shadow-lg font-bold text-gray-600 text-[17px] ">
            <div>task1</div>
          </div>
          <div className="w-full bg-white rounded-xl p-[20px] shadow-lg font-bold text-gray-600 text-[17px] ">
            <div>task1</div>
          </div>
          <div className="w-full bg-white rounded-xl p-[20px] shadow-lg font-bold text-gray-600 text-[17px] ">
            <div>task1</div>
          </div>
          <div className="w-full bg-white rounded-xl p-[20px] shadow-lg font-bold text-gray-600 text-[17px] ">
            <div>task1</div>
          </div>
          <div className="w-full bg-white rounded-xl p-[20px] shadow-lg font-bold text-gray-600 text-[17px] ">
            <div>task1</div>
          </div>
          <div className="w-full bg-white rounded-xl p-[20px] shadow-lg font-bold text-gray-600 text-[17px] ">
            <div>task1</div>
          </div>
          <div className="w-full bg-white rounded-xl p-[20px] shadow-lg font-bold text-gray-600 text-[17px] ">
            <div>task1</div>
          </div>
          <div className="w-full bg-white rounded-xl p-[20px] shadow-lg font-bold text-gray-600 text-[17px] ">
            <div>task1</div>
          </div>
        </div>
      </main>
    </div>
  );
}
