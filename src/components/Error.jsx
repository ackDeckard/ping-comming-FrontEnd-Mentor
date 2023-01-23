import React from "react";

function Error() {
  return (
    <div className="xl:pl-6 xl:col-start-1 xl:col-span-2 xl:place-self-start">
      <p className="text-lightred text-xs pt-1 italic ">
        Please provide a valid email address
      </p>
    </div>
  );
}

export default Error;
