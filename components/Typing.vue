<template>
  <span ref="textDisplay"></span>
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
      delayBetweenTexts: 1000 // Delay between changing texts in milliseconds
    };
  },
  methods: {
    typeText(text, callback) {
      try {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
          this.currentText += text[currentIndex];
          this.$refs.textDisplay.textContent = this.currentText;
          currentIndex++;
          if (currentIndex === text.length) {
            clearInterval(intervalId);
            callback();
          }
        }, this.typingSpeed);
      } catch (error) {}
    },
    eraseText(callback) {
      try {
        setTimeout(() => {
          const intervalId = setInterval(() => {
            this.currentText = this.currentText.slice(0, -1);
            this.$refs.textDisplay.textContent = this.currentText;
            if (this.currentText.length === 0) {
              clearInterval(intervalId);
              callback();
            }
          }, this.eraseSpeed);
        }, this.delayBetweenTexts);
      } catch (error) {}
    },
    changeText() {
      const nextIndex = (this.currentTextIndex + 1) % this.texts.length;
      const nextText = this.texts[nextIndex];
      this.currentTextIndex = nextIndex;
      this.eraseText(() => {
        setTimeout(() => {
          this.typeText(nextText, this.changeText);
        }, this.delayBetweenTexts);
      });
    }
  },
  mounted() {
    this.changeText();
  }
};
</script>

<style scoped>
/* Add any custom styling here */
</style>