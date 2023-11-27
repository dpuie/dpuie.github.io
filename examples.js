function variableExamples() {
  console.info(2 + 3);
  console.warn("denisa");

  var employed = true;
  var age = 18;
  console.log("angajat:", employed);
  employed = false;
  console.log("angajat:", employed);
  employed = "da";
  console.log("angajat:", employed);

  var skills = ["html", "css"];
  console.debug("tipul variabilei skills", typeof skills);

  var job = document.getElementById("job-title");
  console.warm("job", job);
  console.info(typeof job);
}

variableExamples();
