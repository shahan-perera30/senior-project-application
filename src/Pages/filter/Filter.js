import React, { useState } from "react";
import "./filter.css";
import { csv } from "d3";

function Filter() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [columnsToKeep, setColumnsToKeep] = useState([]);
  const [newCSVFile, setNewCSVFile] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const data = await csv(file).then((data) => {
      const columns = Object.keys(data[0]);
      setColumnsToKeep(columns);
      return data;
    });
  };

  const filterDataAndCreateNewFile = async () => {
    if (!selectedFile || columnsToKeep.length === 0) {
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const data = await csv(event.target.result).then((data) => {
        return data.map((row) => {
          const newRow = {};
          columnsToKeep.forEach((column) => {
            newRow[column] = row[column];
          });
          return newRow;
        });
      });

      const newCSVFile =
        "data:text/csv;charset=utf-8," +
        data
          .map((row) => columnsToKeep.map((column) => row[column]).join(","))
          .join("\n");
      setNewCSVFile(newCSVFile);
    };

    reader.readAsText(selectedFile);
  };

  return (
    <div className="Filter">
      <h1>Filter</h1>
      <div className="fileUploadContainer">
        <label htmlFor="fileUpload">Upload here</label>
        <input id="fileUpload" type="file" onChange={handleFileUpload} />
      </div>
      <button onClick={filterDataAndCreateNewFile}>
        Filter Data and Create New CSV
      </button>
      {newCSVFile && (
        <a href={newCSVFile} download="filtered.csv">
          Download New File
        </a>
      )}
    </div>
  );
}

export default Filter;
