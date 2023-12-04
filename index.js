function show() {
  console.info("show", id);
  var page = document.getElementById(id);
  console.info("page", page);
  page.style.display = "block";
}

function hide(id) {
  console.info(hide, id);
  document.getElementById(id).style.display = "none";
}

function showHOME() {
  hide("SKILLS");
  hide("PROJECTS");
  hide("LANGUAGES");

  show("HOME");
}

function showSKILLS() {
  hide("HOME");
  hide("PROJECTS");
  hide("LANGUAGES");

  show("SKILLS");
}

function showPROJECTS() {
  hide("HOME");
  hide("SKILLS");
  hide("LANGUAGES");

  show("PROJECTS");
}

function showLANGUAGES() {
  hide("HOME");
  hide("SKILLS");
  hide("PROJECTS");

  show("LANGUAGES");
}
