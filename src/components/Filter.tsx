import React from "react";
import type{ FilterType } from "../types";

type Props = {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
};

const Filter: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <div style={{ margin: "16px 0" }}>
      <button
        onClick={() => setFilter("all")}
        style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
      >
        全て
      </button>
      <button
        onClick={() => setFilter("completed")}
        style={{ fontWeight: filter === "completed" ? "bold" : "normal", marginLeft: "8px" }}
      >
        完了
      </button>
      <button
        onClick={() => setFilter("incomplete")}
        style={{ fontWeight: filter === "incomplete" ? "bold" : "normal", marginLeft: "8px" }}
      >
        未完了
      </button>
    </div>
  );
};

export default Filter;
