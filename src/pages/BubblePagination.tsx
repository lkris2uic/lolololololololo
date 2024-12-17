import React from "react";

interface BubblePaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const BubblePagination: React.FC<BubblePaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer
            ${
              currentPage === index + 1
                ? "bg-blue-500 text-white shadow-lg scale-110"
                : "bg-gray-200 text-gray-600 hover:bg-blue-100"
            }
            transition-transform transform hover:scale-110`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default BubblePagination;
