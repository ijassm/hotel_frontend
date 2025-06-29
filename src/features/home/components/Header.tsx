import { Button, Input } from "../../shared";
import { useModal } from "../contexts";

export const Header = () => {
  const { openModal } = useModal();
  return (
    <header className="flex items-center justify-between mb-5">
      <div className="flex max-w-md w-full">
        <Input
          className="rounded-r-none"
          placeholder="Search hotels by title"
        />
        <Button className="bg-blue-500 text-white p-2 rounded-l-none">
          Search
        </Button>
      </div>
        <Button variant="primary" onClick={openModal}>
          Add Hotel
        </Button>
    </header>
  );
};
