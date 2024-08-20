const vm = new Vue({
  el: "#app",
  data: {
    inputTypeBread: "",
    inputSalad: [],
    inputSauce: [],
    inputHamburger: "",
    step: 1,
    inputName: "",
    inputAddress: "",
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
      if (this.inputSalad.includes("lettuce")) {
        return "assets/img/alface.png";
      }

      return "assets/img/default/alface.png";
    },
    ketchup() {
      if (this.inputSauce.includes("ketchup")) {
        return "assets/img/ketchup.png";
      }

      return "assets/img/default/molho.png";
    },
    mustard() {
      if (this.inputSauce.includes("mustard")) {
        return "assets/img/mostarda.png";
      }

      return "assets/img/default/molho.png";
    },
    mayonnaise() {
      if (this.inputSauce.includes("mayonnaise")) {
        return "assets/img/maionese.png";
      }
      return "assets/img/default/molho.png";
    },
    hamburger() {
      switch (this.inputHamburger) {
        case "bovine":
          return "assets/img/bovino.png";
        case "chicken":
          return "assets/img/frango.png";
        case "soy":
          return "assets/img/soja.png";
        default:
          return "assets/img/default/hamburguer.png";
      }
    },
  },
  methods: {
    placeOrder() {
      if (this.inputTypeBread && this.inputHamburger) {
        this.step = 2;
      } else {
        alert("Selecione o pão e/ou o hambúrguer");
      }
    },
  },
});
