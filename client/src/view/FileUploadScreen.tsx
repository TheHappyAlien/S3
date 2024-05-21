import FileColumn from "../components/FileColumn";
import FileInput from "../components/FileInput";
import { useEffect } from "react";
import { UseFileStore } from "../store/file-store";

export default function FileUploadScreen() {
  const {
    files,
    fetchFiles,
  } = UseFileStore();
  
  useEffect(() => {
    fetchFiles();
    return () => {};
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>File Upload App</h1>
      {files === undefined ? (
          <p>No files</p>
        ) : (
          <FileColumn files={files}/>
        )
      }
      <FileInput />
    </div>
  );
}
