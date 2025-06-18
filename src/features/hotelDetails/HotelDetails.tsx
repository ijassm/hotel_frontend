import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../shared/ui/Button";
import { IoMdArrowRoundBack } from "react-icons/io";

export function HotelDetail() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    // Mock fetch or get from global state
    const data = {
      id,
      name: "Sunset Paradise Resort",
      description:
        "A luxurious resort with sunset views. Perfect for relaxation and adventure. Enjoy our infinity pool, spa services, and gourmet dining. Experience the best of nature and comfort at Sunset Paradise Resort. Book your stay now!",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/df/fc/fb/sunset-paradise-resorts.jpg?w=900&h=500&s=1",
      latitude: 12.9716,
      longitude: 77.5946,
    };
    setHotel(data);
  }, [id]);

  if (!hotel) return <p>Loading...</p>;

  return (
    <main className="max-w-2xl mx-auto p-4 space-y-6">
      <section className="relative flex items-center justify-center bg-gray-100 p-4 rounded-md shadow-sm mb-6">
        {/* Back Button on the left */}
        <Link to="/" className="flex items-center gap-2 left-2 text-sm absolute border rounded-md px-4 py-2 hover:text-red-600">
          <IoMdArrowRoundBack />
          Back
        </Link>

        {/* Centered Title */}
        <h1 className="text-lg font-semibold text-center">{hotel.name}</h1>
      </section>
      <img
        src={hotel.imageUrl}
        alt={hotel.name}
        className="w-full rounded-md"
      />
      <h1 className="text-2xl font-bold">{hotel.name}</h1>
      <p className="text-gray-700">{hotel.description}</p>

      <h2 className="text-lg font-semibold mt-6">Location</h2>
      <div className="w-full h-64">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${hotel.latitude},${hotel.longitude}&hl=es;z=14&output=embed`}
        ></iframe>
      </div>
    </main>
  );
}
