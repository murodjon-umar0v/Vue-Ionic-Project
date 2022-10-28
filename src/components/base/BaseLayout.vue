<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton style="color: #fff" />
        </IonButtons>
        <IonTitle>
          {{ pageTitle }}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <slot />
    </IonContent>
  </IonPage>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonList,
  IonItem,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonBackButton,
    IonButtons,
  },

  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
};
</script>
