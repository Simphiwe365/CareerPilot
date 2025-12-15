export default function CVUploader() {
  return (
    <div className="border-dashed border-2 p-6 rounded text-center">
      <p className="mb-2">Drag & drop your CV here (PDF/DOCX)</p>
      <input type="file" />
    </div>
  );
}
