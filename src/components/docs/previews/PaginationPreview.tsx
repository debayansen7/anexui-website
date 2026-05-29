"use client";
import { useState } from "react";
import { Pagination } from "anexui";

export default function PaginationPreview() {
  const [page, setPage] = useState(3);
  return <Pagination total={10} page={page} onChange={setPage} siblings={1} />;
}
