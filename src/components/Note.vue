<template>
  <article
    class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
  >
    <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
      <time :datetime="note.date" class="block text-xs text-gray-500"> {{ note.date }} </time>

      <a href="#">
        <!-- <h3 class="mt-0.5 text-lg font-medium text-gray-900">
            Title
          </h3> -->
      </a>
      <p class="mt-0.5 text-md font-medium text-gray-900">{{ note.content }}</p>

      <div class="mt-4 flex flex-wrap gap-1">
        <span
          class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
        >
          Snippet
        </span>

        <span
          class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
        >
          JavaScript
        </span>
      </div>
      <footer class="flex items-center justify-end gap-2 bg-white p-3">
        <button
          type="button"
          @click.prevent="handleEditClicked"
          class="rounded bg-blue-400 px-3 py-1.5 text-sm font-medium text-white"
        >
          Edit
        </button>
        <button
          type="button"
          @click.prevent="handleDeleteClicked"
          class="rounded bg-red-400 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Delete
        </button>
      </footer>
      <div class="mt-4 flex flex-wrap gap-1">
        <span
          class="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-900"
        >
          {{ characterLength }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import type { Note } from '@/types/note'

const props = defineProps<{ note: Note }>()

const emit = defineEmits(['delete-clicked', 'edit-clicked'])

const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

const handleDeleteClicked = () => {
  emit('delete-clicked', props.note.id)
}

const handleEditClicked = () => {
  emit('edit-clicked', props.note.id)
}
</script>
