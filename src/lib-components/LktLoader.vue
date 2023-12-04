<script lang="ts">
export default {name: "LktLoader", inheritAttrs: false}
</script>

<script lang="ts" setup>
import {computed} from "vue";
import {Settings} from "../settings/Settings";

const hasCustomLoader = computed(() => typeof Settings.CustomLoader !== 'undefined'),
    customLoader = computed(() => Settings.CustomLoader);
</script>

<template>
    <div class="lkt-loader-container">
        <component v-if="hasCustomLoader" v-bind:is="customLoader"></component>
        <div v-else class="lkt-loader"></div>
    </div>
</template>