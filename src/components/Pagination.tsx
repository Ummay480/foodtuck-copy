"use client"
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-20 mb-20">
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-6 py-4 rounded-md border-none text-sm ${
            currentPage === page ? 'bg-amber-100' : 'bg-amber-50'
          }`}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-8 py-4 rounded-md border-none bg-amber-50 text-sm"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
