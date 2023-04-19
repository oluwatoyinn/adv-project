import { NoteData, Tag } from "../App";
import NoteForm from "./NoteForm";

type NewNotepProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const NewNotes = ({ onSubmit, onAddTag, availableTags }: NewNotepProps) => {
  return (
    <>
      <h1 className="mb-4">Add Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default NewNotes;
