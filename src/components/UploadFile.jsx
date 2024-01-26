import "../pages/Dashboard.css";
import excel from "../assets/excel.png";
import Papa from "papaparse";
import { useRef, useState } from "react";
import { tagOptions } from "../Constant";
import { SpinnerCircular } from "spinners-react";
import OptionChip from "./OptionChip";

const allowedExtensions = ["csv"];

const Table = ({ dataArray }) => {
  const [selectedTags, setSelectedTags] = useState([[]]);

  const handleTagChange = (index, event) => {
    const newSelectedTags = [...selectedTags];
    if (newSelectedTags[index]) {
      if (!newSelectedTags[index].includes(event.target.value)) {
        newSelectedTags[index].push(event.target.value);
      }
    } else {
      newSelectedTags[index] = [];
      newSelectedTags[index].push(event.target.value);
    }
    setSelectedTags(newSelectedTags);
  };

  return (
    <>
      <div className="upload_header_text">Uploads</div>
      <div className="table_container">
        <table className="table_inner_container">
          <thead style={{ fontSize: 14 }}>
            <tr style={{ height: 58 }}>
              <th>Sl No.</th>
              <th>Links</th>
              <th>Prefix</th>
              <th>Add Tags</th>
              <th>Selected Tags</th>
            </tr>
          </thead>
          <tbody>
            {dataArray.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td
                    className="table_row"
                    key={cellIndex}
                    style={{
                      borderTopLeftRadius: cellIndex === 0 ? 8 : 0,
                      borderBottomLeftRadius: cellIndex === 0 ? 8 : 0,
                    }}
                  >
                    {cellIndex === 3 ? (
                      <select
                        value={selectedTags[index]}
                        onChange={(e) => handleTagChange(index, e)}
                        style={{
                          height: 32,
                          width: 150,
                          appearance: "none",
                          border: "1px solid #F2F2F2",
                          textAlign: "center",
                          paddingInline: 12,
                          borderRadius: 8,
                        }}
                      >
                        {tagOptions.map((tag, tagIndex) => (
                          <option
                            key={tagIndex}
                            value={tag}
                            disabled={tagIndex === 0}
                            selected={tagIndex === 0}
                          >
                            {tag}
                          </option>
                        ))}
                      </select>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
                <td className="last_col">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {!!selectedTags[index] &&
                      selectedTags[index].map((opt, index) => (
                        <OptionChip option={opt} key={index} />
                      ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const UploadFile = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setError("");
    if (e.target.files.length) {
      const inputFile = e.target.files[0];
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }
      setFile(inputFile);
    }
  };
  const handleParse = () => {
    if (!file) return alert("Enter a valid file");

    const reader = new FileReader();
    setLoading(true);
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, {
        header: true,
      });
      setTimeout(() => {
        setLoading(false);
      }, 3000);

      const parsedData = csv?.data;

      if (!parsedData || parsedData.length === 0) {
        return alert("Empty or invalid CSV file");
      }

      const res = parsedData.map((row) => {
        return Object.entries(row).map(([key, value]) => {
          return [value];
        });
      });

      const formattedRows = res.map((row) => row.flat().slice(0, -1));
      setData(formattedRows);
    };

    reader.readAsText(file);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const removeFile = () => {
    setFile("");
    setData([]);
  };

  return (
    <div className="file_upload__container">
      <div className="file_upload__container_inner">
        <div className="file_upload__container__inner__subcontainer">
          <img src={excel} alt="excel" style={{ height: 36, width: 36 }} />
          {file === "" && (
            <div className="upload_text" onClick={handleClick}>
              Drop your excel sheet here or{" "}
              <span style={{ color: "#346bd4" }}>browse</span>
              <input
                ref={fileInputRef}
                onChange={handleFileChange}
                id="csvInput"
                name="file"
                type="File"
                style={{ display: "none" }}
              />
            </div>
          )}
          {file !== "" && (
            <div className="remove_text" onClick={removeFile}>
              {file.name}
              <div style={{ color: "#D33030" }}>Remove</div>
            </div>
          )}
        </div>
        <button className="upload__btn" onClick={handleParse}>
          {loading ? (
            <SpinnerCircular color="#fff" size={30} thickness={200} />
          ) : (
            <>
              <i className="ri-upload-2-line" style={{ marginRight: 8 }}></i>
              Upload
            </>
          )}
        </button>
      </div>
      {!!data && data.length !== 0 && !loading && <Table dataArray={data} />}
    </div>
  );
};

export default UploadFile;
