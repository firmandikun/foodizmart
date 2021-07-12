import React from "react";
import Skeleton from "react-loading-skeleton";
export const LoadingComponent = () => {
  return (
    <div>
      <div className="d-flex flex-column px-2">
        <Skeleton count={1} width={230} height={60} />
        <Skeleton count={1} width={230} height={10} />
        <Skeleton count={1} width={230} height={10} />
      </div>
      <div className="d-flex justify-content-between mt-3 ">
        <div className="pl-2">
          <Skeleton count={1} width={80} height={10} />{" "}
        </div>
        <div className="pr-1">
          <Skeleton count={1} width={80} height={10} />{" "}
        </div>
      </div>
    </div>
  );
};
