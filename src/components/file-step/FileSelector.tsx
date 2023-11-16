import React, { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { useLocale } from "../../locale/LocaleContext";
import { Paper, Typography } from "@mui/material";
import "./FileSelector.scss";
import { useTheme } from "@mui/material";

export const FileSelector: React.FC<{ onSelected: (file: File) => void }> = ({
  onSelected,
}) => {
  const onSelectedRef = useRef(onSelected);
  onSelectedRef.current = onSelected;

  const dropHandler = useCallback((acceptedFiles: File[]) => {
    // silently ignore if nothing to do
    if (acceptedFiles.length < 1) {
      return;
    }

    const file = acceptedFiles[0];
    onSelectedRef.current(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: dropHandler,
  });

  const theme = useTheme();

  const l10n = useLocale("fileStep");

  return (
    <Paper
      className="CSVImporter_FileSelector"
      data-active={!!isDragActive}
      sx={{ backgroundColor: theme.palette.action.selected }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <Typography>
        {isDragActive ? l10n.activeDragDropPrompt : l10n.initialDragDropPrompt}
      </Typography>
    </Paper>
  );
};
