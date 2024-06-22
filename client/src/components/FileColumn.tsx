import FileDto from "../store/dto/File.dto";
import FileRow from "./FileRow";

interface FileColumnProps {
  files: FileDto[];
}

export default function FileColumn({ files }: FileColumnProps) {
  return (
    <div className="w-1/4">
      <div className="flex pb-2">
        <p className="w-2/12 font-semibold text-gray-200">Id</p>
        <p className="w-6/12 font-semibold text-grey-200">Nazwa</p>
      </div>
      <div className="flex flex-col">
        {files.map((file) => (
          <FileRow key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
}
