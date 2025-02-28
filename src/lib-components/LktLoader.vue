<script lang="ts" setup>
import {computed} from "vue";
import {Settings} from "../settings/Settings";

const hasCustomLoader = computed(() => typeof Settings.CustomLoader !== 'undefined'),
    customLoader = computed(() => Settings.CustomLoader);
</script>

<template>
    <div class="lkt-loader-container">
        <component v-if="hasCustomLoader" v-bind:is="customLoader"/>
        <div v-else class="lkt-loader"/>
    </div>
</template>