import React from 'react';

function AboutSection({ deskripsi }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-950 mb-3">About</h2>
      {/* text-base: Biar deskripsinya bisa dibaca tanpa micin */}
      <p className="text-gray-800 leading-relaxed text-base text-justify">
        {deskripsi}
      </p>
    </div>
  );
}

export default AboutSection;