<script setup lang="ts">
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
    <div>
        <Sheet>
            <SheetTrigger as-child>
                <Button
                    variant="outline"
                    size="icon"
                    class="shrink-0 md:hidden"
                >
                    <Menu class="h-5 w-5" />
                    <span class="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" class="flex flex-col">
                <nav class="grid gap-2 text-lg font-medium">
                    <a
                        href="#"
                        class="flex items-center gap-2 text-lg font-semibold mb-5"
                    >
                        <FileVideo class="h-6 w-6" />
                        <span>Kimi No Location</span>
                    </a>
                    <a
                        href="#"
                        class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                        <Home class="h-4 w-4" />
                        Dashboard
                    </a>
                    <a
                        href="#"
                        class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                    >
                        <Upload class="h-4 w-4" />
                        Upload Video
                        <!-- <Badge
                            class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                        >
                            6
                        </Badge> -->
                    </a>
                    <a
                        href="#"
                        class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                        <SquareSplitHorizontal class="h-4 w-4" />
                        Split Video to Frames
                    </a>
                    <a
                        href="#"
                        class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                        <MapPinCheck class="h-4 w-4" />
                        Geo-Tagging
                    </a>
                </nav>
            </SheetContent>
        </Sheet>
    </div>
</template>