import React, { useState } from "react";
import "./filter.css";
import csv from "csv-parser";

function Filter() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const fs = require("fs");

  function writeToFile(array, filename) {
    fs.writeFile("./extracted.csv", array.join("/n"), (err) => {
      if (err) throw err;
      console.log("The file has been saved.");
    });
  }

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      //fileReader.onload = function (event) {
      var text = e.target.result;
      parseCSVFile(file);
      //csvFileToArray(text);
      //};
    }
    //fileReader.readAsText(file);
  };

  const parseCSVFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvText = e.target.result;
      const results = [];

      csvText.split("\n").forEach((row) => {
        const columns = row.split(",");
        // Change the index to the column you want (0-based)
        const specificColumn = columns[2]; // Replace '2' with the desired column index
        results.push(specificColumn);
        const specificColumn2 = columns[4]; // Replace '2' with the desired column index
        results.push(specificColumn2);
      });

      console.log(results);
      writeToFile(results, "extracted.csv");
    };
    reader.readAsText(file);
  };

  const handleDownload = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," + array.map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "extracted.csv");
    document.body.appendChild(link);
    link.click();
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div style={{ textAlign: "center" }}>
      <h1>REACTJS CSV IMPORT</h1>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          ORGANIZE CSV
        </button>

        <button onClick={handleDownload}>DOWNLOAD CSV</button>
      </form>

      <br />

      <table>
        <thead>
          <tr key={"header"}>
            {headerKeys.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {array.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Filter;
