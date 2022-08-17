<template>
  <button
    class="bg-black rounded-xl flex items-center gap-2 hover:bg-black/50 transition-colors"
    :class="{
      'px-3 py-1 text-sm': size === 'small',
      'px-4 py-2': size === 'medium',
      'px-6 py-3': size === 'large',
      'bg-white/20 hover:bg-white/50': type === 'ghost',
      'bg-gradient-to-br from-primary-500 to-secondary-500 text-white/90':
        type === 'primary',
      'bg-transparent border hover:bg-black/5': type === 'outline',
    }"
  >
    <i :class="icon" v-if="icon" />
    <slot />
  </button>
</template>

<script setup>
defineProps({
  icon: String,
  size: {
    type: String,
    default: "medium",
    validator: (size) => ["small", "medium", "large"].includes(size),
  },
  type: {
    type: String,
    default: "default",
    validator: (size) =>
      ["default", "ghost", "primary", "outline"].includes(size),
  },
});
</script>
