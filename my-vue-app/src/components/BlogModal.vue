<template>
    <div class="modal-overlay">
      <div class="modal">
        <h2>{{ post.title }}</h2>
        <p><strong>Author:</strong> {{ post.author }}</p>
        <p><strong>Date:</strong> {{ post.date }}</p>
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["post"]
  };
  </script>
  
  <style>
  .modal-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
  }
  </style>