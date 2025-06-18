import { FaRegFolderClosed } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import { Button, Input } from "../../shared";

interface FormProps {
  type?: "create" | "update";
}

export const Form = ({ type = "create" }: FormProps) => {
  const title = type === "create" ? "Create Hotel" : "Update Hotel";
  const description =
    type === "create"
      ? "Fill out the form below to create a new hotel listing."
      : "Update the details of your existing hotel listing.";

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <section className="m-10 border border-gray-400 rounded-xl p-6 w-full max-w-xl bg-white">
        {/* Form Title And Description */}
        <section className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-black mb-0">{title}</h1>
            <p className="text-sm font-normal text-gray-500 mt-0">
              {description}
            </p>
          </div>
          <FaWindowClose className="text-gray-500 hover:text-red-500 cursor-pointer transition-colors duration-200 text-2xl" />
        </section>

        {/* Form Image Upload */}
        <section className="my-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer flex flex-col items-center justify-center transition-colors duration-300 p-6">
            <FaRegFolderClosed className="w-[50px] h-[50px] mb-3" />
            <h4 className="text-base font-semibold text-gray-800 mb-1">
              Upload Hotel Image
            </h4>
            <p className="text-xs text-gray-500">
              Click or drag and drop to upload an image
            </p>
          </div>
        </section>

        {/* Form InputFields */}
        <section className="space-y-4">
          <div>
            <Input placeholder="Enter hotel name" />
          </div>
          <div>
            <textarea
              placeholder="Write a short description..."
              className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 outline-blue-600 resize-vertical leading-relaxed"
              rows={4}
            />
          </div>
          <div className="flex gap-4">
            <Input placeholder="Enter hotel latitude" />
            <Input placeholder="Enter hotel longitude" />
          </div>
          <div>
            <Input placeholder="Enter hotel price" />
          </div>
        </section>

        {/* Form Submit Btn */}
        <section>
          <Button className="w-full mt-10 mb-2 py-3 px-5 text-white text-base rounded-lg bg-blue-600 hover:opacity-90 transition-all">
            Submit
          </Button>
        </section>
      </section>
    </main>
  );
};
