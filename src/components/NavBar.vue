<template>
    <nav>
        <div id="logo">
            <router-link to="/"><img src='/logo.webp' alt="logo Laluc" />
                <div id="txtLogo"><strong>{{ $t('nav.name') }}</strong></div>
            </router-link>
        </div>

        <ul class="nav-links">
            <li @click="closeMobileNav()">
                <router-link to="/products" class="unline-center">{{ $t("nav.product") }}</router-link>
            </li>
            <li @click="closeMobileNav()">
                <router-link to="/contact" class="unline-center">{{ $t("contact.contactUs")
                }}</router-link>
            </li>
            <img v-if="$i18n.locale === 'fr'" src="../assets/icon/flags/us.svg" alt="language fr" class="lang"
                @click="changeLanguage()">
            <img v-else src="../assets/icon/flags/france.svg" alt="lang us" class="lang" @click="changeLanguage()" />
        </ul>

        <div @click="openMobileNav()" id="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
</template>
              
<script lang="ts">
import 'vue-i18n';
export default {
    name: 'Navbar',
    methods: {
        openMobileNav() {
            const burger = document.getElementById('burger')!
            const nav = document.querySelector('.nav-links')!
            nav.classList.toggle('nav-active')
            burger.classList.toggle('toggle')
        },
        closeMobileNav() {
            const burger = document.getElementById('burger')!
            const nav = document.querySelector('.nav-links')!
            nav.classList.remove('nav-active')
            burger.classList.remove('toggle')
        },
        changeLanguage() {
            this.$i18n.locale === 'fr' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'fr'
        },
        scrollToSection(sectionId: string) {
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement && sectionElement instanceof HTMLElement) {
                sectionElement.addEventListener('load', () => {
                    sectionElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                    this.closeMobileNav();
                });
            }
        }
    }
}
</script>

<style lang="scss">
@import '../style/.variables.scss';

nav {
    background-color: $primary-color;
    font-family: $secondary-font;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    top: 0;
    width: 100%;
    z-index: 1000;
}

#logo img {
    height: 50px;
    padding: 5px;
    margin-right: 8px;
}

#logo #txtLogo {
    padding-top: 5px;
}

div#logo a {
    letter-spacing: 5px;
    color: $white;
    font-weight: 800;
    font-size: 2em;
    font-family: $logo-font;
    display: flex;
    text-decoration: none;
}

ul.nav-links {
    padding: 0 5%;
    display: flex;
    padding-right: 0;
    margin-right: 2vw;

}

ul.nav-links li {
    list-style: none;
    margin: 0 1vw;

    background:
        linear-gradient($white 0 0) bottom /var(--d, 0) 1.5px no-repeat;
    transition: 0.5s;

}

ul.nav-links li:hover {
    --d: 100%;
}

ul.nav-links a,
ul.nav-links img {
    text-decoration: none;
    color: $white;
    font-size: 1.2rem;
    font-weight: 100;
    display: flex;
    transition: all 0.3s ease-in;
}


#burger {
    display: none;
    cursor: pointer;
    margin-right: 15px;
}

#burger div {
    width: 30px;
    height: 3px;
    margin: 8px;
    background-color: $white;
    transition: all 0.3s ease-in;
    padding: .1px;
}

ul.dropdown-menu {
    position: absolute;
    background-color: $primary-color;
    cursor: pointer;
    display: none;
}

ul.dropdown-menu li:first-child {
    margin: 0 0 5px 0;
}

ul.dropdown-menu li {
    margin: 10px 0;

}

ul.dropdown-menu li:last-child {
    margin: 10px 0 0 0;
}

ul.dropdown-menu a {
    line-height: 8vh;
    padding: 5px 15px;
    background-color: $primary-color;
    line-height: 50px;
}

.lang {
    width: 1.5em;
    cursor: pointer;
    border-radius: 50%;
    background:
        radial-gradient(transparent 50%, rgba(0, 0, 0, 0.5)) center/200% 200% no-repeat;
    transition: 0.5s;
}

.lang:hover {
    background-size: 100% 100%;
}

/* Mobile */
@media screen and (max-width: 1029px) {

    ul.nav-links {
        position: absolute;
        flex-direction: column;
        width: 100%;
        height: 92vh;
        top: 0;
        right: 0;
        padding-top: 100px;
        align-items: center;
        text-align: center;
        justify-content: flex-start;
        background-color: $primary-color;
        transform: translateX(100%);
        transition: transform 0.5s ease-in;

    }

    ul.nav-links li {
        padding: 2vw;
    }

    ul.nav-links a {
        width: 100%;
        font-size: 8vw;
        text-align: center;
        text-overflow: ellipsis;
    }

    div#burger {
        display: block;
    }

    ul.dropdown-menu {
        position: relative;
        top: 0;
    }

    .lang {
        padding-top: 15em;
        height: 50px;
        width: 50px;
    }
}

.nav-active {
    transform: translateX(0) !important;
}

@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(-60px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
}

.toggle .line1 {
    transform: rotate(-45deg) translate(-9px, 10px);
}

.toggle .line2 {
    opacity: 0;
}

.toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
}</style>