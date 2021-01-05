const App = {
  data() {
    return {
      placeholderString: "Input name of the note",
      title: "List of notes",
      inputValue: "",
      notes: ["Note 1", "Note 2"],
    };
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      this.notes.push(this.inputValue);
      this.inputValue = "";
    },
    removeNote(idx) {
      this.notes.splice(idx, 1); //57:26
    },
  },
};

Vue.createApp(App).mount("#app");

// const app = Vue.createApp(App);
// app.mount("#app");
