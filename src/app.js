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

  return (
    pronoun[Math.floor(Math.random() * (pronoun.length - 1))] +
    adj[Math.floor(Math.random() * (adj.length - 1))] +
    noun[Math.floor(Math.random() * (noun.length - 1))] +
    service[Math.floor(Math.random() * (service.length - 1))]
  );
}
