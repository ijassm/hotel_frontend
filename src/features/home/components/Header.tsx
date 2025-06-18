import { Link } from "react-router-dom";
import { Button, Input } from "../../shared";

export const Header = () => {
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
      <Link to="/form">
        <Button variant="primary">Add Hotel</Button>
      </Link>
    </header>
  );
};
