import React from "react";
import { Link } from "react-router-dom";

export const Breadcrumb = ({name}) => {
  return (
    <nav aria-label="breadcrumb" class="breadcrumb mb-0  ">
      <div className="container p-0">
        <ol class="d-flex align-items-center mb-0 px-1">
          <li class="breadcrumb-item" style={{ listStyle: "none" }}>
            <Link to="/" class="text-success">
              Home
            </Link>
          </li>
          <li
            class="breadcrumb-item active"
            aria-current="page"
            style={{ listStyle: "none" }}
          >
           {name}
          </li>
        </ol>
      </div>
    </nav>
  );
};
