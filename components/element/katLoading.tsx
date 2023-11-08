import React from "react";

const KatLoading = () => {
  return (
    <div>
      <div className="flex flex-col py-4 px-5 overflow-hidden animate-pulse">
        <span className="text-3xl h-4 uppercase font-changa bg-merah/90 rounded-full" />
        <span className="relative w-full h-auto mt-6 aspect-video" />
      </div>
    </div>
  );
};

export default KatLoading;
