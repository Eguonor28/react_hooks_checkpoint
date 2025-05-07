import React from "react";

const Filter = ({
  filterTitle,
  setFilterTitle,
  filterRating,
  setFilterRating,
}) => {
  return (
    <div className="flex justify-center m-4">
      <input
        className="p-2"
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <label className="flex items-center">
        Min Rating:
        <input
          type="number"
          min="0"
          max="10"
          step="0.1"
          value={filterRating}
          onChange={(e) => setFilterRating(Number(e.target.value))}
          style={{ marginLeft: "8px", width: "60px" }}
        />
      </label>
    </div>
  );
};

export default Filter;
