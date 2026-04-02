import React from 'react';
import '../index.css';

export default function SherenProfile() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
        
        {/* FOTO HEADER */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-12 text-white text-center relative">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-8 border-white/50 shadow-2xl hover:scale-110 transition-transform duration-500">
              <img 
                src="/foto.jpeg" 
                alt="Sheren"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-10">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            Sheren Annabelle Shang Mayapadha
          </h1>

          {/* INFO GRID */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-l-4 border-indigo-500 text-center group hover:shadow-lg transition-all">
              <div className="text-sm font-semibold text-gray-600 mb-2">Kelas</div>
              <div className="text-2xl font-bold text-indigo-700 group-hover:scale-110 transition-transform">T2D</div>
            </div>
            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-l-4 border-purple-500 text-center group hover:shadow-lg transition-all">
              <div className="text-sm font-semibold text-gray-600 mb-2">Jurusan</div>
              <div className="text-2xl font-bold text-purple-700 group-hover:scale-110 transition-transform">Teknologi Informasi</div>
            </div>
            <div className="p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border-l-4 border-emerald-500 text-center group hover:shadow-lg transition-all">
              <div className="text-sm font-semibold text-gray-600 mb-2">Domisili</div>
              <div className="text-2xl font-bold text-emerald-700 group-hover:scale-110 transition-transform">Malang</div>
            </div>
          </div>

          {/* DESKRIPSI */}
          <div className="bg-gradient-to-br from-slate-50 to-indigo-50 p-8 rounded-3xl border border-indigo-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-4"></span>
              Tentang Diri
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 text-justify">
              Halo! Saya Sheren Annabelle Shang Mayapadha, mahasiswa Teknologi Informasi di Universitas Brawijaya.
              Saya tertarik pada dunia pengembangan web dan saat ini saya sedang mempelajari ReactJS dan Tailwind CSS 
              untuk membuat halaman web yang menarik, responsif, dan mudah digunakan. 
              
              Saya menyukai tantangan dalam memahami konsep baru dan selalu menyelesaikan tugas dengan teliti. 
              Selain itu, saya bisa bekerja secara tim, terbuka terhadap saran, dan suka mengeksplorasi ide-ide kreatif 
              dalam desain halaman web.
              
              Halaman profil ini dibuat untuk memperkenalkan diri saya secara profesional, sekaligus sebagai sarana belajar 
              dan meningkatkan kemampuan teknis saya di bidang pemrograman dan desain web.
              <br/><br/>
              <span className="text-sm text-gray-500 font-medium"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}