import { createBrowserRouter } from "react-router-dom";
import { Home } from "../features/home/Home";
import { HotelDetail } from "../features/hotelDetails/HotelDetails";
import { Form } from "../features/home/components/Form";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <HotelDetail />,
  },
  {
    path: "form",
    element: <Form />,
  },
]);
