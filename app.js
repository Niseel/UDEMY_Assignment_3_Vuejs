const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    result(value) {
      if (value && value > 37) {
        const that = this;
        setTimeout(() => {
          that.result = 0;
        }, 2000);
      }
    },
  },
  computed: {
    showResult() {
      if (this.result > 37) {
        return "Too much!";
      }
      return "Not there yet";
    },
  },
  methods: {
    add(num) {
      this.result = this.result + num;
    },
  },
});

app.mount("#assignment");
