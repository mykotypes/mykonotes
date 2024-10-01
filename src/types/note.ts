export interface Note {
    id: string;
    content: string;
    tags: string[];
    date: string;
}

export type NotesArray = Note[];