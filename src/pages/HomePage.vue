<template>
    <section id="cover">
        <h1 class="title-cover">{{ $t("home.header") }}</h1>
        <div class="icon" @click="scrollCover">
            <div class="arrow"></div>
        </div>
    </section>
    <Popup />
    <section id="schedule-home">
        <div class="container reveal .top">
            <h2 class="home-section-name">{{ $t("schedule.title") }}</h2>
            <div class="text-container">
                <div class="text-box">
                    <div v-for="day in 5" class="schedule-content">
                        <p class="day">
                            {{ $t("schedule.intro[0][" + String(day - 1) + "]") }}
                        </p>
                        <p class="hours">
                            {{ $t("schedule.intro[1][0]") }}
                        </p>
                    </div>
                    <div class="schedule-content">
                        <p class="day">
                            {{ $t("schedule.intro[0][5]") }}
                        </p>
                        <p class="hours">
                            {{ $t("schedule.intro[1][1]") }}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section id="product-home">
        <div class="container reveal">
            <h2 class="home-section-name">{{ $t("products.header") }}</h2>
            <Slider />
        </div>
    </section>


    <section id="terroir-home">
        <div class="container reveal .top">
            <h2 class="home-section-name">{{ $t("terroir.title") }}</h2>
            <div class="text-container">
                <div class="text-box">
                    <p>
                        {{ $t("terroir.intro") }}
                    </p>
                </div>
            </div>
            <img @mouseover="map = 1" @mouseleave="map = 0" :src="mapImage[map]" alt="Map Champagne" class="map">
        </div>
    </section>
    <section id="history-home">
        <div class="container reveal .top">
            <h2 class="home-section-name">{{ $t("history.title") }}</h2>
            <div class="text-container">
                <div class="text-box">
                    <p>
                        {{ $t("history.intro") }}
                    </p>
                    <img :src="logoVDC" alt="logo VDC" class="VDC">
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Slider from "../components/Slider.vue"
import Popup from "../components/Popup.vue"
import { images } from '../store'

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 120;
        reveals[i].classList.toggle("active", elementTop < windowHeight - elementVisible);
    }

}
mounted: reveal();

window.addEventListener("scroll", reveal);


export default {
    data() {
        return {
            mapImage: images.map,
            map: 0,
            logoVDC: images.logo[0]
        }
    },
    components: {
        Slider,
        Popup
    },
    mounted() {
        const arrow = document.querySelector('.arrow');
        if (arrow) {
            arrow.animate([
                { left: '0' },
                { left: '5px' },
                { left: '0' }
            ], {
                duration: 900,
                iterations: Infinity
            });
        }
        //scrollCover() {
        var scrollTo = document.querySelectorAll("#cover");
        scrollTo.forEach((element) => {
            element.scrollIntoView({
                block: 'end',
                behavior: 'smooth'
            });
        });
    },
    methods: {
        scrollCover() {
            var scrollTo = document.querySelectorAll("#product-home");
            scrollTo.forEach((element) => {
                element.scrollIntoView({
                    block: 'end',
                    behavior: 'smooth'
                });
            });
        }
    }


}

</script>

<style lang="scss">
@import "../style/style.scss";

#content {
    margin-top: 0;
}

#cover {
    background-image: $bg-cover;
    background-repeat: no-repeat;
    background-size: cover;
    font: 3vw $logo-font;
    color: $white;
    text-shadow: 5px 5px 10px $black;
}

.title-cover {
    text-align: center;
    padding-top: 20%;
    padding-bottom: 20%;
    font-size: calc(30px + 3vw);
}

.home-section-name {
    text-align: center;
    text-transform: uppercase;
    color: $primary-color;
    font-weight: bold;
    font-size: calc(20px + 2vw);
    margin-bottom: 1ev;
}

.text-box {
    color: $primary-color;
    font-size: calc(15px + 0.7vw);
    text-align: center;
}

section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

section .container {
    margin: 50px;
}

section .text-container {
    display: flex;
}

section .text-container .text-box {
    margin: 0.5vw 0.5vw;
    padding: 0.5vw;
}

.reveal {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
    transition: 0.5s ease-in-out;
}

.reveal.active {
    transform: translateY(0) scale(1);
    opacity: 1;
}

//--------------------------
.icon {
    position: absolute;
    width: 80px;
    height: 50px;
    cursor: pointer;
    rotate: 90deg;
    bottom: 0%;
    opacity: 40%;
    left: calc(50% - 40px);
}

.arrow {
    position: absolute;
    width: 90%;
    box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
    animation: arrow 700ms linear infinite;
}

.arrow::after,
.arrow::before {
    content: '';
    position: absolute;
    width: 60%;
    height: 10px;
    right: -8px;
    background-color: $white;
}

.arrow::after {
    top: -12px;
    transform: rotate(45deg);
}

.arrow::before {
    top: 12px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
    transform: rotate(-45deg);
}

.map {
    margin: auto;
    margin-top: 10px;
    display: block;
    box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
    border-radius: 2%;
    width: 40vw;
}

.map:hover {
    box-shadow: 0 3px 5px rgba(0, 0, 0, .5);
}

.VDC {
    margin: auto;
    margin-top: 10px;
    display: block;
    border-radius: 50%;
    width: 15vw;
}

.schedule-content {
    margin: 0.5vw 0.5vw;
    padding: 0.5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
}

.day {
    font-weight: bold;
    grid-column: 1;
}

.hours {
    grid-column: 2;

}

.text-box {
    text-align: center;
}

.text-container {
    justify-content: center;
}

@media screen {
    .icon {
        bottom: 5%;
        left: calc(50% - 60px)
    }
}
</style>