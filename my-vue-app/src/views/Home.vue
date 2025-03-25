<template>
  <div>
    <h1>Welcome to the Blog</h1>

    <!-- Blog Posts Grid -->
    <div class="grid-container">
      <div 
        v-for="post in posts" 
        :key="post.id" 
        class="grid-item"
        @click="openModal(post)"
      >
        <h2>{{ post.title }}</h2>
        <p>{{ post.category }}</p>
      </div>
    </div>

    <!-- Post Modal -->
    <PostModal 
      v-if="modalVisible" 
      :showModal="modalVisible" 
      :post="selectedPost" 
      @close="closeModal" 
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PostModal from '../components/PostModal.vue';

const posts = ref([]);
const modalVisible = ref(false);
const selectedPost = ref(null);

// Load posts from JSON
onMounted(() => {
  fetch('/blog-posts.json')
    .then(response => response.json())
    .then(data => {
      posts.value = data;
    })
    .catch(err => console.error(err));
});

// Open modal with the selected post
const openModal = (post) => {
  selectedPost.value = post;
  modalVisible.value = true;
};

// Close modal
const closeModal = () => {
  modalVisible.value = false;
};
</script>

<style scoped>

h1 {
  text-align: center;
  margin-bottom: 20px;
}

/* Grid container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
}

/* Grid item */
.grid-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #1e1a1a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.grid-item h2 {
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.grid-item p {
  font-size: 1rem;
  color: #555;
}
</style>
