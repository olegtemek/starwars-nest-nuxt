<template>
  <div class="search__input">
    <input type="text" placeholder="Darth Vader" v-model="query" @keyup.enter="search" @keyup="validation" />
    <button @click="search"><nuxt-icon name="general/search" filled /></button>
    <span class="search__error" v-if="error">Length: 1 - 120</span>
  </div>
</template>



<script setup lang="ts">
const error = ref(false);
const router = useRouter();
const route = useRoute();
const query: Ref<string> = ref('')

if (route.query.query) {
  query.value = route.query.query as string
}
const search = () => {
  if (!error.value) {
    router.push({ name: 'search', query: { query: query.value } })
  }
}


const validation = () => {
  if (!query.value || query.value.length > 119) {
    error.value = true
  } else {
    error.value = false
  }
}



</script>