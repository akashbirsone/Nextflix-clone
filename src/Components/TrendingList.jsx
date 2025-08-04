import React, { useState } from 'react';

const trendingData = [
  { id: 1, title: "Squid Game", img: "https://6.soompi.io/wp-content/uploads/image/20250604051116_squid-game-3.png?s=900x600&e=t" },
  { id: 2, title: "Stranger Things", img: "https://theculturednerd.org/wp-content/uploads/2020/03/stranger-1-cover.jpg" },
  { id: 3, title: "Thukra Ke Mera Pyaar", img: "https://i.ytimg.com/vi/krpnYtXdQnU/maxresdefault.jpg" },
  { id: 4, title: "RAID 2", img: "https://tomindia.s3.ap-south-1.amazonaws.com/prod/uploads/image/62lXs6Cc59cBu5SBeOIo_Raid-2_TomorrowsIndia.jpg" },
  { id: 5, title: "L2 Empuraan", img: "https://i.scdn.co/image/ab67616d0000b27302807ddcb29bb4c40dc7cbd3" },
  { id: 6, title: "Salaar 2", img: "https://i.ytimg.com/vi/FwbZ9qkL1Mg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCXGjDZXcPoJBVVX93HtjBafDQYRA" },
  { id: 7, title: "Singham again", img: "https://www.livemint.com/lm-img/img/2024/11/02/600x338/GbCJ_1730179557968_1730509448154.jfif" },
  { id: 8, title: "The Russian Job", img: "https://i.ytimg.com/vi/hXBBj24aI_g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAGzAbrLTPn0pdvtj-mEMd98TJ8QQ" },
];

function TrendingList() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col md:flex-row justify-between p-6 bg-black text-white min-h-screen gap-6">
      
      {/* Center Image */}
      <div className="flex flex-col items-center justify-center w-full space-y-4">
        {selected && (
          <>
            <img
              src={selected.img}
              alt={selected.title}
              className="max-w-full md:max-w-[900px] max-h-[500px] object-contain rounded-lg shadow-lg transition-all duration-300"
            />
            <p className="text-lg font-semibold text-white">
              <span className="text-red-500 font-bold text-xl">#{selected.id}</span> {selected.title}
            </p>
          </>
        )}
      </div>

      {/* Trending List */}
      <div className="w-full md:w-1/3">
        <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
        <div className="space-y-4">
          {trendingData.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 p-2 rounded-md transition duration-200 hover:bg-gray-800 active:scale-[0.98] cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <span className="text-2xl font-bold text-red-500 w-8">#{item.id}</span>
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-14 object-cover rounded"
              />
              <p className="text-sm font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingList;
