const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      goals: [],

      taskVisibleValue: "true",
    };
  },
  computed: {
    buttonCaption() {
      return this.taskVisibleValue ? "Hide List" : "Show List";
    },
  },

  methods: {
    addGoal() {
      this.goals.push(this.inputValue);
    },
    toggleTaskList() {
      this.taskVisibleValue = !this.taskVisibleValue;
    },
  },
});

app.mount(".container");
