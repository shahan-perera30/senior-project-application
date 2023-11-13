import React, { useState } from "react";
import "./filter.css";
import csv from "csv-parser";
import fs from "fs";

function Filter() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  function writeToFile(array, filename) {
    var csvData = array.join("\n");
    var blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    var link = document.createElement("a");
    var url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((row) => {
      const values = row.split(",");
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
      const csvRows = csvText.split("\n");
      const csvHeader = csvRows.shift().split(",");
      const results = [];

      csvText.split("\n").forEach((row) => {
        const columns = row.split(",");
        // Change the index to the column you want (0-based)
        const specificColumn = columns[1]; // Replace '2' with the desired column index
        results.push(specificColumn);
        const specificColumn2 = columns[9]; // Replace '2' with the desired column index
        results.push(specificColumn2);
        const specificColumn3 = columns[11]; // Replace '2' with the desired column index
        results.push(specificColumn3);
        const specificColumn4 = columns[18]; // Replace '2' with the desired column index
        results.push(specificColumn4);
        const specificColumn5 = columns[20]; // Replace '2' with the desired column index
        results.push(specificColumn5);
        const specificColumn6 = columns[22]; // Replace '2' with the desired column index
        results.push(specificColumn6);
        const specificColumn7 = columns[24]; // Replace '2' with the desired column index
        results.push(specificColumn7);
        const specificColumn8 = columns[26]; // Replace '2' with the desired column index
        results.push(specificColumn8);
        const specificColumn9 = columns[28]; // Replace '2' with the desired column index
        results.push(specificColumn9);
        const specificColumn10 = columns[33]; // Replace '2' with the desired column index
        results.push(specificColumn10);
        const specificColumn11 = columns[35]; // Replace '2' with the desired column index
        results.push(specificColumn11);
        const specificColumn12 = columns[65]; // Replace '2' with the desired column index
        results.push(specificColumn12);
        const specificColumn13 = columns[64]; // Replace '2' with the desired column index
        results.push(specificColumn13);
        const specificColumn14 = columns[66]; // Replace '2' with the desired column index
        results.push(specificColumn14);
        const specificColumn15 = columns[67]; // Replace '2' with the desired column index
        results.push(specificColumn15);
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
