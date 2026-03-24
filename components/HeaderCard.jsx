import React from 'react';

function HeaderCard({ data }) { 
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      {/* Banner: Tinggi ideal agar pas, tidak kekecilan */}
      <div className="h-40 md:h-48 bg-[#B19CD9] relative">
        
      </div>

      <div className="px-6 pb-5 relative">
        {/* Foto Profil: Balikin ukurannya agar proporsional */}
        <div className="absolute -top-16 left-6">
          <img 
            src={data.avatar} 
            alt={data.nama} 
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md object-cover bg-white"
          />
        </div>

        {/* Info Pengguna: Pakai ukuran font normal lagi */}
        <div className="pt-18 md:pt-20">
          <div className="space-y-1">
            {/* Nama: text-2xl biar tegas */}
            <h1 className="text-2xl font-bold text-gray-950">{data.nama}</h1>
            {/* Prodi/Kelas: text-base (ukuran standar) */}
            <p className="text-base text-gray-800 font-medium">
              {data.universitas} <br />
              {data.prodi} - {data.kelas}
            </p>
            {/* Domisili: text-sm biar rapi */}
            <div className="text-sm text-gray-600 flex items-center gap-2">
              <span>{data.domisili}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;