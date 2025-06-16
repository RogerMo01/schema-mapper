import React, { useState, useRef, useCallback, type DragEvent } from 'react';
import { FaFileCsv } from "react-icons/fa6";

interface Props {
  onFileChange: (file: File|null) => void;
}

function FileUpload({ onFileChange }: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    onFileChange(files ? files[0] : null)
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    onFileChange(files ? files[0] : null)
  };

  const triggerFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={triggerFileInput}
      className={`
        flex flex-col
        border-2 border-dashed 
        min-w-72 min-h-40
        space-y-2
        ${isDragging ? 'border-blue-500 bg-blue-50 text-blue-500' : 'border-gray-300 bg-gray-50 text-gray-400'}
        rounded-lg p-10 text-center items-center justify-center cursor-pointer
        transition-all duration-300 ease-in-out
        hover:border-blue-400 hover:bg-blue-50 hover:text-blue-500
      `}
      
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".csv"
        className='hidden'
      />

      <FaFileCsv size={50} />
      <p>{isDragging ? "Suelte el archivo aquí" : "Subir archivo .csv"}</p>
    
    </div>
  );
};

export default FileUpload;