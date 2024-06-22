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
    <div className="flex flex-col items-center">
      {files === undefined || files.length === 0 ? (
          <p>Brak plików</p>
        ) : (
          <FileColumn files={files}/>
        )
      }
      <FileInput />
    </div>
  );
}
