import React from "react";
import dynamic from "next/dynamic";
const Home = dynamic(() => import("../app/component/Home"), {
  ssr: false,
});
const Page = () => {
  return (
    <div>
      <Home />
    </div>
  );
};
export default Page;
