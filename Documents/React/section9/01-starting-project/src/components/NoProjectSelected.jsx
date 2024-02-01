
import React from "react";
import img from "../assets/no-project.png";

import Button from "./Button";
export const  NoProjectSelected = () => {
  return (
    <div className="mt-24 items-center w-2/3">
      <img
        src={img}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 by">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <p>
        <Button>Create new project</Button>
      </p>
    </div>
  );
}
