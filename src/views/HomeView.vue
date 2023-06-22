<script setup>
import { getDocs } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import { postsCollection } from '../firebase'

const allPosts = ref([])

onMounted(async () => {
  const snapshot = await getDocs(postsCollection)
  const data = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }))

  allPosts.value = data
})
</script>

<template>
  <div>HomeView</div>
</template>

<style scoped></style>
