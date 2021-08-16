import React from "react";
import { HeaderPage } from "../components/headerPage";
import { Link } from "react-router-dom";

export const Contac = () => {
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
            <div className="tab-content">
              <div className="tab-panes">
                <h3 className="text-left" style={{ marginLeft: 32 }}>
                  Kontak Kami
                </h3>
                <p className="text-justify" style={{ marginLeft: 32 }}>
                  Jl Kemuning IV No.450 Condongcatur
                  <br />
                  Depok Sleman Yogyakarta 55283
                  <p>
                    E. info@foodizmart.com T. <br /> 0857-7757-7000 WA. <br />{" "}
                    0857-7757-7000
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
