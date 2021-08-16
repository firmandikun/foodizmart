import React from "react";
import { Privacy } from "../atom/privacy";
import { Link, useHistory } from "react-router-dom";
import { HeaderPage } from "../components/headerPage";
import { Conditions } from "../atom/condition";

export const PrivacyPage = () => {
  return (
    <div>
      <HeaderPage />
      <div className="container p-0">
        <div className="row pt-3 ">
          <div className="col-md-3  col-sm-12">
            <ul className="list-group list-group-flush text-left">
              <Link
                className="list-group-item mb-1 rounded "
                style={{ cursor: "pointer", color: "black" }}
                to="/about"
              >
                Tentang Kami
              </Link>
              <Link
                className="list-group-item mb-1 rounded "
                style={{ cursor: "pointer", color: "black" }}
                to="/privacy"
              >
                Kebijakan Privasi
              </Link>
              <Link
                className="list-group-item mb-1 rounded "
                style={{ cursor: "pointer", color: "black" }}
                to="/trems"
              >
                Syarat & Ketentuan
              </Link>

              <Link
                className="list-group-item mb-1 rounded "
                style={{ cursor: "pointer", color: "black" }}
                to="/contact"
              >
                Kontak Kami
              </Link>
              <Link
                className="list-group-item mb-1 rounded "
                style={{ cursor: "pointer", color: "black" }}
                to="/contact_investor"
              >
                Join Investor
              </Link>
              <Link
                className="list-group-item mb-1 rounded "
                style={{ cursor: "pointer", color: "black" }}
                to="/join_merchant"
              >
                Join Merchant
              </Link>
            </ul>
          </div>
          <div className="col-md-9 col-sm-12 my-0">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-panes">
                <Conditions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
