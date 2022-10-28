<template>
  <base-layout page-title="Memories Detail">
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{ memory.title }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p>{{ memory.description }}</p>
      </ion-card-content>
    </ion-card>
  </base-layout>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";
import BaseLayout from "@/components/base/BaseLayout.vue";
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  },
  data() {
    return {
      memory: {
        id: 1,
        title: "My first memory",
        description: "This is my first memory",
      },
    };
  },
};
</script>
