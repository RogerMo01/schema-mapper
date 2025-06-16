import EntitySelect from "./EntitySelect";
import { Button, Chip, CircularProgress } from "@mui/material";
import FeedbackBadges from "./FeedbackBadges";
import FileUpload from "./FileUpload";
import { useUploadStage } from "../hooks/useUploadStage";
import { type FormEvent, useState } from "react";
import { ApiRequest } from "../utils/Api";

interface Props {
  finishStage: () => void;
}

export default function UploadStage({ finishStage }: Props) {
  const [loading, setLoading] = useState(false);

  const { file, entity, handleChangeFile, handleChangeEntity } =
    useUploadStage();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit pressed");

    setLoading(true);

    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("entity", entity);

    console.log(formData);

    const response = await ApiRequest("/upload", "POST", formData);
    if (response.ok) {
      setLoading(false);
      finishStage();
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="flex flex-col flex-grow">
      {loading && (
        <div className="flex h-full items-center justify-center">
          <CircularProgress size={60} />
        </div>
      )}

      {!loading && (
        <div className="md:flex md:flex-col my-6 h-full mx-5 md:mx-20">
          <form onSubmit={handleSubmit}>
            <div className="md:flex md:justify-around items-center my-4 space-y-4 md:space-y-0 py-2">
              {/* File Input */}
              <div className="mx-4 flex space-y-2 flex-col">
                <FileUpload onFileChange={handleChangeFile} />
                {file && (
                  <Chip
                    className="w-fit"
                    label={file?.name}
                    color="primary"
                    variant="outlined"
                  />
                )}
              </div>
              {/* Select Input */}
              <div className="mx-4 md:min-w-72 md:max-w-96">
                <EntitySelect
                  entity={entity}
                  handleChange={handleChangeEntity}
                />
              </div>
            </div>

            <FeedbackBadges
              showFileBadge={file !== null}
              showEntityBadge={entity !== ""}
            />

            <div className="flex justify-center p-8">
              <Button
                type="submit"
                disabled={!file || entity === ""}
                variant="contained"
              >
                Siguiente
              </Button>
            </div>
          </form>

          {file && <div className="flex mx-5"></div>}
        </div>
      )}
    </div>
  );
}
