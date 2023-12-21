<script lang="ts">
export default {name: "LktSpinner", inheritAttrs: false}
</script>

<script lang="ts" setup>
import {computed} from "vue";
import {Settings} from "../settings/Settings";

const hasCustomSpinner = computed(() => typeof Settings.CustomSpinner !== 'undefined'),
    customSpinner = computed(() => Settings.CustomSpinner);
</script>

<template>
    <div class="lkt-spinner-container">
        <component v-if="hasCustomSpinner" v-bind:is="customSpinner"></component>
        <div v-else class="lkt-spinner"></div>
    </div>
</template>