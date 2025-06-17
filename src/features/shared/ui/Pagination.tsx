import { Button } from "./Button";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  goToNextPage: () => void;
  goToPrevPage: () => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  goToNextPage,
  goToPrevPage,
}: PaginationProps) => {
  return (
    <div className="flex justify-center items-center gap-4 my-8">
      <Button
        onClick={goToPrevPage}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
      >
        Previous
      </Button>
      <span className="text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
      >
        Next
      </Button>
    </div>
  );
};
