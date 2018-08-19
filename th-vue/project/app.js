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
// Directive
const directive = new Vue({
  el: '#directive', // which html element to attach the instants to
  data: {
    title: "Hello", // pass to mustache syntax
    name: "leo",
    message: "This is directive",
    img: {
      src: 'https://placeimg.com/200/200/animals',
      alt: 'A placeholder for animals'
    }
  }
});