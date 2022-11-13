import React, { useState } from "react";
import { Text, Center, Stack, Button, Textarea } from "@chakra-ui/react";
import { NoteTypes } from "../types/type";
import SingleNote from "./SingleNote";
import { UpdatedNoteType } from "./NoteHome";
// import { PopUp } from "./PopUp";
interface Props {
  storeData: NoteTypes[];
  deleteData: (id: number) => Promise<void>;
  handleEdit(id: number, updatedNote: UpdatedNoteType): void;
  storeData1: any;
  setStoreData: any;
}

const ShowNoteData = ({
  storeData,
  deleteData,
  storeData1,
  setStoreData,
  handleEdit,
}: Props) => {
  // handleChange

  // handleIconeChange

  return (
    <div>
      {storeData.map((item, i) => (
        <SingleNote key={i} handleEdit={handleEdit} item={item} />
      ))}
    </div>
  );
};

export default ShowNoteData;
