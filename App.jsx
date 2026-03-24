import React from 'react';
import HeaderCard from './components/HeaderCard';
import AboutSection from './components/AboutSection';

const userData = {
  nama: "Kayla Indah Pasha",
  kelas: "T2D",
  prodi: "Teknologi Informasi",
  domisili: "Malang, East Java",
  universitas: "Universitas Brawijaya",
  universitasLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Logo_Universitas_Brawijaya.svg/1200px-Logo_Universitas_Brawijaya.svg.png",
  avatar: "https://ui-avatars.com/api/?name=Kayla+Pasha&background=7D5BA6&color=FFFF&size=200",
  banner: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029",
  deskripsi: `Halo! Saya Kayla Indah Pasha, seorang mahasiswa semester dua yang sedang menempuh pendidikan jurusan Teknologi Informasi di Universitas Brawijaya. Saya memiliki ketertarikan yang sangat besar dalam dunia pengembangan perangkat lunak, khususnya pada bagian front-end development dan UI/UX design. Selama perkuliahan, saya aktif mempelajari berbagai teknologi web modern seperti React.js, Vite, dan Tailwind CSS untuk menciptakan antarmuka yang responsif serta fungsional. Selain aspek teknis, saya juga senang mengeksplorasi manajemen basis data menggunakan MySQL dan memahami alur kerja kolaboratif melalui GitHub. Saya percaya bahwa kombinasi antara logika pemrograman yang kuat dan estetika desain yang baik adalah kunci untuk membangun solusi digital yang bermanfaat bagi banyak orang. Fokus utama saya saat ini adalah terus mengasah kemampuan problem-solving melalui berbagai proyek tugas besar dan kolaborasi tim, dengan harapan dapat berkontribusi secara profesional di industri teknologi di masa depan. Saya adalah pribadi yang disiplin, komunikatif, dan selalu antusias untuk mempelajari hal-hal baru setiap harinya.`
};

function App() {
  return (
    // Padding kita balikin ke ukuran normal py-10
    <div className="min-h-screen bg-gray-100 font-sans p-6 md:px-20 lg:px-40 xl:px-80 py-10">
      <div className="max-w-5xl mx-auto space-y-6">
        <HeaderCard data={userData} />
        <AboutSection deskripsi={userData.deskripsi} />
      </div>
    </div>
  );
}

export default App;