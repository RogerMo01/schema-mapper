import { useState } from "react";
import UploadStage from "./UploadStage";

export default function Main() {
  // 'upload' -> 'map'
  const [stage, setStage] = useState("upload");

  const finishUpload = () => {
    console.log("1️⃣ Finished Upload Stage");
    setStage("mapping");
  };

  return (
    <div className="h-full flex flex-col">
      <h1 className="p-3 text-center text-white font-semibold text-2xl md:text-3xl bg-blue-600">
        Mapear Entidad
      </h1>
      {stage === "upload" && <UploadStage finishStage={finishUpload} />}
      {stage === "mapping" && <div>Mapping stage</div>}
    </div>
  );
}
