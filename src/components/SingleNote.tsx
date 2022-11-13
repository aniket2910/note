import { Button, Stack, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { NoteTypes } from "../types/type";
import { UpdatedNoteType } from "./NoteHome";

interface Props {
  item: NoteTypes;
  handleEdit(id: number, updatedNote: UpdatedNoteType): void;
}

const SingleNote = ({ item, handleEdit }: Props) => {
  const [isEdit, setIsEdit] = useState(true);

  const [singleItem, setSingleItem] = useState(item);

  const HandleFeildChange = () => {
    setIsEdit(!isEdit);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let { name, value } = event.target;
    setSingleItem({ ...singleItem, [name]: value });
  };

  const updateNote = () => {
    handleEdit(item.id, singleItem);
    HandleFeildChange();
  };

  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">{item.title}</Text>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        {isEdit ? (
          <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
            {item.noteText}
          </Text>
        ) : (
          <Textarea
            onChange={handleChange}
            name="noteText"
            defaultValue={item.noteText}
            placeholder="Edit note"
          />
        )}
        <Stack direction="row" alignItems="center">
          <Text fontWeight="semibold">{item.date}</Text>
        </Stack>
        <Stack direction={{ base: "column", md: "row" }}>
          {!isEdit ? (
            <Button onClick={updateNote}>Update</Button>
          ) : (
            <>
              <Button
                onClick={HandleFeildChange}
                variant="outline"
                colorScheme="green"
              >
                Edit
              </Button>
              <Button colorScheme="green">Delete</Button>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SingleNote;
