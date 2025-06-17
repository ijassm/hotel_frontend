import { Select } from "../../shared";

export const Filter = () => {
  return (
    <main className="max-w-md p-4 bg-white rounded-lg sticky top-2 self-start border border-gray-200 ">
      <section>
        <h2 className="text-lg font-semibold">Filters</h2>
        <p className="text-sm text-gray-600">
          Use the filters below for tour best results.
        </p>
      </section>
      <hr className="text-gray-300 mt-4" />
      <section className="flex gap-4 my-6 items-center">
        <Select>
          <option value="price">Min</option>
          <option value="rating">Rating</option>
        </Select>
        <span>to</span>
        <Select>
          <option value="price">Max</option>
          <option value="rating">Rating</option>
        </Select>
      </section>
    </main>
  );
};
