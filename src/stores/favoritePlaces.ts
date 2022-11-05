import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type { IDestination } from "@/types";

export const useFavoritePlaces = defineStore("favoritePlaces", () => {
  const favoritePlace: Ref<IDestination[]> = ref([]);

  function addToFavorite(data: IDestination) {
    if (checkIfPlaceExist(data.id)) {
      alert("Place already added");
      return;
    }
    favoritePlace.value.push(data);
  }

  function removeFromFavorite(id: number) {
    const index = favoritePlace.value.findIndex((value) => value.id === id);
    if (!isNaN(index)) {
      favoritePlace.value.splice(index, 1);
    }
  }

  function checkIfPlaceExist(id: number) {
    return favoritePlace.value.some((value) => value.id === id);
  }

  return {
    favoritePlace,
    addToFavorite,
    removeFromFavorite,
    checkIfPlaceExist,
  };
});
