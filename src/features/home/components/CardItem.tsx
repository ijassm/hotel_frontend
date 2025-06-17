import React from "react";
import { Button } from "../../shared/ui/Button";
import { Link } from "react-router-dom";

type HotelCardProps = {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
};

export const CardItem: React.FC<HotelCardProps> = ({
  id,
  imageUrl,
  name,
  description,
}) => {
  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  return (
    <Link
      to={`/details/${id}`}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden flex p-4 gap-4 items-start hover:shadow-lg cursor-pointer"
    >
      {/* Image */}
      <div className="w-48 h-32 flex-shrink-0 overflow-hidden rounded-md">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1">
        {/* Hotel Info */}
        <div className="space-y-1">
          <h5 className="text-lg font-semibold text-gray-800">{name}</h5>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-3">
          <Button variant="primary" onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </Link>
  );
};
