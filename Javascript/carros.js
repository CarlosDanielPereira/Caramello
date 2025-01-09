document.addEventListener("DOMContentLoaded", function () {
  //Seletores das divs WEC e F1
  const wecSecao = document.getElementById("wec");
  const f1Secao = document.getElementById("f1");

  //seletor do HTML
  const seletor = document.getElementById("sel-visualizacao");

  //controlar a visibilidade das seções
  function updateVisibility(selectedView) {
      if (selectedView === "wec") {
          wecSecao.style.display = "block";
          f1Secao.style.display = "none";
      } else if (selectedView === "f1") {
          wecSecao.style.display = "none";
          f1Secao.style.display = "block";
      } else if (selectedView === "todos") {
          wecSecao.style.display = "block";
          f1Secao.style.display = "block";
      }
  }

  //evento de mudança no seletor
  seletor.addEventListener("change", function () {
      updateVisibility(this.value);
  });

  //exibição apenas com a seção WEC
  updateVisibility("wec");
});