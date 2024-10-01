<template>
  <div class="mx-auto max-w-3xl notes">
    <h1 class="my-3 text-2xl">Notes</h1>
    <!-- <AddEditNote /> -->
    <div class="my-3">
      <label for="OrderNotes" class="sr-only">Add Note</label>
      <div
        class="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <textarea
          id="OrderNotes"
          class="w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
          rows="4"
          v-model="newNote"
          ref="newNoteRef"
          placeholder="Enter any additional order notes..."
        ></textarea>

        <div class="flex items-center justify-end gap-2 bg-white p-3">
          <button
            type="button"
            @click="clearNote"
            :disabled="!newNote"
            class="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
          >
            Clear
          </button>

          <button
            type="button"
            @click="addNote"
            :disabled="!newNote"
            class="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Add new note
          </button>
        </div>
      </div>
    </div>
    <div v-for="note in notes" :key="note.id" class="max-w-3xl mx-auto my-5">
      <Note :note="note" @deleteClicked="deleteNote" @editClicked="editClicked" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddEditNote from '@/components/AddEditNote.vue'
import Note from '@/components/Note.vue'
import type { NotesArray } from '@/types/note'

const notes = ref<NotesArray>([
  {
    id: '1',
    content: 'This is a note',
    tags: ['Snippet', 'JavaScript'],
    date: '2024-09-27'
  },
  {
    id: '2',
    content: 'This is another note',
    tags: ['Snippet', 'Vue'],
    date: '2024-09-11'
  }
])

const newNote = ref<string>('')
const newNoteRef = ref<HTMLInputElement | null>(null)

const addNote = () => {
  let currentDate = new Date().getTime()
  let id = currentDate.toString()

  let note = {
    id,
    content: newNote.value,
    tags: ['Snippet', 'JavaScript'],
    date: new Date().toISOString().split('T')[0]
  }
  newNote.value = ''
  notes.value.unshift(note)
  if (newNoteRef.value) {
    newNoteRef.value.focus()
  }
}

const clearNote = () => {
  newNote.value = ''
}

const deleteNote = (id: string) => {
  const noteToDelete = notes.value.find((note) => note.id === id)
  if (!noteToDelete) return
  const index = notes.value.indexOf(noteToDelete)
  notes.value.splice(index, 1)
}

const editClicked = (id: string) => {
  const noteToEdit = notes.value.find((note) => note.id === id)

  if (!noteToEdit) return
  const index = notes.value.indexOf(noteToEdit)
  notes.value.splice(index, 1)
  newNote.value = noteToEdit.content
  if (newNoteRef.value) {
    newNoteRef.value.focus()
  }
}
</script>
