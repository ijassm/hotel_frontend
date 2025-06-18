import { FaRegFolderClosed } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "../../shared";
import {
  hotelFormSchema,
  type HotelFormSchemaInput,
  type HotelFormSchema,
} from "../validations";
import { useForm } from "react-hook-form";

interface FormProps {
  type?: "create" | "update";
}

export const Form = ({ type = "create" }: FormProps) => {
  const title = type === "create" ? "Create Hotel" : "Update Hotel";
  const description =
    type === "create"
      ? "Fill out the form below to create a new hotel listing."
      : "Update the details of your existing hotel listing.";

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<HotelFormSchemaInput>({
    resolver: zodResolver(hotelFormSchema),
  });

  const onSubmit = (data: HotelFormSchema) => {
    console.log("Form Data:", data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("latitude", String(data.latitude));
    formData.append("longitude", String(data.longitude));
    formData.append("price", String(data.price));
    formData.append("image", data.image);

    // Now you can submit formData via axios/fetch to your backend
  };

  return (
    <main className="absolute w-full flex justify-center items-center h-screen bg-[#0000007a] z-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-10 border border-gray-400 rounded-xl p-6 w-full max-w-xl bg-white"
      >
        <section className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-black mb-0">{title}</h1>
            <p className="text-sm text-gray-500 mt-0">{description}</p>
          </div>
          <FaWindowClose className="text-gray-500 hover:text-red-500 cursor-pointer text-2xl" />
        </section>

        <section className="my-6">
          <label className="border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer flex flex-col items-center justify-center p-6">
            <FaRegFolderClosed className="w-[50px] h-[50px] mb-3" />
            <h4 className="text-base font-semibold text-gray-800 mb-1">
              Upload Hotel Image
            </h4>
            <p className="text-xs text-gray-500 mb-2">
              Click to select a JPG image
            </p>
            <input
              type="file"
              accept="image/jpeg"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setValue("image", e.target.files[0], {
                    shouldValidate: true,
                  });
                }
              }}
            />
            {errors.image && (
              <p className="text-sm text-red-500 mt-2">
                {errors.image.message}
              </p>
            )}
          </label>
        </section>

        <section className="space-y-4">
          <div>
            <Input placeholder="Enter hotel name" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Write a short description..."
              className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 outline-blue-600 resize-vertical"
              rows={4}
              {...register("description")}
            />
            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <Input
                placeholder="Enter hotel latitude"
                {...register("latitude")}
              />
              {errors.latitude && (
                <p className="text-sm text-red-500">
                  {errors.latitude.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <Input
                placeholder="Enter hotel longitude"
                {...register("longitude")}
              />
              {errors.longitude && (
                <p className="text-sm text-red-500">
                  {errors.longitude.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Input placeholder="Enter hotel price" {...register("price")} />
            {errors.price && (
              <p className="text-sm text-red-500">{errors.price.message}</p>
            )}
          </div>
        </section>

        <section>
          <Button
            type="submit"
            className="w-full mt-10 py-3 text-white bg-blue-600 hover:opacity-90 rounded-lg"
          >
            Submit
          </Button>
        </section>
      </form>
    </main>
  );
};
