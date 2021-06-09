import React from "react";

export const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" class="breadcrumb mb-0  ">
      <div className="container">
        <ol class="d-flex align-items-center mb-0 p-0">
          <li class="breadcrumb-item" style={{ listStyle: "none" }}>
            <a href="#" class="text-success">
              Home
            </a>
          </li>
          <li
            class="breadcrumb-item active"
            aria-current="page"
            style={{ listStyle: "none" }}
          >
            Product details
          </li>
        </ol>
      </div>
    </nav>
  );
};
