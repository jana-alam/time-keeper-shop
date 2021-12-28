import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";

const Spinner = () => {
  return (
    <div className="p-4 w-max mx-auto">
      <RefreshIcon className="h-12 w-12 animate-spin text-orange-600" />
    </div>
  );
};

export default Spinner;
