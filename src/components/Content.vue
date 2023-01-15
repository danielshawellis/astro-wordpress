<template>
  <div v-for="post in posts.data.pages?.edges" v-html="post.node.content" />
</template>

<script setup lang="ts">
import { getPosts } from '../data/pages';
const posts = await getPosts();
</script>