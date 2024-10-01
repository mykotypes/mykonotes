<template>

    <div class=" my-3">
        <label for="OrderNotes" class="sr-only">Add Note</label>
        <div
            class="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
            <textarea
            id="OrderNotes"
            class="w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
            rows="4"
            v-model="newNote"
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
</template>

<script setup lang="ts">
import { ref } from 'vue'


const newNote = ref<string>('')
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

    notes.value.unshift(note);
}

const clearNote = () => {
    newNote.value = ''
}

</script>