<template>
  <div class="result__item starship"
    v-if="props.item.name && props.item.length && props.item.crew && props.item.cost_in_credits">
    <h2>{{ props.item.name }}</h2>

    <div>
      <p><span>Length:</span> {{ props.item.length }}</p>

      <p><span>Crew:</span> {{ props.item.crew }}</p>
      <p><span>Cost in credits:</span> {{ props.item.cost_in_credits }}</p>
    </div>

  </div>
</template>



<script setup lang="ts">
import { IStarship } from '~/interfaces/IStarship';


const props = defineProps<{
  item: IStarship
}>()

</script>