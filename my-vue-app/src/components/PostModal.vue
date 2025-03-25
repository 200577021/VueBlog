<template>
  <teleport to="body">
    <div v-if="showModal" class="modal-overlay" @click="close">
      <div class="modal-content">
        <h2>{{ post.title }}</h2>
        <p><strong>Author:</strong> {{ post.author }}</p>
        <p><strong>Date Created:</strong> {{ post.date }}</p>
        <p>{{ post.content }}</p>
        <button @click="close">Close</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  showModal: {
    type: Boolean,
    required: true,
  },
  post: {
    type: Object,
    required: true,
  },
});


const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #1b1919;
  padding: 20px;
  border-radius: 5px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
  margin-top: 20px;
}
</style>
