// import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { ModalProvider } from "./features/home/contexts";

export default function App() {
  return (
    <ModalProvider>
      {/* <Provider store={store}> */}
      <RouterProvider router={router} />
      {/* // </Provider> */}
    </ModalProvider>
  );
}
