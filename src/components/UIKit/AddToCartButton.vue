<template>
  <button class="button" :class="{'loading': isLoading, 'disabled': disabled}" @click="clickEvent">
    <span>{{ text }}</span>
    <div class="cart">
        <svg viewBox="0 0 36 26">
            <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
            <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
        </svg>
    </div>
</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
        disabled: {
          type: Boolean,
          default: false
        }
    },
    data() {
        return {
            isLoading: false
        }
    },
    methods: {
        clickEvent() {
          if (this.disabled) return
            this.isLoading = true
            this.$emit('clickEvent')
            setTimeout(() => {
                this.isLoading = false
            }, 3500);
        }
    }
}
</script>

<style scoped>
.button {
    appearance: none;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: var(--primary-color);
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 13px;
    overflow: hidden;
    transition: box-shadow .3s ease, transform 0.4s cubic-bezier(0.36, 1.01, 0.32, 1.27);
}
.button:not(.disabled):hover {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35);
}
.button.disabled {
  background: #224386ed;
  cursor: default;
}
.button span {
  display: block;
  position: relative;
  transform: translateY(var(--span-y, 0));
  transition: transform 0.7s ease;
}
.button .cart {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -13px 0 0 -18px;
  transform-origin: 12px 23px;
  transform: translateX(-160px) rotate(-18deg);
}
.button .cart:before, .button .cart:after {
  content: '';
  position: absolute;
}
.button .cart:before {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px #fff;
  bottom: 0;
  left: 9px;
  filter: drop-shadow(11px 0 0 #fff);
}
.button .cart:after {
  width: 16px;
  height: 9px;
  background: #fff;
  left: 9px;
  bottom: 7px;
  transform-origin: 50% 100%;
  transform: perspective(4px) rotateX(-6deg) scaleY(var(--fill, 0));
  transition: transform 1.2s ease .8s;
}
.button .cart svg {
  z-index: 1;
  width: 36px;
  height: 26px;
  display: block;
  position: relative;
  fill: none;
  stroke: #fff;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.button .cart svg polyline:last-child {
  stroke: var(--primary-color);
  stroke-dasharray: 10px;
  stroke-dashoffset: var(--offset, 10px);
  transition: stroke-dashoffset 0.4s ease 1.73s;
}
.button.loading {
  --scale: 0.95;
  --span-y: -32px;
  --icon-r: 180deg;
  --fill: 1;
  --fill-d: 0.8s;
  --offset: 0;
  --offset-d: 1.73s;
}
.button.loading .cart {
  animation: cart 3.4s linear forwards 0.2s;
}
@keyframes cart {
  12.5% {
    transform: translateX(-60px) rotate(-18deg);
  }
  25%, 45%, 55%, 75% {
    transform: none;
  }
  50% {
    transform: scale(0.9);
  }
  44%, 56% {
    transform-origin: 12px 23px;
  }
  45%, 55% {
    transform-origin: 50% 50%;
  }
  87.5% {
    transform: translateX(70px) rotate(-18deg);
  }
  100% {
    transform: translateX(140px) rotate(-18deg);
  }
}

@media screen and (max-width: 1600px) {
    .button {
        font-size: 12px;
        padding: 6px;
    }
}
</style>