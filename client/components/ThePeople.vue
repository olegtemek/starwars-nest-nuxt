<template>
  <div class="result__item people" v-if="props.item.name && props.item.gender && props.item.height && props.item.mass">
    <h2>{{ props.item.name }}</h2>

    <div>
      <p><span>Height:</span> {{ props.item.height }}</p>

      <p><span>Mass:</span> {{ props.item.mass }}</p>

      <p><span>Gender:</span> {{ props.item.gender }}</p>
    </div>

  </div>
</template>



<script setup lang="ts">
import { IPeople } from '~/interfaces/IPeople';


const props = defineProps<{
  item: IPeople
}>()

</script>