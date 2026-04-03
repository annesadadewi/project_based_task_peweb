import React from 'react';

function App() {
  const userData = {
    nama: "Kayla Indah Pasha",
    kelas: "T2D",
    prodi: "Teknologi Informasi",
    domisili: "Malang, East Java",
    universitas: "Universitas Brawijaya",
    avatar: "https://ui-avatars.com/api/?name=Kayla+Pasha&background=C084FC&color=fff&size=250",
    deskripsi: "Halo! Saya Kayla Indah Pasha, seorang mahasiswa semester dua yang sedang menempuh pendidikan jurusan Teknologi Informasi di Universitas Brawijaya. Saya memiliki ketertarikan yang sangat besar dalam dunia pengembangan perangkat lunak, khususnya pada bagian front-end development dan UI/UX design. Selama perkuliahan, saya aktif mempelajari berbagai teknologi web modern seperti React.js, Vite, dan Tailwind CSS untuk menciptakan antarmuka yang responsif serta fungsional. Selain aspek teknis, saya juga senang mengeksplorasi manajemen basis data menggunakan MySQL dan memahami alur kerja kolaboratif melalui GitHub.",
  };

  return (
    <div className="min-h-screen bg-[#f3f2ef] flex flex-col items-center py-12 px-4 font-sans antialiased">
      {/* Container Utama - max-w-4xl */}
      <div className="max-w-6xl w-full space-y-3">
        
        {/* KARTU PROFIL UTAMA */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md">
          {/* Banner Ungu */}
          <div className="h-48 bg-gradient-to-r from-[#A855F7] to-[#D8B4FE] relative"></div>
          
          <div className="px-8 pb-10 relative">
            {/* Foto Profil */}
            <div className="relative -mt-20 mb-4 inline-block">
              <img 
                src={userData.avatar} 
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg bg-white" 
                alt="Profile"
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                {userData.nama}
              </h1>
              <p className="text-xl font-semibold text-violet-600">
                Mahasiswa {userData.prodi}
              </p>
              
              {/* Badge & Info */}
              <div className="flex flex-wrap items-center gap-2 text-gray-500 mt-4 text-sm font-medium">
                <span className="bg-violet-100 text-violet-700 px-2.5 py-0.5 rounded-md border border-violet-200">
                  {userData.kelas}
                </span>
                <span className="text-gray-300">•</span>
                <span>{userData.universitas}</span>
                <span className="text-gray-300">•</span>
                <span>{userData.domisili}</span>
              </div>
            </div>
          </div>
        </div>

        {/* KARTU ABOUT */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            
            <blockquote className="border-l-4 border-violet-600 pl-4 py-0.5 my-2 text-justify">
            <h2 className="text-xl font-semibold text-gray-700 italic" 
                style={{ letterSpacing: '0.2px' }}>
              About Me
            </h2>
          </blockquote>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            {userData.deskripsi}
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-400 text-xs tracking-widest uppercase">
          © 2026 {userData.nama}
        </footer>
      </div>
    </div>
  );
}

export default App;