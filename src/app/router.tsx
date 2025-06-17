import { createBrowserRouter } from "react-router-dom";
import { Home } from "../features/home/Home";
import { HotelDetail } from "../features/hotelDetails/HotelDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <HotelDetail />,
  },
]);
