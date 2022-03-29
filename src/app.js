/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#domain").innerHTML = GetDomain();
};

function GetDomain() {
  var pronoun = ["the", "our", "my"];
  var adj = ["great", "big", "pretty", "cute"];
  var noun = ["jogger", "racoon", "dog", "butterfly"];
  var service = [".com", ".net", ".es"];

  var resultados = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < service.length; l++) {
          resultados.push(pronoun[i] + adj[j] + noun[k] + service[l]);
        }
      }
    }
  }

  return resultados.join("<br>");
}
