import React from "react";
import {
  Pagination as Root,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { pageState } from "@/lib/recoil";
import { useRecoilState } from "recoil";
import { Athlete } from "@/types/auth";

interface Props {
  data: any;
}

export const Pagination = ({ data }: Props) => {
  const [page, setPage] = useRecoilState(pageState);
  const totalPages = data[data.length - 1]._count / 9;

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <Root>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevious}
              disabled={page === 0}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <PaginationItem key={pageIndex}>
              <PaginationLink
                onClick={() => setPage(pageIndex)}
                isActive={page === pageIndex}
              >
                {pageIndex + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              disabled={page === totalPages - 1}
            />
          </PaginationItem>
        </PaginationContent>
      </Root>
    </div>
  );
};
