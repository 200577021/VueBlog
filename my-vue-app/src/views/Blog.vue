<template>
    <div>
      <h1>Blog Posts</h1>
      <input v-model="searchQuery" placeholder="Search blogs..." />
      <ul>
        <li v-for="post in filteredBlogs" :key="post.id">
          {{ post.title }} - {{ post.category }}
          <button @click="openModal(post)">Details</button>
        </li>
      </ul>
  
      <Teleport to="body">
        <BlogModal v-if="selectedPost" :post="selectedPost" @close="selectedPost = null" />
      </Teleport>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from "vue";
  import BlogModal from "@/components/BlogModal.vue";
  
  export default {
    components: { BlogModal },
    setup() {
      const blogs = ref([]);
      const searchQuery = ref("");
      const selectedPost = ref(null);
  
      onMounted(async () => {
        const response = await fetch("/blogs.json");
        blogs.value = await response.json();
      });
  
      const filteredBlogs = computed(() => {
        return blogs.value.filter(post =>
          post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          post.category.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      });
  
      return { blogs, searchQuery, filteredBlogs, selectedPost, openModal: (post) => (selectedPost.value = post) };
    }
  };
  </script>