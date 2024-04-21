let fols = document.getElementsByClassName("fol");
let rightB = document.getElementById("right");
let leftB = document.getElementById("left");

for (fol of fols) {
  fol.addEventListener("dragstart", function (e) {
    let selected = e.target;

    rightB .addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    rightB .addEventListener("drop", function (e) {
      right.appendChild(selected);
      selected = null;
    });
    leftB .addEventListener("dragover", function (e) {
        e.preventDefault();
      });
  
      leftB .addEventListener("drop", function (e) {
        left.appendChild(selected);
        selected = null;
      });

  });
};
