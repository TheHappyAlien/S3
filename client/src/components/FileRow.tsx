import React, { useState } from "react";
import FileDto from "../store/dto/File.dto";
import DeleteIcon from "./icons/DeleteIcon";
import DownloadIcon from "./icons/DownloadIcon";
import EditIcon from "./icons/EditIcon";
import { UseFileStore } from "../store/file-store";

interface FileRowProps {
  file: FileDto;
}



export default function FileRow({ file }: FileRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [fileName, setFileName] = useState(file.name);
  
  const {
    updateFileName,
    deleteFile,
    downloadFile,
  } = UseFileStore();

  const handleFileNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      updateFileName(file.id, fileName);
    } else if (event.key === "Escape") {
      setFileName(file.name);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex py-2 text-white">
      <p className="w-1/6">{file.id}</p>
      {isEditing ? (
        <input
          type="text"
          value={fileName}
          onChange={handleFileNameChange}
          onKeyDown={handleKeyDown}
          className="w-1/3"
        />
      ) : (
        <p className="w-2/3">{fileName}</p>
      )}
      <div className="flex space-x-2">
        <a>
        <DownloadIcon onClick={() => downloadFile(file.id)} />
        </a>
        
        <EditIcon onClick={() => setIsEditing(true)} />
        <DeleteIcon onClick={() => deleteFile(file.id)} />
      </div>
    </div>
  );
}
