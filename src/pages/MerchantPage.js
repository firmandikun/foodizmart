import React from "react";
import { HeaderPage } from "../components/headerPage";
import { Link } from "react-router-dom";

export const MerchantPage = () => {
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
                <h3 className="text-center" style={{ marginLeft: 32 }}>
                  Join Merchant
                </h3>
                <p className="text-justify" style={{ marginLeft: 32 }}>
                  <p>
                    Saatnya action untuk menjadi penjual dengan omset jutaan
                    hanya dengan Buka Toko Online di Foodizmart
                  </p>
                  <p>Apa itu Foodizmart ?</p>
                  <p>
                    Foodizmart adalah aplikasi pemesanan makanan yang mengusung
                    tema acara yang pada umumnya dilakukan dalam kehidupan
                    sosial bermasyarakat. Dengan adanya Foodizmart pelanggan
                    akan terbantu untuk menemukan ide makanan yang tepat untuk
                    acara yang akan mereka adakan
                  </p>
                  <h6>Keunggulan menjadi merchant Foodizmart</h6>
                  <ol>
                    <li>
                      <b>Memaksimalkan Potensi Pendapatan </b>
                      <br /> Dengan market yang sudah tertarget, bisnis Anda
                      akan lebih mudah mencapai target pendapatan
                    </li>
                    <li>
                      <b>Kemudahan Proses Marketing</b> <br /> Berbagai fitur
                      pada aplikasi diantaranya tampilan toko yang menarik
                      (seperti instagram) dan fitur share toko serta share
                      produk akan memudahkan Anda membagikan informasi kepada
                      pelanggan
                    </li>
                    <li>
                      <b>Gratis Ongkir </b>
                      <br /> Fitur diambil di toko akan menguntungkan merchant
                      karena tidak perlu disibukkan melakukan pengantaran, bagi
                      pelanggan pun akan diuntungkan dengan tidak perlu membayar
                      biaya ongkir
                    </li>
                    <li>
                      <b>Banyak Pilihan Metode Pengiriman</b> <br /> Foodizmart
                      menyediakan jasa pengiriman yang dapat disesuaikan dengan
                      keinginan penjual / pembeli, untuk pengiriman jarak dekat
                      diantaranya Grab Express, Go-Send dan MrSpeedy, sedangkan
                      untuk pengiriman jarak jauh Foodizmart menyediakan JNE,
                      J&T, Si Cepat, Cargo, dll
                    </li>
                    <li>
                      <b>Kemudahan Manajemen Produk</b> <br /> Foodizmart
                      menyediakan fitur upload atau edit produk yang dapat
                      dilakukan melalui aplikasi maupun melalui website
                      seller.foodizmart.com
                    </li>
                  </ol>

                  <h6>Cara Membuka Toko Online Foodizmart</h6>
                  <ol>
                    <li>Masuk ke Google Playstore, cari aplikasi Foodizmart</li>
                    <li>Registrasi dengan memasukkan nomer HP</li>
                    <li>Masukkan OTP yang dikirim melalui whatsapp</li>
                    <li>Akun member Foodizmart siap digunakan</li>
                    <li>Masuk ke menu Profil, klik tombol Akun Toko</li>
                    <li>Isikan data - data toko yang diminta</li>
                    <li>Buat minimal 1 produk baru yang akan dijual</li>
                    <li>Akun toko siap digunakan</li>
                  </ol>
                  <h6>Alasan Segera Buka Toko Online di Foodizmart</h6>
                  <ul>
                    <li>Tak perlu punya offline store</li>
                    <li>
                      Tak perlu punya ready stock, karena Foodizmart bisa dengan
                      konsep pre order
                    </li>
                    <li>Join merchant secara Gratis !</li>
                  </ul>
                  <p>
                    Info lebih lanjut dapat menghubungi customer support kami
                    melalui nomor whatsapp 0857-7757-7000 pada jam operasional
                    Senin - Sabtu pukul 08.00 - 16.00 (Hari Libur Nasional
                    Tutup)
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
