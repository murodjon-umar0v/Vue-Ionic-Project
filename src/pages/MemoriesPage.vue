<template>
  <base-layout page-title="Memories">
    <IonList>
      <IonItem
        v-for="memory in memories"
        :key="memory.id"
        :router-link="`/memories/${memory.id}`"
      >
        <IonImg :src="memory.img" slot="start" />
        {{ memory.title }}
      </IonItem>
    </IonList>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg } from "@ionic/vue";
import BaseLayout from "@/components/base/BaseLayout.vue";

export default {
  components: {
    IonList,
    IonItem,
    IonImg,
  },
  data() {
    return {
      message: "test",
      memories: [
        {
          id: 1,
          img: "https://picsum.photos/50",
          title: "My first memory",
          description: "This is my first memory",
        },
        {
          id: 2,
          img: "https://picsum.photos/50",
          title: "My second memory",
          description: "This is my second memory",
        },
        {
          id: 3,
          img: "https://picsum.photos/50",
          title: "My third memory",
          description: "This is my third memory",
        },
      ],
    };
  },
};
</script>
