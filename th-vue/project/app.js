const helloWorld = new Vue({
  el: '#helloVue', // which html element to attach the instants to
  data: {
    title: "HELLO, World!!", // pass to mustache syntax
    message: "This is my first Vue template"
  }
});

// Component System
const example = new Vue({
  el: '#example', // which html element to attach the instants to
  data: {
    title: "Hello", // pass to mustache syntax
    name: "leo",
    message: "This is example"
  }
});