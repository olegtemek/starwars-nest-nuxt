<template>
  <div class="result">
    <div class="container">
      <TheSearch />

      <div class="result__wrapper" v-if="search">

        <ThePeople v-for="(item, index) of search.peoples" :key="item.name + index" :item="item" />
        <ThePlanet v-for="(item, index) of search.planets" :key="item.name + index" :item="item" />
        <TheStarship v-for="(item, index) of search.starships" :key="item.name + index" :item="item" />

        <p class="result__error" v-if="search.total < 1">Not found ...</p>
      </div>
    </div>
    <TransitionGroup name="loader">
      <div class="loader" key="loader" v-if="loader">
        <img src="@/assets/source/loader.gif" alt="">
      </div>
    </TransitionGroup>
  </div>
</template>



<script setup lang="ts">
import { ISearch } from '~/interfaces/ISearch';

const route = useRoute();
const loader = ref(true);

if (!route.query?.query) {
  navigateTo('/')
}

const search: Ref<ISearch | undefined> = ref();

useSearch().results(route.query.query as string).then((data) => {
  search.value = data
  loader.value = false
})


watch(
  () => route.query.query,
  async newQuery => {
    if (!route.query.query) {
      navigateTo('/')
    }
    loader.value = true
    useSearch().results(route.query.query as string).then((data) => {
      search.value = data
      loader.value = false
    })
  }
)

</script>