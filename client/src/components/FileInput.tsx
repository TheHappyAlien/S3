export default function FileInput() {
  return (
    <div className="flex flex-col w-1/4 space-y-3">
      <label className="block">
        <span className="sr-only">Choose file</span>
        <input
          type="file"
          className="block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-md file:border-0
                          file:text-sm file:font-semibold
                          hover:file:bg-blue-100
                          cursor-pointer"
        />
      </label>
      <button type="submit">Upload</button>
    </div>
  );
}
