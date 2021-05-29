<template>
  <div v-if="hasLinks" class="pt-4">
    <div class="flex justify-between border-t-1px border-$c-divider pt-4">
      <div class="flex flex-shrink-0 pl-3">
        <a v-if="prev" class="link" :href="$withBase(prev.link)">
          <carbon-arrow-left class="icon icon-prev" />
          <span class="text">{{ prev.text }}</span>
        </a>
      </div>
      <div class="flex flex-shrink-0 pr-3">
        <a v-if="next" class="link" :href="$withBase(next.link)">
          <span class="text">{{ next.text }}</span>
          <carbon-arrow-right class="icon icon-next" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNextAndPrevLinks } from '../composables/nextAndPrevLinks'

const { hasLinks, prev, next } = useNextAndPrevLinks()
</script>

<style scoped>
.link {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  font-size: 1rem;
  font-weight: 500;
}

.text {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon {
  display: block;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: var(--c-text);
  transform: translateY(1px);
}

.icon-prev {
  margin-right: 8px;
}
.icon-next {
  margin-left: 8px;
}
</style>
