<template>
  <header class="navbar" :class="{'lg:ml-$sidebar-width': sidebarState}">
    <NavBarTitle :class="{'!lg:hidden': sidebarState}" />
    <div class="hidden lg:flex px-3">
      <NavBarLinks />
    </div>

    <div class="flex-grow" />

    <NavBarIconButtons>
      <slot name="icons" />
      <template #search>
        <slot name="search" />
      </template>
    </NavBarIconButtons>
    <ToggleSideBarButton @toggle="toggleSidebar" />
  </header>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { toggleSidebar } from '../../composables/sideBar'

defineProps({
  sidebarState: Boolean,
})
</script>

<style scoped lang="postcss">
.navbar {
  @apply
    fixed top-0 inset-x-0 z-$z-index-navbar
    flex space-between align-center
    py-0.7rem px-4 md:px-5 lg:px-6
    h-$header-height bg-$c-bg
    border-b-1px border-$c-divider
    select-none;
}
</style>
