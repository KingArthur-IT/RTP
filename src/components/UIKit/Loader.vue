<template>
  <span class="loader"></span>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
.loader
    width: 60px
    height: 60px
    border-radius: 50%
    position: relative
    animation: rotate 1s linear infinite
    display: block
    margin: auto
    margin-bottom: 20px
    &::before
        content: ""
        box-sizing: border-box
        position: absolute
        inset: 0px
        border-radius: 50%
        border: 5px solid var(--primary-color)
        animation: prixClipFix 2s linear infinite 
    &::after 
        content: ""
        box-sizing: border-box
        position: absolute
        inset: 0px
        border-radius: 50%
        border: 5px solid #FFF
        animation: prixClipFix 2s linear infinite 
        inset: 8px
        transform: rotate3d(90, 90, 0, 180deg )
        border-color: #D5E0F5 

@keyframes rotate 
    0%  
        transform: rotate(0deg)
    100%   
        transform: rotate(360deg)

@keyframes prixClipFix 
    0%   
        clip-path: polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)
    50%  
        clip-path: polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)
    75%, 100%  
        clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)

</style>