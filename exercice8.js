let nom = "   mohamed   ";
let age = "20";
let email = "mohamed@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";
console.log("===== RAPPORT UTILISATEUR =====");

let nomCorrige = nom.trim();
if (nomCorrige === "") {
  nomCorrige = "Inconnu"
}
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');

let ageNombre = parseInt(age);
if (isNaN(ageNombre) || ageNombre <= 0) {
  console.log("age              : valeur invalide");
} else {
  console.log("age              :", ageNombre, "(valide)");
}

let positionAt = email.indexOf("@");
let pointApresAt = email.indexOf(".", positionAt);

if (positionAt !== -1 && pointApresAt > positionAt) {
  console.log('email            : "' + email + '" (valide)');
} else {
  console.log('email            : "' + email + '" (invalide : pas de point après @)');
}

let score = parseInt(scoreJeu);
if (isNaN(score)) {
  score = 0;
}
console.log("scoreJeu         :", score, '(extrait depuis "' + scoreJeu + '")');

let admin = (estAdmin === "true");
console.log("estAdmin         :", admin, '(attention : Boolean("false") = true, conversion manuelle requise)');

let derniere = derniereConnexion ?? "Jamais connecté"
console.log('derniereConnexion: "' + derniere + '" (valeur par défaut via ??)');

let connexions = Number(nombreConnexions);

if (connexions === 0) {
  console.log('nombreConnexions : "Aucune connexion" (0 après conversion)');
} else {
  console.log("nombreConnexions :", connexions);
}

console.log("================================");