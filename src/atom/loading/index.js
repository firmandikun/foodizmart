import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export const LoadingComponent = () => {
  return (
    <div>
      <div className="d-flex flex-column px-2">
        <Skeleton count={1} width={260} height={280} />
        <Skeleton count={1} width={260} height={10} />
        <Skeleton count={1} width={260} height={10} />
      </div>
      <div className="d-flex justify-content-between mt-3 ">
        <div className="pl-2">
          <Skeleton count={1} width={80} height={10} />{" "}
        </div>
        <div className="pr-1">
          <Skeleton count={1} width={80} height={10} color="blue" />{" "}
        </div>
      </div>
    </div>
  );
};

export const LoadingComponentsm = () => {
  return (
    <div>
      <div className="d-flex flex-column px-2">
        <Skeleton count={1} width={380} height={280} />
        <Skeleton count={1} width={380} height={10} />
        <Skeleton count={1} width={380} height={10} />
      </div>
      <div className="d-flex justify-content-between mt-3 ">
        <div className="pl-2">
          <Skeleton count={1} width={80} height={10} />{" "}
        </div>
        <div className="pr-1">
          <Skeleton count={1} width={80} height={10} color="blue" />{" "}
        </div>
      </div>
    </div>
  );
};

export const LoadingComponentls = () => {
  return (
    <div>
      <div className="d-flex flex-column px-2">
        <Skeleton count={1} width={360} height={280} />
        <Skeleton count={1} width={360} height={10} />
        <Skeleton count={1} width={360} height={10} />
      </div>
      <div className="d-flex justify-content-between mt-3 ">
        <div className="pl-2">
          <Skeleton count={1} width={80} height={10} />{" "}
        </div>
        <div className="pr-1">
          <Skeleton count={1} width={80} height={10} color="blue" />{" "}
        </div>
      </div>
    </div>
  );
};


export const LoadingStore = () => {
  return (
    <div>
      <div className="d-flex flex-column px-2">
        <Skeleton count={1} width={1100} height={150} />
      </div>
    </div>
  );
};
export const LoadingStoreAlert = () => {
  return (
    <div>
      <div className="d-flex flex-column px-2">
        <Skeleton count={1} width={1100} height={50} />
      </div>
    </div>
  );
};
export const LoadingCategory = () => {
  return (
    <div>
      <div className="d-flex flex-column px-2  ">
        <Skeleton count={1} width={180} height={100} className="rounded-3 " />
      </div>
    </div>
  );
};

export const LoadingCategorysm = () => {
  return (
    <div>
      <div className="d-flex flex-column px-2  ">
        <Skeleton count={1} width={68} height={100} className="rounded-3 " />
      </div>
    </div>
  );
};
export const LoadingCategorysms = () => {
  return (
    <div>
      <div className="d-flex flex-column px-2  ">
        <Skeleton count={1} width={60} height={100} className="rounded-3 " />
      </div>
    </div>
  );
};
export const LoadingInformation = () => {
  return (
    <div>
      <div className="d-flex flex-column px-2  ">
        <Skeleton count={1} width={365} height={180} className="rounded-3 " />
      </div>
    </div>
  );
};
export const LoadingCardStore = () => {
  return (
    <div>
      <div className="d-flex flex-column px-2  ">
        <Skeleton count={1} width={340} height={310} className="rounded-3 " />
      </div>
    </div>
  );
};
