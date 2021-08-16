import React from "react";
import { useHistory } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const PageMessage = () => {
  const history = useHistory();
  return (
    <div>
      <Header />
      <div className=" container">
        <div className="defination my-4">
          <h4 className="text-left">Foodizmart ?</h4>
          <ul className="text-justify">
            <li>
              Pesan paket nasi box GRATIS biaya antar, hanya di Foodizmart
            </li>
            <li>
              Pengen tahu aci tak perlu datang ke Tegal, pesan dan tunggu saja
              di rumah
            </li>
            <li>
              Mudahnya pesan Cake spesial untuk orang tersayang dimanapun dia
              berada
            </li>
          </ul>
          <h5 className="text-left">Mengapa Foodizmart ?</h5>
          <ul className="text-justify">
            <li>
              Kemudahan Menemukan Ide Makanan untuk Segala Acara Tak perlu repot
              ketika berencana punya acara syukuran kelahiran, arisan, kenduri,
              ulang tahun, donasi nasi box, dll. Tinggal buka aplikasi
              Foodizmart, kami akan memberikan rekomendasi terbaik untuk Anda
            </li>
            <li>
              Banyak Pilihan Metode Pengiriman Foodizmart menyediakan jasa
              pengiriman yang dapat disesuaikan dengan keinginan, untuk
              pengiriman jarak dekat diantaranya Grab Express, Go-Send dan
              MrSpeedy, sedangkan untuk pengiriman jarak jauh Foodizmart
              menyediakan JNE, J&T, Si Cepat, Cargo, dll. Pesan di Foodizmart
              juga memungkinan barang diambil di toko atau bahkan diantar
              sendiri oleh penjual
            </li>
            <li>
              Gratis Biaya Antar (3km) Jangan khawatir dengan mahalnya biaya
              kirim, seller kami dengan senang hati akan mengantar pesanan Anda
              sampai depan rumah atau sesuai kesepakatan. Anda juga dapat
              mengambil pesanan langsung ke toko
            </li>
            <li>
              Bisa Kirim Jarak Jauh Ingin pesan makanan di luar kota, tak perlu
              jauh - jauh menghabiskan biaya transport yang mahal, tinggal pesan
              di Foodizmart dan tunggu barang datang
            </li>
          </ul>
          <h5 className="text-left">Menu Favorit Foodizmart ?</h5>
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
          <h5 className="text-left">Menu Favorit Foodizmart ?</h5>
          <ol className="text-left">
            <li>Masuk ke Google Playstore, cari aplikasi Foodizmart</li>
            <li>Registrasi dengan memasukkan nomer HP</li>
            <li>Masukkan OTP yang dikirim melalui whatsapp</li>
            <li>Akun member Foodizmart siap digunakan</li>
            <li>
              Cari manakan berdasarkan menu rekomendasi, nama manakan atau nama
              resto
            </li>
            <li>Pilih makanan, masukkan keranjang dan check out</li>
            <li>Pilih alamat pengantaran</li>
            <li>Pilih jadwal pengiriman (tanggal & jam)</li>
            <li>Pilih metode pengiriman</li>
            <li>Lakukan pembayaran sebelum 1 jam</li>
            <li> Menunggu persetujuan penjual (notifikasi whatsapp)</li>
            <li>
              Menunggu pesanan dikirim (terdapat notifikasi whatsapp jika
              pesanan siap dikirim atau siap diambil)
            </li>
            <li>
              Pesanan selesai (silahkan lakukan review pesanan atau chat penjual
              jika terdapat pesanan yang tidak sesuai)
            </li>
            <li>
              Pesanan selesai (silahkan lakukan review pesanan atau chat penjual
              jika terdapat pesanan yang tidak sesuai)
            </li>
          </ol>
          <p className="text-left">
            Dengan pesan makanan di Foodizmart, Anda telah membantu ratusan UMKM
            untuk berkembang.
            <br />
            Terimakasih telah berkontribusi menyelamatkan perekonomian Indonesia
          </p>
        </div>
        <div className="row">
          <div className="mr-auto mb-3">
            <button
              className="btn btn-outline-success"
              onClick={() => history.push("/message")}
            >
              selanjutynya
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
