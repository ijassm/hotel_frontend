import { AiOutlineCloudUpload } from "react-icons/ai";
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
    <main className="max-w-xl mx-auto">
      <main>
        <Button variant="outline">Back to Home</Button>
        {title}
      </main>
      <section className="flex justify-center items-center h-screen">
        <main className="m-10 border border-gray-400 rounded-xl p-6 w-full max-w-xl">
          {/* Form Title And Description */}
          <section>
            <h1 className="text-xl font-semibold text-black mb-0">{title}</h1>
            <p className="text-sm font-normal text-gray-500 mt-0">
              {description}
            </p>
          </section>

          {/* Form Image Upload */}
          <section className="my-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer flex flex-col items-center justify-center transition-colors duration-300 p-6">
              <AiOutlineCloudUpload className="w-[50px] h-[50px] mb-3" />
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
              <Input placeholder="Enter hotel name" required />
            </div>
            <div>
              <textarea
                placeholder="Write a short description..."
                required
                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:border-blue-500 outline-none resize-vertical font-[inherit] leading-relaxed"
                rows={4}
              />
            </div>
            <div>
              <Input
                placeholder="Enter hotel location"
                onFocus={() => console.log("Hotel Location")}
                required
              />
            </div>
            <div>
              <Input placeholder="Enter hotel price" required />
            </div>
          </section>

          {/* Form Submit Btn */}
          <section>
            <Button className="w-full mt-10 mb-2 py-3 px-5 text-white text-base rounded-lg bg-blue-600 hover:opacity-90 transition-all">
              Submit
            </Button>
          </section>
        </main>
      </section>
    </main>
  );
};
