<template>
    <div class="filters__head">
      <p>Фильтр</p>
      <div @click="clearFilters" class="filters__clear">очистить</div>
    </div>
    <div class="filters__inputs">
        <input type="number" :step="step" v-model="sliderMinValue" placeholder="от"/>
        <div class="filters__dash">
            <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="13" height="1" fill="#42474D"/>
            </svg>
        </div>
        <input type="number" :step="step" v-model="sliderMaxValue" placeholder="до"/>
      </div>
    <div ref="slider" class="custom-slider minmax">
        <input
            type="range"
            name="min"
            id="min"
            :min="min"
            :max="max"
            :value="minValue"
            :step="step"
            @input="({ target }) => (sliderMinValue = parseFloat(target.value))"
        />
        <input
            type="range"
            name="max"
            id="max"
            :min="min"
            :max="max"
            :value="maxValue"
            :step="step"
            @input="({ target }) => (sliderMaxValue = parseFloat(target.value))"
        />
    </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    minValue: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: 100,
    },
  },
  emits: ["update:minValue", "update:maxValue", "clearFilter"],
  data() {
    return {
      slider: null,
      sliderMinValue: 0,
      sliderMaxValue: 0
    }
  },
  mounted(){
    this.slider = this.$refs.slider
  },
  methods: {
    getPercent(value, min, max) {
      return ((value - min) / (max - min)) * 100;
    },
    clearFilters(){
      this.sliderMinValue = 0
      this.sliderMaxValue = this.max
      this.$emit("update:minValue", this.sliderMinValue);
      this.$emit("update:maxValue", this.sliderMaxValue);
      this.$emit("clearFilter")
    },
    setCSSProps(width, left, right){
      this.slider.style.setProperty("--width", `${width}%`);
      this.slider.style.setProperty("--progressLeft", `${left}%`);
      this.slider.style.setProperty("--progressRight", `${right}%`);
    },
    change() {
      if (this.sliderMinValue > this.sliderMaxValue) {
          this.sliderMinValue = this.sliderMaxValue
      }
      this.sliderMinValue = this.sliderMinValue < 0 ? 0 : this.sliderMinValue
      this.sliderMaxValue = this.sliderMaxValue < 0 ? 0 : this.sliderMaxValue
      
      if (this.slider) {
        // emit slidet values when updated
        this.$emit("update:minValue", this.sliderMinValue);
        this.$emit("update:maxValue", this.sliderMaxValue);

        // calculate values in percentages
        const differencePercent = this.getPercent(this.sliderDifference, this.min, this.max);
        const leftPercent = this.getPercent(this.sliderMinValue, this.min, this.max);
        const rightPercent = 100 - this.getPercent(this.sliderMaxValue, this.min, this.max);

        // set the CSS variables
        this.setCSSProps(differencePercent, leftPercent, rightPercent);
      }
    },
  },
  computed: {
    sliderDifference() {
      return Math.abs(this.sliderMaxValue - this.sliderMinValue);
    }
  },
  watch: {
    sliderMinValue() {
      this.change()
    },
    sliderMaxValue() {
      this.change()
    },
    maxValue() {
      this.sliderMaxValue = this.maxValue
    },
    max() {
      this.sliderMaxValue = this.max
      this.change()
    }
  }
}
</script>


<style scoped>
.filters__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
}
.filters__head p {
  font-weight: 700;
  font-size: 18px;
  color: #42474D;
}
.filters__clear {
  cursor: pointer;
  font-size: 14px;
  line-height: 171%;
  color: #A6ACB3;
  margin-right: 56px;
}
.filters__inputs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
}
.filters__inputs input {
    background: rgba(166, 172, 179, 0.17);
    border: 1px solid rgba(166, 172, 179, 0.17);
    border-radius: 4px;
    font-size: 16px;
    color: #42474D;
    padding: 9px 7px;
    caret-color: #42474D;
    outline-color: rgba(166, 172, 179, 0.17);
    width: 144px;
}
.filters__inputs input::placeholder {
    font-size: 16px;
    color: #42474D;
}
.filters__dash {
  padding: 0 8px;
  display: flex;
  align-items: center;
}
.custom-slider {
  --trackHeight: 0.5rem;
  --thumbRadius: 1rem;
}

/* style the input element with type "range" */
.custom-slider input[type="range"] {
  position: relative;
  appearance: none;
  background: none;
  border-radius: 999px;
  z-index: 0;
}

/* ::before element to replace the slider track */
.custom-slider input[type="range"]::before,
.custom-slider.minmax::before {
  content: "";
  position: absolute;
  width: var(--ProgressPercent, 100%);
  height: 100%;
  background: var(--primary-color);
  pointer-events: none;
  border-radius: 999px;
}

/* `::-webkit-slider-runnable-track` targets the track (background) of a range slider in chrpme and safari browsers. */
.custom-slider input[type="range"]::-webkit-slider-runnable-track {
  appearance: none;
  background: #E9EDF5;
  height: var(--trackHeight);
  border-radius: 999px;
}

/* `::-moz-range-track` targets the track (background) of a range slider in Mozilla Firefox. */
.custom-slider input[type="range"]::-moz-range-track {
  appearance: none;
  background: #E9EDF5;
  height: var(--trackHeight);
  border-radius: 999px;
}

.custom-slider input[type="range"]::-webkit-slider-thumb {
  position: relative;
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  background: var(--primary-color);
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
  cursor: pointer;
}

.custom-slider.minmax {
  position: relative;
  height: var(--trackHeight);
  background: #E9EDF5;
  border-radius: 999px;
  margin: 0.5rem 0;
  --progressLeft: 0%;
  --progressRight: 0%;
}

.custom-slider.minmax input[type="range"] {
  position: absolute;
  pointer-events: none;
  width: 100%;
}
.custom-slider.minmax input[type="range"]::-webkit-slider-runnable-track {
  background: none;
}

.custom-slider.minmax::before {
  left: var(--progressLeft);
  right: var(--progressRight);
  width: unset;
}

.custom-slider.minmax input[type="range"]::before {
  display: none;
}

@media screen and (max-width: 1600px) {
  .filters__inputs input {
    width: 94px;
  }
  .filters__clear {
    margin-right: 0;
  }
}
</style>