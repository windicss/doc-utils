<template>
  <main class="container mx-auto px-4 pt-1 pb-16 md:px-8 !max-w-780px">
    <slot name="top" />

    <div class="content">
      <Content />
    </div>

    <PageFooter />

    <NextAndPrevLinks />

    <slot name="bottom" />
  </main>
</template>

<script setup lang="ts">
import PageFooter from './PageFooter.vue'
import NextAndPrevLinks from './NextAndPrevLinks.vue'
</script>

<style scoped>
.content {
  padding-bottom: 1.5rem;
  @apply break-words;
}

/* Utility classes should not wrap */
.content tbody tr td:nth-child(1) {
  white-space: nowrap;
}

@media (max-width: 420px) {
  .content {
    /* fix carbon ads display */
    clear: both;
  }
}
</style>
