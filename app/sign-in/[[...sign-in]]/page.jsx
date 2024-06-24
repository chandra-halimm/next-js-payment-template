import { SignIn } from "@clerk/nextjs";

import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center pt-16">
      <SignIn />
    </div>
  );
};

export default page;
