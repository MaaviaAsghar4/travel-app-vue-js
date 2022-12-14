<script lang="ts" setup>
import data from "@/assets/data.json";
import { RouterLink } from "vue-router";
import { useFavoritePlaces } from "@/stores/favoritePlaces";
import type { IDestination } from "@/types";

const { addToFavorite, checkIfPlaceExist } = useFavoritePlaces();

const addToFavorites = (e: Event, destination: IDestination) => {
  e.preventDefault();
  addToFavorite(destination);
};

const getImageURL = (fileName: string) => {
  const imageUrl = new URL('../assets/images/' + fileName, import.meta.url).href;
  return imageUrl;
}
</script>

<template>
  <div class="home-view-container">
    <h1 class="title">All Destinations</h1>
    <div class="destination-container">
      <div
        class="destination"
        v-for="destination in data['destinations']"
        :key="destination.id"
      >
        <RouterLink :to="destination.slug">
          <h3 class="destination-title">{{ destination.name }}</h3>
          <img
            class="destination-images"
            width="200"
            :src="getImageURL(destination.image)"
          />
          <button
            class="add-to-fav-btn"
            @click="(e) => addToFavorites(e, destination)"
          >
            {{
              checkIfPlaceExist(destination.id)
                ? "Added to Favorite"
                : "Add to Favorite"
            }}
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-view-container {
  padding: 20px;
}

.destination-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 15px;
}

.destination {
  cursor: pointer;
  box-shadow: 0px 0px 3px var(--vt-c-black-soft);
  padding: 10px 20px;
  border-radius: 5px;
}

.destination > a {
  text-decoration: none;
}

.add-to-fav-btn {
  display: block;
  border: none;
  background-color: var(--vt-c-black-soft);
  color: var(--vt-c-white-soft);
  padding: 8px 24px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px var(--vt-c-black-soft);
  cursor: pointer;
  font-weight: 500;
}

.destination-images {
  margin-bottom: 5px;
  box-shadow: 0px 0px 3px var(--vt-c-black-soft);
}

.destination-title {
  color: var(--vt-c-black-soft);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
}

.title {
  color: var(--vt-c-black-soft);
  font-size: 24px;
  font-weight: 500;
}
</style>
