import { useState } from "react";
import { UseFileStore } from "../store/file-store";

export default function FileInput() {
  const [file, setFile] = useState(null);

  const {
    uploadFile
  } = UseFileStore();

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    uploadFile(file);
  };

  return (
    <div className="flex flex-col w-1/3 space-y-1">
      <label className="block">
        <span className="sr-only">Wybierz plik</span>
        <input
          type="file"
          onChange={handleFileChange}
          className="bg-grey file:py-1 file:px-2 file:border-0 file:text-sm"
        />
      </label>
      <button onClick={handleSubmit} type="submit" className="w-1/2 mx-auto">Prześlij</button>
    </div>
  );
}
