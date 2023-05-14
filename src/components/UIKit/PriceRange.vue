<script setup>
import { computed, ref, watchEffect, watch, reactive } from "vue";

const { min, max, step, minValue, maxValue } = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 200,
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
});

// define emits for the slider component
const emit = defineEmits(["update:minValue", "update:maxValue", "clearFilter"]);

// define refs for the slider element and the slider values
const slider = ref(null);
const sliderMinValue = ref(minValue);
const sliderMaxValue = ref(maxValue);

// function to get the percentage of a value between the min and max values
const getPercent = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;
};

const clearFilters = () => {
  sliderMinValue.value = 0
  sliderMaxValue.value = max / 2
  emit("update:minValue", sliderMinValue.value);
  emit("update:maxValue", sliderMaxValue.value);
  emit("clearFilter")
}

// function to get the difference between the min and max values
const sliderDifference = computed(() => {
  return Math.abs(sliderMaxValue.value - sliderMinValue.value);
});

// function to set the css variables for width, left, and right
const setCSSProps = (width, left, right) => {
  slider.value.style.setProperty("--width", `${width}%`);
  slider.value.style.setProperty("--progressLeft", `${left}%`);
  slider.value.style.setProperty("--progressRight", `${right}%`);
};

// watchEffect to emit the updated values, and update the css variables
// when the slider values change
watchEffect(() => {
  if (sliderMinValue.value > sliderMaxValue.value) {
      sliderMinValue.value = sliderMaxValue.value
  }
  sliderMinValue.value = sliderMinValue.value < 0 ? 0 : sliderMinValue.value
  sliderMaxValue.value = sliderMaxValue.value < 0 ? 0 : sliderMaxValue.value
  
  if (slider.value) {
    // emit slidet values when updated
    emit("update:minValue", sliderMinValue.value);
    emit("update:maxValue", sliderMaxValue.value);

    // calculate values in percentages
    const differencePercent = getPercent(sliderDifference.value, min, max);
    const leftPercent = getPercent(sliderMinValue.value, min, max);
    const rightPercent = 100 - getPercent(sliderMaxValue.value, min, max);

    // set the CSS variables
    setCSSProps(differencePercent, leftPercent, rightPercent);
  }
});
</script>

<template>
    <div class="filters__head">
      <p>Фильтры</p>
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
    margin-bottom: 20px;
}
.filters__inputs input {
    background: rgba(166, 172, 179, 0.17);
    border: 1px solid rgba(166, 172, 179, 0.17);
    border-radius: 4px;
    font-size: 16px;
    color: #42474D;
    padding: 10px 7px;
    caret-color: #42474D;
    outline-color: rgba(166, 172, 179, 0.17);
    width: 145px;
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