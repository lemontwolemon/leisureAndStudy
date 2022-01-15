<template>
  <div class="gastly">
    <div class="gastly-shadow-container">
      <div class="gastly-shadow -a"></div>
      <div class="gastly-shadow -b"></div>
      <div class="gastly-shadow -c"></div>
      <div class="gastly-shadow -d"></div>
      <div class="gastly-shadow -e"></div>
      <div class="gastly-shadow -f"></div>
      <div class="gastly-shadow -g"></div>
      <div class="gastly-shadow -h"></div>
      <div class="gastly-shadow -i"></div>
      <div class="gastly-shadow -j"></div>
    </div>
    <div class="gastly-body">
      <div class="gastly-eye"></div>
      <div class="gastly-eye -left"></div>

      <div class="gastly-mouth">
        <div class="gastly-teeth"></div>
        <div class="gastly-teeth -right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'GastlyUI',
  setup() {
    return {}
  }
})
</script>

<style scoped>
* {
  position: relative;
}

.gastly {
  position: absolute;
  top: 5vmin;
  left: 5vmin;
  animation: gastly 10s ease infinite alternate;
}

.gastly-body {
  height: 10rem;
  width: 10rem;
  border-radius: 10rem 10rem 10rem 10rem;
  background: #43374e;
  animation: body 3s ease infinite alternate;
  top: 10rem;
  left: 10rem;
}

.gastly-shadow-container {
  filter: contrast(2400%) hue-rotate(272deg) saturate(50%);
  position: absolute;
  top: -10rem;
  left: -10rem;
  /*background-color: #fff;*/
  width: 50rem;
  height: 50rem;
  opacity: 0.2;
  animation: rotate 30s ease infinite alternate;
}

.gastly-shadow {
  filter: blur(26px) brightness(90%);
  height: 10rem;
  width: 9.5rem;
  border-radius: 10rem;
  background-color: #43374e;
  position: absolute;
  top: 20rem;
  left: 20rem;
}

.gastly-eye {
  position: absolute;
  top: 3rem;
  left: 6rem;
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  transform: rotate(-22deg) scale(1.27) scalex(1.12);
}
.gastly-eye.-left {
  transform: scalex(-0.8) rotate(-22deg) scale(1.2) scalex(1.12);
  left: -1rem;
  top: 2.95rem;
}

.gastly-eye::before {
  content: '';
  display: block;
  position: absolute;
  background-color: #fff;
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  top: -1.5rem;
  left: 0;
}

.gastly-eye::after {
  content: '';
  display: block;
  background-color: #43374e;
  position: absolute;
  width: 0.5rem;
  height: 0.7rem;
  top: 0.9rem;
  left: 1rem;
  border-radius: 0.5rem;
  transform: rotate(20deg);
}

.gastly-mouth {
  overflow: hidden;
  top: 6.7rem;
  left: -0.5rem;
  height: 2rem;
  animation: mouth 10s ease infinite alternate;
}
.gastly-mouth::before {
  content: '';
  display: block;
  position: absolute;
  width: 5rem;
  height: 5rem;
  border-radius: 10rem;
  background: #ff8585;
  top: -4rem;
  left: 2.5rem;
}

.gastly-teeth {
  position: absolute;
  left: 2.7rem;
  top: -1rem;
  height: 1.5rem;
  width: 1.5rem;
  background: #fff;
  transform: scalex(0.3) rotate(55deg);
}

.gastly-teeth.-right {
  left: 5.7rem;
  transform: scalex(0.3) rotate(25deg);
}

/* shadow animation */

.gastly-shadow.-a {
  animation: a 3s ease infinite alternate;
}
.gastly-shadow.-b {
  animation: b 4.5s ease infinite alternate;
}
.gastly-shadow.-c {
  animation: c 10s linear infinite alternate;
}
.gastly-shadow.-d {
  animation: d 6s ease infinite alternate;
}
.gastly-shadow.-e {
  animation: e 6.3s ease infinite alternate;
}
.gastly-shadow.-f {
  animation: f 4s ease infinite alternate;
}
.gastly-shadow.-g {
  animation: g 2.5s ease infinite alternate;
}
.gastly-shadow.-h {
  animation: h 3.5s ease infinite alternate;
}
.gastly-shadow.-i {
  animation: i 4.5s ease infinite normal;
}
.gastly-shadow.-j {
  animation: j 5s ease infinite normal;
}

@keyframes gastly {
  0% {
    transform: translateX(0) rotate(-2deg) scale(1);
  }
  50% {
    transform: translateX(2rem) rotate(2deg) scale(1.1);
  }
  100% {
    transform: translateX(0) rotate(-2deg) scale(1);
  }
}
@media screen and (max-width: 1024px) {
  @keyframes gastly {
    0% {
      transform: translateX(0) rotate(-2deg) scale(0.5);
    }
    50% {
      transform: translateX(2rem) rotate(2deg) scale(0.55);
    }
    100% {
      transform: translateX(0) rotate(-2deg) scale(0.5);
    }
  }
}

@keyframes mouth {
  0% {
    transform: translateX(0) rotate(-10deg) scaley(0.97);
  }
  50% {
    transform: translateX(0) rotate(-11deg) scaley(1);
  }
  100% {
    transform: translateX(0) rotate(-10deg) scaley(0.96);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(1.4);
  }
}

@keyframes body {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.2);
  }
}

@keyframes a {
  0% {
    transform: translate3d(1rem, 0, 0) scale(1.3);
  }
  100% {
    transform: translate3d(-1rem, -2rem, 0) scale(1.2);
  }
}

@keyframes b {
  0% {
    transform: translate3d(0, 0, 0) scale(1.5);
  }
  100% {
    transform: translate3d(1rem, 2rem, 0) scale(1.2);
  }
}

@keyframes c {
  0% {
    transform: translate3d(2rem, 2rem, 0) scale(1.2);
  }
  25% {
    transform: translate3d(2rem, -2rem, 0) scale(1.3);
  }
  50% {
    transform: translate3d(-2rem, -2rem, 0) scale(1.1);
  }
  75% {
    transform: translate3d(2rem, -2rem, 0) scale(1.3);
  }
  100% {
    transform: translate3d(2rem, 2rem, 0) scale(1.2);
  }
}

@keyframes d {
  0% {
    transform: translate3d(0, 0rem, 0) scale(1);
  }
  40% {
    transform: translate3d(5rem, 5rem, 0) scale(0.5);
  }
  100% {
    transform: translate3d(10rem, 10rem, 0) scale(0.3);
  }
}

@keyframes e {
  0% {
    transform: translate3d(0, 0rem, 0) scale(1);
  }
  35% {
    transform: translate3d(-5rem, -5rem, 0) scale(0.7);
  }
  100% {
    transform: translate3d(-10rem, -10rem, 0) scale(0);
  }
}

@keyframes f {
  0% {
    transform: translate3d(0, 0rem, 0) scale(1);
  }
  40% {
    transform: translate3d(5rem, -5rem, 0) scale(1);
  }
  100% {
    transform: translate3d(10rem, -10rem, 0) scale(0);
  }
}

@keyframes g {
  0% {
    transform: translate3d(0, 0rem, 0) scale(1);
  }
  45% {
    transform: translate3d(-3rem, 5rem, 0) scale(1);
  }
  100% {
    transform: translate3d(-6rem, 7rem, 0) scale(0);
  }
}

@keyframes h {
  0% {
    transform: translate3d(0, 0rem, 0) scale(1);
  }
  40% {
    transform: translate3d(1rem, 3rem, 0) scale(1);
  }
  100% {
    transform: translate3d(0, 11rem, 0) scale(0.2);
  }
}

@keyframes i {
  0% {
    transform: translate3d(0, 0rem, 0) scale(1);
  }
  40% {
    transform: translate3d(-9rem, -1rem, 0) scale(1);
  }
  100% {
    transform: translate3d(-11rem, 0, 0) scale(0);
  }
}

@keyframes j {
  0% {
    transform: translate3d(0, 0rem, 0) scale(1);
  }
  30% {
    transform: translate3d(1rem, -5rem, 0) scale(1);
  }
  100% {
    transform: translate3d(-1rem, -11rem, 0) scale(0);
  }
}
</style>
