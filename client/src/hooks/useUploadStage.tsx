import { type SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export function useUploadStage() {
  const [file, setFile] = useState<File | null>(null);
  const [entity, setEntity] = useState("");

  const handleChangeFile = (f: File | null) => {
    setFile(f);
    console.log(`File changed: ${f}`);
  };

  const handleChangeEntity = (event: SelectChangeEvent) => {
    const entity = event.target.value as string;
    setEntity(entity);
    console.log(`Entity changed: ${entity}`);
  };

  return { file, entity, handleChangeFile, handleChangeEntity };
}
