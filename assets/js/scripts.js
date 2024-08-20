const vm = new Vue({
  el: "#app",
  data: {
    inputTypeBread: "",
  },
  computed: {
    bread() {
      switch (this.inputTypeBread) {
        case "gergelim":
          return [
            "assets/img/pao_gergelim_superior.png",
            "assets/img/pao_gergelim_inferior.png",
          ];
        case "australiano":
          return [
            "assets/img/pao_australiano_superior.png",
            "assets/img/pao_australiano_inferior.png",
          ];
        default:
          return [
            "assets/img/default/pao_superior.png",
            "assets/img/default/pao_inferior.png",
          ];
      }
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
