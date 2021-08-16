import React from "react";
import { HeaderPage } from "../components/headerPage";
import { Link } from "react-router-dom";

export const ContacPage = () => {
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
                <p className="text-justify" style={{ marginLeft: 32 }}>
                  <h3 className="text-center" >Join Investor</h3>
                  <h5 className="text-left"> 1.Latar Belakang</h5>
                  <p>
                    Pandemi yang telah berjalan selama lebih dari 1 (satu) tahun
                    ini sangat berdampak pada penurunan kualitas perekonomian
                    rakyat Indonesia, khususnya pebisnis di bidang kuliner pada
                    taraf UMKM
                  </p>
                  <p>
                    Foodizmart hadir untuk membantu menggerakkan perekonomian
                    dengan mengapresiasi karya UMKM yang layak untuk
                    dipromosikan dengan kemudahan sistem pemesanan. Sebuah
                    aplikasi pemesanan makanan yang akan memicu pergerakan
                    perekonomian dengan munculnya karya karya baru di bidang
                    kuliner yang selama ini dikelilingi keraguan dan bingung
                    ingin memulai dari mana
                  </p>
                  <p>
                    Foodizmart memberikan tempat kepada UMKM untuk berjualan
                    secara online dengan difasilitasi berbagai metode pengiriman
                    dan fitur menarik yang mendukung proses promosi
                  </p>
                  {/* 2 */}
                  <h5 className="text-left"> 2.Visi dan Misi</h5>
                  <p>
                    Visi : Mempermudah pembeli menemukan produk yang tepat
                    sesuai acara atau kebutuhannya
                  </p>
                  <p>
                    Misi : Mempromosikan produk UMKM agar dikenal oleh
                    masyarakat luas sehingga dapat membantu meningkatkan
                    perekonomian masyarakat
                  </p>
                  {/* 3 */}
                  <h5 className="text-left"> 2.Visi dan Misi</h5>
                  <p>
                    Visi : Mempermudah pembeli menemukan produk yang tepat
                    sesuai acara atau kebutuhannya
                  </p>
                  <p>
                    Misi : Mempromosikan produk UMKM agar dikenal oleh
                    masyarakat luas sehingga dapat membantu meningkatkan
                    perekonomian masyarakat
                  </p>
                  {/* 4 */}
                  <h5 className="text-left">
                    3. Jenis Produk dan Keunggulan yang Ditawarkan
                  </h5>
                  <p>
                    Foodizmart merupakan aplikasi pemesanan makanan yang
                    mengusung tema acara yang pada umumnya dilakukan dalam
                    kehidupan sosial bermasyarakat. Dengan adanya Foodizmart
                    pelanggan akan terbantu untuk menemukan ide makanan yang
                    tepat untuk acara yang akan mereka adakan
                  </p>
                  <p>
                    Keunggulan yang ditawarkan oleh Foodizmart diantaranya :
                  </p>
                  <ol>
                    <li>
                      Kemudahan Proses Marketing Berbagai fitur pada aplikasi
                      diantaranya tampilan toko yang menarik (seperti instagram)
                      dan fitur share toko serta share produk akan memudahkan
                      Anda membagikan informasi kepada pelanggan
                    </li>
                    <li>
                      Gratis Ongkir Fitur diambil di toko akan menguntungkan
                      merchant karena tidak perlu disibukkan melakukan
                      pengantaran, bagi pelanggan pun akan diuntungkan dengan
                      tidak perlu membayar biaya ongkir
                    </li>
                    <li>
                      Banyak Pilihan Metode Pengiriman Foodizmart menyediakan
                      jasa pengiriman yang dapat disesuaikan dengan keinginan
                      penjual / pembeli, untuk pengiriman jarak dekat
                      diantaranya Grab Express, Go-Send dan MrSpeedy, sedangkan
                      untuk pengiriman jarak jauh Foodizmart menyediakan JNE,
                      J&T, Si Cepat, Cargo, dll
                    </li>
                    <li>
                      Kemudahan Manajemen Produk Foodizmart menyediakan fitur
                      upload atau edit produk yang dapat dilakukan melalui
                      aplikasi maupun melalui website seller.foodizmart.com
                    </li>
                  </ol>
                  {/* 5 */}
                  <h5 className="text-left"> 5. Target Pasar</h5>
                  <p>
                    Mengusung visi : Mempermudah pembeli menemukan produk yang
                    tepat sesuai acara atau kebutuhannya. Foodizmart akan
                    membidik pasar mahasiswa untuk produk catering, sedangkan
                    untuk produk akikah, makanan sehat, cake and bakery, froozen
                    food kami akan menargetkan pasar keluarga
                  </p>
                  {/* 6 */}
                  <h5 className="text-left">
                    6. Strategi Pemasaran dan Penjualan
                  </h5>
                  <p>
                    Karena menargetkan masyarakat konsumen muda sebagai salah
                    satu target pasar, strategi yang Kami gunakan untuk
                    memasarkan juga lebih bervariasi. Mengingat target pasar
                    adalah masyarakat yang melek internet, salah satu strategi
                    pemasaran yang akan kami lakukan yakni melalui promosi di
                    media sosial yang mana dapat diatur dengan mudah profil user
                    yang akan dibidik
                  </p>
                  <p>
                    Sebagai strategi tambahan, pada tahap pengenalan aplikasi
                    kami akan mencoba bekerjasama dengan pemilik outlet makanan
                    yang sudah berhasil dan terkenal di Jogja sehingga akan
                    lebih mudah membangun kepercayaan pelanggan
                  </p>
                  {/* 7 */}
                  <h5 className="text-left">7. Resiko Bisnis</h5>
                  <p>
                    Resiko bisnis dari aplikasi Foodizmart adalah jika terjadi
                    gangguan pada server atau jaringan internet sehingga
                    aplikasi tidak dapat digunakan. Namun kami mengantisipasinya
                    dengan memilih server yang kompatibel
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
