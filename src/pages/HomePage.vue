<template>
    <section id="cover">
        <h1 class="title-cover">{{ $t("home.header") }}</h1>
        <div class="icon" @click="scrollCover">
            <div class="arrow"></div>
        </div>
    </section>
    <Popup />
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
        </div>
    </section>
    <section id="terroir-home">
        <div class="container reveal .top">
            <h2 class="home-section-name">{{ $t("history.title") }}</h2>
            <div class="text-container">
                <div class="text-box">
                    <p>
                        {{ $t("history.intro") }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Slider from "../components/Slider.vue"
import Popup from "../components/Popup.vue"

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

    components: {
        Slider,
        Popup
    },
    mounted() {
        const arrow = document.querySelector('.arrow');
        setTimeout(() => {
            if (arrow) {
                arrow.animate([
                    { left: '0' },
                    { left: '10px' },
                    { left: '0' }
                ], {
                    duration: 700,
                                });
            }
        }, 1000);
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
    font-size: calc(15px + 1vw);
    text-align: justify;
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
    bottom: 5%;
    opacity: 50%;
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
</style>