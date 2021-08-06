import React from "react";
import { Header } from "../components/header";
import { Breadcrumb } from "../components/Breadcrumb";
import { Footer } from "../components/footer";
const Regulation = () => {
  return (
    <div>
      <Header />
      <Breadcrumb name="Regulation" />
      <div className="container p-0">
        <div class="row pt-3 ">
          <div class="col-3 ">
            <div
              class="nav bg-white flex-column nav-pills nav-pills-bg text-left"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link ml-1 active mt-3"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                F.A.Q
              </a>
              
              <a
                class="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Tentang Kami
              </a>
              <a
                class="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Syarat dan Ketentuan
              </a>
              <a
                class="nav-link"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Kebijakan dan Privasi
              </a>
              <a
                class="nav-link"
                id="v-pills-kontak_kami-tab"
                data-toggle="pill"
                href="#v-pills-kontak_kami"
                role="tab"
                aria-controls="v-pills-kemitraan"
                aria-selected="false"
              >
                Kontak Kami
              </a>
              <a
                class="nav-link"
                id="v-pills-kemitraan-tab"
                data-toggle="pill"
                href="#v-pills-kemitraan"
                role="tab"
                aria-controls="v-pills-kemitraan"
                aria-selected="false"
              >
                Koemitrann
              </a>
            </div>
          </div>
          <div class="col-9 my-0">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <h3 className="text-left ml-4 "> Apa Itu Foodizmart ?</h3>
                <p className="text-justify ml-4">
                  Foodizmart adalah aplikasi pemesanan makanan yang mengusung
                  tema acara yang pada umumnya dilakukan dalam kehidupan sosial
                  bermasyarakat. Dengan adanya Foodizmart pelanggan akan
                  terbantu untuk menemukan ide makanan yang tepat untuk acara
                  yang akan mereka adakan
                </p>
                <h3 className="text-left ml-4">Mengapa Foodizmart ?</h3>
                <p className="text-justify ml-4">
                  - Kemudahan Menemukan Ide Makanan untuk Segala Acara Tak perlu
                  repot ketika berencana punya acara syukuran kelahiran, arisan,
                  kenduri, ulang tahun, donasi nasi box, dll. Tinggal buka
                  aplikasi Foodizmart, kami akan memberikan rekomendasi terbaik
                  untuk Anda <br /> - Banyak Pilihan Metode Pengiriman
                  Foodizmart menyediakan jasa pengiriman yang dapat disesuaikan
                  dengan keinginan, untuk pengiriman jarak dekat diantaranya
                  Grab Express, Go-Send dan MrSpeedy, sedangkan untuk pengiriman
                  jarak jauh Foodizmart menyediakan JNE, J&T, Si Cepat, Cargo,
                  dll. Pesan di Foodizmart juga memungkinan barang diambil di
                  toko atau bahkan diantar sendiri oleh penjual <br /> - Gratis
                  Biaya Antar (3km) Jangan khawatir dengan mahalnya biaya kirim,
                  seller kami dengan senang hati akan mengantar pesanan Anda
                  sampai depan rumah atau sesuai kesepakatan. Anda juga dapat
                  mengambil pesanan langsung ke toko <br /> - Bisa Kirim Jarak
                  Jauh Ingin pesan makanan di luar kota, tak perlu jauh - jauh
                  menghabiskan biaya transport yang mahal, tinggal pesan di
                  Foodizmart dan tunggu barang datang
                </p>
                <h3 className="text-left ml-4">Menu Favorit Foodizmart ?</h3>
                <ul className="text-justify ml-4">
                  <li>Nasi Kotak</li>
                  <li>Aneka Lauk</li>
                  <li>Snack Box</li>
                  <li>Cake & Bakery</li>
                  <li>Aqiqah</li>
                  <li>Desert</li>
                  <li>Catering Harian</li>
                  <li>Prasmanan</li>
                  <li>Tumpeng</li>
                  <li>Kue Kering</li>
                  <li>Camilan</li>
                  <li>Oleh oleh</li>
                  <li>Minuman & Ice Cream</li>
                  <li>Aneka Bumbu & Sambal</li>
                  <li>Buah - buahan</li>
                  <li>Sayur - sayuran</li>
                </ul>
                <h3 className="text-left ml-4">
                  Cara Memesan Makanan di Foodizmart
                </h3>
                <ul className="text-justify ml-4">
                  <li>Nasi Kotak</li>
                  <li>Aneka Lauk</li>
                </ul>
              </div>
              
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <h3 className="text-left ml-4">Ketentuan Umum</h3>
                <p className="text-justify ml-4">
                  Ketentuan Penggunaan ini adalah perjanjian antara pengguna
                  (“Anda”) dan PT XXXX____XXXX (“Kami”), sebuah perseroan
                  terbatas yang didirikan dan beroperasi secara sah berdasarkan
                  hukum negara Republik Indonesia dan berdomisili di DI
                  Yogyakarta, Indonesia. Ketentuan Penggunaan ini mengatur akses
                  dan penggunaan Anda atas aplikasi, situs web
                  (www.foodizmart.id dan situs web lain yang Kami kelola),
                  konten dan produk yang disediakan oleh Kami (selanjutnya,
                  secara bersama-sama disebut sebagai “Aplikasi”), serta
                  pemesanan, pembayaran atau penggunaan layanan yang tersedia
                  pada Aplikasi (“Layanan”). Dengan menyetujui Ketentuan
                  Penggunaan ini, Anda juga menyetujui Ketentuan Penggunaan
                  tambahan, termasuk Ketentuan Penggunaan pada setiap Layanan,
                  dan perubahannya yang merupakan bagian yang tidak terpisahkan
                  dari Ketentuan Penggunaan ini (selanjutnya, Ketentuan
                  Penggunaan, Ketentuan Penggunaan tambahan, dan perubahannya
                  secara bersama-sama disebut sebagai “Ketentuan Penggunaan”).
                  Meskipun merupakan satu kesatuan, Ketentuan Penggunaan
                  tambahan akan berlaku dalam hal terdapat perbedaan dengan
                  Ketentuan Penggunaan.
                </p>
                <h3 className="text-left ml-4">Istilah Umum</h3>
                <p className="text-justify ml-4">
                  Kecuali didefinisikan secara khusus dibawah ini dan pada
                  bagian lain dari Ketentuan Penggunaan Aplikasi ini,
                  istilah-istilah dalam huruf besar yang digunakan dalam
                  Ketentuan Penggunaan Foodizmart ini harus ditafsirkan sesuai
                  dengan Ketentuan Penggunaan Foodizmart. Gerai adalah restoran,
                  rumah makan, warung toko, gerobak dan/atau bentuk fisik
                  lainnya yang terdaftar dalam Aplikasi Foodizmart yang dimiliki
                  dan dikelola oleh Merchant. Merchant adalah pihak yang
                  memiliki dan mengelola Gerai dimana bertindak sebagai penyedia
                  Produk. Mitra adalah Penyedia Layanan pihak ketiga independen
                  yang setuju menjadi mitra Kami, bekerja sama dengan Kami
                  dengan skema kemitraan, dan bukan karyawan, agen atau
                  perwakilan Kami. Produk adalah makanan dan/atau minuman yang
                  Anda pesan melalui Layanan Foodizmart di Gerai yang Anda
                  pilih. Transaksi adalah pemesanan, pembelian dan pengantaran
                  atas Produk melalui Aplikasi.
                </p>
                <h3 className="text-left ml-4">
                  Penggunaan Aplikasi dan Layanan
                </h3>
                <p className="text-justify ml-4">
                  Akses dan penggunaan Aplikasi tunduk pada Ketentuan Penggunaan
                  ini. Anda mempunyai kebebasan penuh untuk memilih menggunakan
                  Aplikasi atau aplikasi lain, menggunakan Layanan yang tersedia
                  pada Aplikasi atau tidak, atau berhenti menggunakan Aplikasi.
                  Kami hanya memfasilitasi Anda untuk menemukan berbagai Layanan
                  yang Anda perlukan dengan menyediakan Aplikasi. Semua Layanan
                  disediakan secara langsung oleh pihak ketiga independen yang
                  setuju menjadi penyedia layanan Kami dengan skema kemitraan
                  atau skema lainnya (“Penyedia Layanan”). Ketika memesan
                  Layanan, Aplikasi akan menghubungkan Anda dengan Penyedia
                  Layanan yang tersedia di sekitar lokasi Anda. Dengan demikian,
                  beberapa Layanan tidak dapat digunakan bila Anda tidak
                  mengaktifkan fitur penentuan lokasi. Selanjutnya, jika
                  Penyedia Layanan menerima pesanan Anda, Kami akan
                  menginformasikan status pesanan Anda melalui Aplikasi.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >        
                <h3 className="text-left"> 1. Syarat dan Ketentuan</h3>
                <p className="text-justify" style={{ marginLeft: 32 }}>
                  Ketentuan Penggunaan ini adalah perjanjian antara pengguna
                  (“Anda”) dan PT XXXX____XXXX (“Kami”), sebuah perseroan
                  terbatas yang didirikan dan beroperasi secara sah berdasarkan
                  hukum negara Republik Indonesia dan berdomisili di DI
                  Yogyakarta, Indonesia. Ketentuan Penggunaan ini mengatur akses
                  dan penggunaan Anda atas aplikasi, situs web
                  (www.foodizmart.id dan situs web lain yang Kami kelola),
                  konten dan produk yang disediakan oleh Kami (selanjutnya,
                  secara bersama-sama disebut sebagai “Aplikasi”), serta
                  pemesanan, pembayaran atau penggunaan layanan yang tersedia
                  pada Aplikasi (“Layanan”). Dengan menyetujui Ketentuan
                  Penggunaan ini, Anda juga menyetujui Ketentuan Penggunaan
                  tambahan, termasuk Ketentuan Penggunaan pada setiap Layanan,
                  dan perubahannya yang merupakan bagian yang tidak terpisahkan
                  dari Ketentuan Penggunaan ini (selanjutnya, Ketentuan
                  Penggunaan, Ketentuan Penggunaan tambahan, dan perubahannya
                  secara bersama-sama disebut sebagai “Ketentuan Penggunaan”).
                  Meskipun merupakan satu kesatuan, Ketentuan Penggunaan
                  tambahan akan berlaku dalam hal terdapat perbedaan dengan
                  Ketentuan Penggunaan.
                </p>

                <h3 className="text-left"> 2. Istilah Umum</h3>
                <p className="text-justify" style={{ marginLeft: 32 }}>
                  Kecuali didefinisikan secara khusus dibawah ini dan pada
                  bagian lain dari Ketentuan Penggunaan Aplikasi ini,
                  istilah-istilah dalam huruf besar yang digunakan dalam
                  Ketentuan Penggunaan Foodizmart ini harus ditafsirkan sesuai
                  dengan Ketentuan Penggunaan Foodizmart.
                  <ul className="mt-2">
                    <li>
                      <b>Gerai </b> adalah restoran, rumah makan, warung toko,
                      gerobak dan/atau bentuk fisik lainnya yang terdaftar dalam
                      Aplikasi Foodizmart yang dimiliki dan dikelola oleh
                      Merchant.
                    </li>
                    <li>
                      <b>Merchant</b> adalah pihak yang memiliki dan mengelola
                      Gerai dimana bertindak sebagai penyedia Produk.
                    </li>
                    <li>
                      <b> Mitra </b> adalah Penyedia Layanan pihak ketiga
                      independen yang setuju menjadi mitra Kami, bekerja sama
                      dengan Kami dengan skema kemitraan, dan bukan karyawan,
                      agen atau perwakilan Kami.
                    </li>
                    <li>
                      <b> Produk</b> adalah makanan dan/atau minuman yang Anda
                      pesan melalui Layanan Foodizmart di Gerai yang Anda pilih.
                    </li>
                    <li>
                      <b>Transaksi</b> adalah pemesanan, pembelian dan
                      pengantaran atas Produk melalui Aplikasi.
                    </li>
                  </ul>
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                Kontak Kami
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-kontak_kami"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <h3 className="text-left ml-4">Kontak Kami</h3>
                <p className="text-justify ml-4">
                  Anda dapat menghubungi Kami melalui surat elektronik ke
                  customerservice@foodizmart.id atau melalui telepon ke nomor
                  (0274) 882964. Semua korespondensi Anda akan dicatat, direkam
                  dan disimpan untuk arsip Kami.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-kemitraan"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                kemitraan
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Regulation;
