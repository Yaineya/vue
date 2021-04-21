"use strict";

var App = {
  data: function data() {
    return {
      title: "Список заметок",
      inputValue: "",
      myPlaceholder: "Your new note",
      notes: []
    };
  },
  methods: {
    changeValueInput: function changeValueInput(event) {
      //    console.log(changeValueInput, event.target.value);
      this.inputValue = event.target.value;
    },
    addNewNote: function addNewNote() {
      if (!(this.inputValue === "")) {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase: function toUpperCase(item) {
      return item.toLowerCase();
    },
    deleteNote: function deleteNote(index) {
      this.notes.splice(index, 1);
    }
  },
  computed: {// вычисляемый результат завистит от переменных для оптимизации
  },
  watch: {// следит за изменением любых переменных
  }
};
Vue.createApp(App).mount("#root");