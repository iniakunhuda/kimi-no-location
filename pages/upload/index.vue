<script setup lang="ts">
import { Button } from "@/components/ui/button";
import Alert from "@/components/custom/alert/Alert.vue";
import axios from 'axios';

const selectedFile = ref<File | null>(null);
const isLoading = ref(false);
const uploadProgress = ref(0); // Progress percentage
const showAlert = ref(false); // Control alert visibility
const alertType = ref<'success' | 'error'>('success'); // Type of alert
const alertMessage = ref(''); // Alert message
const alertTitle = ref(''); // Alert title

const uploadVideo = async () => {
  if (!selectedFile.value) return;

  const formData = new FormData();
  formData.append('file', selectedFile.value);

  isLoading.value = true; // Start loading
  uploadProgress.value = 0; // Reset progress

  try {
    const response = await axios.post('/api/upload', formData, {
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total) {
          uploadProgress.value = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        }
      }
    });

    console.log("Response", response.status, response.data);

    // Handle success response
    if (response.status === 200) {
      const result = response.data;
      alertTitle.value = 'Upload Successful';
      alertMessage.value = 'Video uploaded successfully: ' + result.videos[0].filename;
      alertType.value = 'success';
      showAlert.value = true; // Show success alert
    }
  } catch (error: any) {
    // Handle error response
    alertTitle.value = 'Upload Failed';
    alertMessage.value = error || 'An error occurred';
    alertType.value = 'error';
    showAlert.value = true; // Show error alert
  } finally {
    isLoading.value = false; // Stop loading
  }
};

const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    selectedFile.value = input.files[0];
  }
};
</script>

<template>
    <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div class="flex items-center">
            <h2 class="text-3xl font-bold tracking-tight">
                Upload
            </h2>
        </div>
        <!-- Alert Component -->
        <Alert 
            v-if="showAlert" 
            :type="alertType" 
            :title="alertTitle" 
            :message="alertMessage" 
        />
        <div
            class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        >
            <div class="flex flex-col items-center gap-1 text-center">
                <h3 class="text-2xl font-bold tracking-tight">
                    You have no videos
                </h3>
                <p class="text-sm text-muted-foreground">
                    You can start split the video into frames and geo-tag the video.
                </p>
                <input type="file" name="file" @change="onFileChange" class="mt-4" />
                <Button class="mt-4" @click="uploadVideo" :disabled="isLoading"> 
                    <span v-if="isLoading">Uploading... {{ uploadProgress }}%</span>
                    <span v-else>Upload Video</span>
                </Button>
                <div v-if="isLoading" class="mt-2 text-sm">
                    Uploading: {{ uploadProgress }}%
                </div>
            </div>
        </div>
    </main>
</template>