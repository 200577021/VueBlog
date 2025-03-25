<template>
    <div>
      <h1>Blog Posts</h1>
  
      <!-- Search Bar -->
      <input v-model="searchQuery" type="text" placeholder="Search posts..." />
  
      <!-- Displaying filtered posts -->
      <div v-if="filteredPosts.length">
        <div v-for="post in filteredPosts" :key="post.id" class="post" @click="openModal(post)">
          <h2>{{ post.title }}</h2>
          <p>{{ post.category }}</p>
        </div>
      </div>
      <div v-else>
        <p>No posts found...</p>
      </div>

      <!-- Displaying the Subroute-->
      <div>
        <RouterLink to="/posts/food">Explore Food Posts</RouterLink>
      </div>
  
      <!-- Post Modal -->
      <PostModal 
        v-if="modalVisible" 
        :showModal="modalVisible" 
        :post="selectedPost" 
        @close="closeModal" 
      />
  
      <!-- Router View for Subroutes-->
      <router-view v-if="$route.path === '/posts/food'"></router-view>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
  import { RouterLink } from 'vue-router';
  import PostModal from '../components/PostModal.vue';
  
  const posts = ref([]);
  const modalVisible = ref(false);
  const selectedPost = ref(null);
  const searchQuery = ref('');
  
  // Load posts from JSON
  onMounted(() => {
    fetch('/blog-posts.json')
      .then(response => response.json())
      .then(data => {
        posts.value = data;
      })
      .catch(err => console.error(err));
  });
  
  // Filter posts based on search query
  const filteredPosts = computed(() => {
    if (!searchQuery.value) return posts.value;
    return posts.value.filter(post => 
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  
  // Open the modal with selected post
  const openModal = (post) => {
    selectedPost.value = post;
    modalVisible.value = true;
  };
  
  // Close modal
  const closeModal = () => {
    modalVisible.value = false;
  };
  
  onBeforeUnmount(() => {
    // Cleanup of resources
    posts.value = [];
    selectedPost.value = null;
    searchQuery.value = '';
  });
  </script>
  