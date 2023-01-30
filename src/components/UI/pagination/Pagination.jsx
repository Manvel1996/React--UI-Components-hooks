import React from "react";
import { getPagesArray } from "../../../utils/pages";
import "./Pagination.scss";

export default function Pagination({ totalPages, page, changePage }) {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="pageWrapper">
      {pagesArray.map((p) => {
        return (
          <span
            key={p}
            className={page === p ? "page pageCurrent" : "page"}
            onClick={() => changePage(p)}>
            {p}
          </span>
        );
      })}
    </div>
  );
}
