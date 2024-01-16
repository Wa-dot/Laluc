<template>
    <router-link to="/products" class="products">
      <figure v-for="product in nbOfProducts" :key="product" @click="pathOnClick(product)" class="item">
        <img :src="productsImg[product-1]" :alt="$t(getTextAlt(product))">
        <figcaption>{{ $t(getText(product, '.name')) }}</figcaption>
      </figure>
    </router-link>
  </template>
  
  <script lang="ts">
  import { images, numberInList } from '../store';
  
  export default {
    name: 'Slider',
    data() {
      return {
        currentIndex: 0,
        nbOfProducts: numberInList.products,
        productsImg: [] as string[],
      };
    },
    mounted() {
      this.productsImg = images.products;
    },
    methods: {
      getText(productNumber: number, value: string) {
        return 'products.product' + String(productNumber) + value;
      },
      getTextAlt(productNumber: number) {
        return 'products.product' + String(productNumber) + '.img.alt';
      },
      pathOnClick(productNumber: number) {
        var objet = {
          value: String(productNumber),
          expiration: new Date().getTime() + 1000 * 4,
        };
        localStorage.setItem('productNumber', JSON.stringify(objet));
      },
    },
  };
  </script>

<style lang="scss">
@import "../style/style.scss";

.products {
    display: grid;
    grid-template-columns: repeat($num-of-product, 1fr);
    text-decoration: none;
}

.item {
    display: grid;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    margin: 15px;
    
}

.item>* {
    grid-area: 1/1;
    transition: .4s;
    min-width: 100%;
    
}

.item figcaption {
    display: grid;
    align-items: end;
    color: $white;
    padding: .75rem;
    background: var(--c, #0009);
    clip-path: inset(0 var(--_i, 100%) 0 0);
    
    font: 1.5rem/1.5 sans-serif;
    mask:
        linear-gradient(#000 0 0),
        linear-gradient(#000 0 0);
    mask-composite: xor;
    mask-clip: text, padding-box;
    font: 1.5rem/1.5 sans-serif;
    
    
}

.item:hover figcaption {
    --_i: 0%;
    
}

.item:hover img {
    transform: scale(1.2);
}

@supports not (-webkit-mask-clip: text) {
    .item figcaption {
        -webkit-mask: none;
        mask: none;
        color: #fff;
    }
}

@media (max-width: $maxWidthMedia) {
    .item figcaption {
        --_i: 0%;
    }

    .products {
        grid-template-columns: repeat(2, 1fr);
    }

    .item {
        max-width: 90%;
        font-size: 2ew;
    }
}

@media (max-width: $intWidthMedia) {
    .item figcaption {
        --_i: 0%;
    }

    .products {
        grid-template-columns: repeat(1, 1fr);
    }

    .item {
        min-width: 90%;
        font-size: calc(15px + 2vw);
    }
}
</style>