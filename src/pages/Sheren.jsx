import React from "react";
import "./Sheren.css";

export default function Sheren() {
  return (
    <div className="container">
      <div className="card">

        <div className="left">
          <img src="/foto.jpeg" alt="Foto Sheren" />
        </div>

        {/* KANAN - INFO */}
        <div className="right">
          <h1>Sheren Annabelle Shang Mayapadha</h1>

          <div className="info">
            <p><span>Kelas:</span> T2D</p>
            <p><span>Jurusan:</span> Teknologi Informasi</p>
            <p><span>Domisili:</span> Malang</p>
          </div>

          <p className="desc">
            Halo! Saya Sheren Annabelle Shang Mayapadha, mahasiswa Teknologi Informasi di Universitas Brawijaya.
            Saya tertarik pada dunia pengembangan web dan saat ini saya sedang mempelajari ReactJS dan Tailwind CSS
            untuk membuat halaman web yang menarik, responsif, dan mudah digunakan. Saya menyukai tantangan dalam memahami
            konsep baru dan selalu menyelesaikan tugas dengan teliti. Selain itu, saya bisa bekerja secara tim, terbuka terhadap 
            saran, dan suka mengeksplorasi ide-ide kreatif dalam desain halaman web. Halaman profil ini dibuat untuk memperkenalkan
            diri saya secara profesional, sekaligus sebagai sarana belajar dan meningkatkan kemampuan teknis saya di bidang
            pemrograman dan desain web.
          </p>
        </div>
      </div>
    </div>
  );
}