<template>
  <div class="home">
    <AdList/>
    <AdForm/>
  </div>
</template>

<script>
import AdForm from '@/components/AdForm.vue';
import AdList from '@/components/AdList.vue';
export default {
  name: 'AddsView',
  components: {
    AdForm, AdList
  }
}
</script>
