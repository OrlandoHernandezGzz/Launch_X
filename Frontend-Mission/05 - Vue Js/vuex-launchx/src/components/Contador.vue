<template>
    <div class="contador">
      <!-- $store llama al archivo .index y el metodo store. -->
      {{ $store.state.contador }}
    </div>
</template>

<script>
export default {
    name: 'Contador',
}
</script>