<template>
  <div class="inline">
    <span ref="textDisplay"></span>
    <span ref="cursor" class="cursor">|</span>
  </div>
</template>

<script>
export default {
  props: {
    texts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentTextIndex: 0,
      currentText: "",
      typingSpeed: 50, // Speed of typing in milliseconds
      eraseSpeed: 30, // Speed of erasing in milliseconds
      delayBetweenTexts: 3000, // Delay between changing texts in milliseconds
      eraseDelay: 50, // Delay after erasing each text in milliseconds
      showCursor: true // Flag to control cursor visibility
    };
  },
  methods: {
    typeText(text, callback) {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        this.currentText += text[currentIndex];
        this.$refs.textDisplay.textContent = this.currentText;
        currentIndex++;
        if (currentIndex === text.length) {
          clearInterval(intervalId);
          setTimeout(callback, this.delayBetweenTexts);
        }
      }, this.typingSpeed);
    },
    eraseText(callback) {
      const textLength = this.currentText.length;
      const intervalId = setInterval(() => {
        this.currentText = this.currentText.slice(0, -1);
        this.$refs.textDisplay.textContent = this.currentText;
        if (this.currentText.length === 0) {
          clearInterval(intervalId);
          setTimeout(callback, this.eraseDelay);
        }
      }, this.eraseSpeed);
    },
    changeText() {
      const nextIndex =
        (this.currentTextIndex + 1) % this.texts.length;
      const nextText = this.texts[nextIndex];
      this.currentTextIndex = nextIndex;
      this.eraseText(() => {
        this.typeText(nextText, this.changeText);
      });
    },
  },
  mounted() {
    this.changeText(); // Start typing effect
  }
};
</script>

<style scoped>
.cursor {
  display: inline;
  margin-left: 2px; 
  animation: blink 0.5s infinite alternate-reverse;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
