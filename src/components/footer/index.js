import React from "react";
import { Link } from "react-router-dom";



export const Footer = () => {
  return (
    <footer className=" border-top bg-white px-0">
      <section className="footer-main border-top pt-5 pb-4">
        <div className="container">
          <div className="row">
            <aside className="col-3">
              <Link to="/regulation" className=" h6 title"  >Syarat Ketentuan</Link>
            </aside>
            <aside className="col-3">
              <h6 className="title">Kebijakan Privasi</h6>
            </aside>
            <aside className="col-3">
              <h6 className="title">Kontak Kami</h6>
            </aside>
            <aside className="col-3">
              <h6 className="title">Kemitraan</h6>
              <ul className="list-unstyled list-padding">
                <li>
                  <a className="text-dark" href="my_account.html">
                    Join Investor
                  </a>
                </li>
                <li>
                  <a className="text-dark" href="promos.html">
                    Mitra Delivery
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </footer>
  );
};
