<template>
  <div class="result__item planet" v-if="props.item.name && props.item.diameter && props.item.population">
    <h2>{{ props.item.name }}</h2>

    <div>
      <p><span>Diameter:</span> {{ props.item.diameter }}</p>

      <p><span>population:</span> {{ props.item.population }}</p>
    </div>

  </div>
</template>



<script setup lang="ts">
import { IPlanet } from '~/interfaces/IPlanet';


const props = defineProps<{
  item: IPlanet
}>()

</script>