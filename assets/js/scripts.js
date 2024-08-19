const vm = new Vue({
  el: "#app",
  computed: {
    bread() {
      return [
        "assets/img/default/pao_superior.png",
        "assets/img/default/pao_inferior.png",
      ];
    },
    lettuce() {
      return "assets/img/default/alface.png";
    },
    ketchup() {
      return "assets/img/default/molho.png";
    },
    mustard() {
      return "assets/img/default/molho.png";
    },
    mayonnaise() {
      return "assets/img/default/molho.png";
    },
    hamburger() {
      return "assets/img/default/hamburguer.png";
    },
  },
});
