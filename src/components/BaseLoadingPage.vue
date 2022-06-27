<template>
  <div class="flex items-center justify-center h-screen relative bg-[rgba(255,255,255,0.8)]">
    <section class="absolute overflow-hidden">
      <span class="text-gray-500 text-2xl z-20">Loading...</span>
    </section>
    <div class="flex items-center justify-center w-[400px] h-[400px]">
      <span />
      <span />
    </div>
  </div>
</template>

<style scoped>
div>span {
  background-color: transparent;
  height: 200px;
  width: 200px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 10px solid transparent;
  border-bottom: 10px solid #4799FF;
  border-top: 10px solid #4799FF;
  opacity: 0.6;
  animation: rotateleft 0.8s infinite ease-in-out;
  position: absolute;
}

div>span~span {
  background-color: transparent;
  width: 160px;
  height: 160px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 10px solid transparent;
  border-left: 10px solid #4799FF;
  border-right: 10px solid #4799FF;
  opacity: 0.6;
  animation: rotateright 0.8s infinite ease-in-out;
  position: absolute;
}

@keyframes rotateleft {
  from {transform: rotate(0)}
  to {transform: rotate(-360deg)}
}

@keyframes rotateright {
  from {transform: rotate(0)}
  to {transform: rotate(360deg)}
}
</style>