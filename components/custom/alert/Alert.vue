<template>
    <div
      v-if="visible"
      :class="`bg-${getBackgroundColor} text-white p-4 rounded relative transition duration-300 ease-in-out`"
      role="alert"
    >
      <strong class="font-bold">{{ title }}</strong><br>
      <span class="block">{{ message }}</span>
      <button
        type="button"
        @click="closeAlert"
        class="absolute top-0 right-0 mt-2 mr-2 text-white hover:text-gray-200"
      >
        <CircleX class="h-6 w-6" />
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, computed } from 'vue';
  import { CircleX } from "lucide-vue-next";
  
  const props = defineProps<{
    type: 'success' | 'error';
    title: string;
    message: string;
  }>();

  const getBackgroundColor = computed(() => {
    return props.type === 'success' ? 'green-500' : 'red-500';
  });
  
  const visible = ref(true);
  
  const closeAlert = () => {
    visible.value = false;
  };
  </script>
  
  <style scoped>
  </style>
  