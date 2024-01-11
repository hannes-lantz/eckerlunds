<template>
  <div class="content">
    <div class="carousel">
      <div class="carousel-inner">
        <div
          class="brands"
          v-for="(container, containerIndex) in containers"
          :key="containerIndex"
        >
          <template v-for="logo in container.logos">
            <img :src="logo" alt="Brand Logo" :style="{ width: logoWidth }" />
          </template>
        </div>
        <div
          class="brands"
          v-for="(container, containerIndex) in containers"
          :key="containerIndex"
        >
          <template v-for="logo in container.logos">
            <img :src="logo" alt="Brand Logo" :style="{ width: logoWidth }" />
          </template>
        </div>
      </div>
      <div class="carousel-inner reverse">
        <div
          class="brands"
          v-for="(container, containerIndex) in containers"
          :key="containerIndex"
        >
          <template v-for="logo in container.logos">
            <img :src="logo" alt="Brand Logo" :style="{ width: logoWidth }" />
          </template>
        </div>
        <div
          class="brands"
          v-for="(container, containerIndex) in containers"
          :key="containerIndex"
        >
          <template v-for="logo in container.logos">
            <img :src="logo" alt="Brand Logo" :style="{ width: logoWidth }" />
          </template>
        </div>
      </div>
      <div class="carousel-inner">
        <div
          class="brands"
          v-for="(container, containerIndex) in containers"
          :key="containerIndex"
        >
          <template v-for="logo in container.logos">
            <img :src="logo" alt="Brand Logo" :style="{ width: logoWidth }" />
          </template>
        </div>
        <div
          class="brands"
          v-for="(container, containerIndex) in containers"
          :key="containerIndex"
        >
          <template v-for="logo in container.logos">
            <img :src="logo" alt="Brand Logo" :style="{ width: logoWidth }" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [],
      containers: [{ logos: [] }, { logos: [] }, { logos: [] }],
      logoWidth: '10vw',
      containerWidth: 0
    };
  },
  mounted() {
    this.loadLogos();
  },
  methods: {
    loadLogos() {
      const logosContext = require.context(
        '@/assets/brands/female',
        false,
        /\.(png|jpe?g|svg)$/
      );
      this.logos = logosContext.keys().map(key => logosContext(key));

      this.containers.forEach(container => {
        container.logos = [...this.logos];
        this.shuffleArrayWithConstraint(container.logos, 4);
      });
    },
    shuffleArrayWithConstraint(array, constraint) {
      // Function to shuffle an array using Fisher-Yates algorithm with constraint on name
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];

        // Check and swap until the constraint is satisfied
        let k = i;
        let attempts = 0;
        while (
          k + constraint >= array.length &&
          attempts < 10 &&
          this.hasAdjacentSameName(array, k, constraint)
        ) {
          [array[k], array[j]] = [array[j], array[k]];
          k--;
          attempts++;
        }
      }
    },
    // Function to check if there is the same name in the adjacent indexes
    hasAdjacentSameName(array, currentIndex, constraint) {
      const currentName = array[currentIndex].name; // Assuming your logo objects have a 'name' property
      for (let offset = 1; offset <= constraint; offset++) {
        if (
          currentIndex + offset < array.length &&
          array[currentIndex + offset].name === currentName
        ) {
          return true; // Same name found in the positive direction
        }
        if (
          currentIndex - offset >= 0 &&
          array[currentIndex - offset].name === currentName
        ) {
          return true; // Same name found in the negative direction
        }
      }
      return false; // No same name found in adjacent indexes
    }
  }
};
</script>

<style scoped>
.content {
  color: #e8be8c;
  padding: 0;
  margin: 100px 0 60px 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.carousel {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
}

.carousel-inner {
  margin: 0;
  width: max-content;
  display: flex;
  flex-wrap: nowrap;
  gap: 3em;
  animation: slide 85s linear infinite;
}

.carousel-inner.reverse {
  animation-direction: reverse;
}

.brands {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3em;
}

.brands img {
  width: var(--logo-width);
}

@keyframes slide {
  from {
    background-position: 0;
  }

  to {
    transform: translate(calc(-50% - 1.5em));
  }
}
</style>
