<script lang="ts" setup>
    import data from '@/assets/data.json';
    import {reactive} from 'vue'

    const destination = reactive(data['destinations'][0])
</script>

<template>
    <div class="destination-view">
        <h2 class="title">Destination</h2>
        <div class="destination-description">
            <div class="main-container">
                <h4 class="subtitle">{{destination.name}}</h4>
                <div class="image-container">
                    <img class="description-main-img" :src="`src/assets/images/${destination.image}`" >
                </div>
                
                
            </div>
            <div class="description-container">
                <div>
                    <h4 class="subtitle">Description</h4>
                    <p class="description">{{destination.description}}</p>
                    <button class="action-btn" >Remove From Favorites</button>
                </div>
                <div>
                    <h4 class="subtitle">Experiences</h4>
                    <div class="experience-container">
                        <div v-for="experience in destination.experiences">
                            <img :src="`src/assets/images/${experience.image}`"  >
                            <p class="experience-name">{{experience.name}}</p>
                            <!-- <p>{{experience.description}}</p> -->
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.destination-view {
    color: var(--vt-c-black-soft);
    padding: 20px;
    box-shadow: 0px 0px 3px var(--vt-c-black-soft);
    margin: 20px;
    border-radius: 5px;
}

.title {
    color: var(--vt-c-black-soft);
    font-size: 24px;
    font-weight: 500;
}

.destination-description {
    display: flex;
    gap: 15px;
    width: 100%;
}

.destination-description > .main-container {
    width: 50%;
    /* border-right: 1px solid var(--vt-c-black-soft);
    padding-right: 5px; */
}

.destination-description > .description-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.subtitle {
    color: var(--vt-c-black-soft);
    font-size: 16px;
    font-weight: 500;
    /* margin-bottom: 5px; */
}

.experience-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 15px;
    width: 100%;
    margin-top: 10px;
}

.experience-container > div > img {
    width: 100%;
    /* height: 250px; */
    box-shadow: 0px 0px 3px var(--vt-c-black-soft);
}

.description-main-img {
    object-fit: contain;
    width: 100%;
    box-shadow: 0px 0px 3px var(--vt-c-black-soft);
}

.description {
    font-size: 14px;
    line-height: 1.9;
}

.experience-name {
    color: var(--vt-c-black-soft);
    font-size: 14px;
    margin-bottom: 0px;
}

.action-btn {
    display: block;
    border: none;
    background-color: var(--vt-c-black-soft);
    color: var(--vt-c-white-soft);
    padding: 8px 24px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px var(--vt-c-black-soft);
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500%;
}

.image-container {
    display: block;
}

@media screen and (max-width: 992px) {
  .experience-container {
    grid-template-columns: auto auto;
  }

  .destination-description {
    flex-direction: column;
  }

  .destination-description > .main-container {
    width: 100%;
  }

  .destination-description > .description-container  {
    width: 100%;
  }

  .description-main-img {
    max-width: 500px;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>