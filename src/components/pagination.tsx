import React, { useCallback, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePaginationStore } from "@/stores/pagination-store";
import { useRouter } from "next/navigation";
import { Skeleton } from "./ui/skeleton";

export function PaginationButton({ page }: { page: number }) {
  const { totalPages, getTotalPages, isProcessing, setCurrentPage } = usePaginationStore();
  const router = useRouter(); 

  const fetchTotalPages = useCallback(async () => {
    await getTotalPages({ limit: 20 });
  }, [getTotalPages]);

  useEffect(() => {
    fetchTotalPages();
  }, [fetchTotalPages]);

  if (isProcessing) return <div className="h-40 flex items-center justify-center"> <Skeleton className="h-4 w-28 mx-4"/><Skeleton className="h-4 w-28 mx-4"/></div> ;

  // Generate page numbers array with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      // Show all pages if total is 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);
      
      if (page > 3) {
        pages.push('ellipsis');
      }
      
      // Show pages around current page
      for (let i = Math.max(2, page - 1); i <= Math.min(page + 1, totalPages - 1); i++) {
        pages.push(i);
      }
      
      if (page < totalPages - 2) {
        pages.push('ellipsis');
      }
      
      // Show last page
      pages.push(totalPages);
    }
    return pages;
  };

  const handlePageClick = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      router.push(`/browse-profile/${newPage}`);
      
    }
  };

  return (
    <Pagination className="my-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={() => handlePageClick(page - 1)}
            className={page === 1 ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>

        {getPageNumbers().map((pageNumber, index) => (
          <PaginationItem key={index}>
            {pageNumber === 'ellipsis' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                isActive={pageNumber === page}
                onClick={() => handlePageClick(pageNumber as number)}
              >
                {pageNumber}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageClick(page + 1)}
            className={page === totalPages ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}