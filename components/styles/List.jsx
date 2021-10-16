import { TrashIcon } from "@heroicons/react/solid";

function List({ taskName, id, deleteItem }) {

  return (
    <div className="flex justify-between items-center w-full bg-light-blue rounded-xl p-[20px] shadow-lg font-bold text-white text-opacity-80 text-[17px] ">
      <div>🎯 {taskName}</div>
      <TrashIcon 
      onClick={() => {
        deleteItem(id)
      }}
      className="w-10 h-10 transform cursor-pointer  hover:text-red-700 hover:scale-90" />
    </div>
  );
}

export default List;
