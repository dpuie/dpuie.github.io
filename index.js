function showHome() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";

  var oldPage2 = document.getElementById("home");
  oldPage2.style.display = "block";
}

function showSkills() {
  var oldPage = document.getElementById("projects");
  oldPage.style.display = "none";
  var page = document.getElementById("skills");
  page.style.display = "block";
}

function showLanguages() {
  var oldPage = document.getElementById("projects");
  oldPage.style.display = "none";
  var page = document.getElementById("languages");
  page.style.display = "block";
}
