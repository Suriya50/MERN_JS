// Results.js
import React from "react";

const Results = ({ searchText, searchCount }) => (
  <div style={{ marginTop: 20 }}>
    <h4>Results</h4>
    <p>Search Text: {searchText}</p>
    <p>Search Count: {searchCount}</p>
  </div>
);

export default Results;
