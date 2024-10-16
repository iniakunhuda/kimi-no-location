<script setup lang="ts">
import {
    Home,
    Menu,
    FileVideo,
    Upload,
    SquareSplitHorizontal,
    MapPinCheck
} from "lucide-vue-next";
</script>

<template>
    <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
        <NuxtLink
            to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
            <Home class="h-4 w-4" />
            Dashboard
        </NuxtLink>
        <NuxtLink
            to="/upload"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"

        >
            <Upload class="h-4 w-4" />
            Upload Video
            <!-- <Badge
                class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
            >
                6
            </Badge> -->
        </NuxtLink>
        <NuxtLink
            to="/split-video"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
            <SquareSplitHorizontal class="h-4 w-4" />
            Split Video to Frames
        </NuxtLink>
        <NuxtLink
            to="/geotag/video"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
            <MapPinCheck class="h-4 w-4" />
            Geo-Tagging from Video
        </NuxtLink>
    </nav>
</template>
