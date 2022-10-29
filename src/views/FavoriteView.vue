<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { useFavoritePlaces } from "@/stores/favoritePlaces";

const {favoritePlace, removeFromFavorite} = useFavoritePlaces();

const removeFromFavorites = (e: Event, id: number) => {
    e.preventDefault();
    removeFromFavorite(id);
}
</script>

<template>
    <div class="home-view-container">
        <h1 class="title">Favorites</h1>
        <div class="destination-container">
            <h3 v-if="!favoritePlace.length">Try adding favorite from <RouterLink to="/">here</RouterLink></h3>
            <div class="destination" v-for="destination in favoritePlace" :key="destination.id">
                <RouterLink to="/destination.slug">
                    <h3 class="destination-title">{{destination.name}}</h3>
                    <img class="destination-images" width="200" :src="`src/assets/images/${destination.image}`">
                    <button class="add-to-fav-btn" @click="(e) => removeFromFavorites(e, destination.id)">Remove From Favorite</button> 
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