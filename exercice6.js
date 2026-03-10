let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

console.log("--- Partie A : ?? ---");
console.log(`nom ?? "valeur par défaut" ->`, nom ?? "valeur par défaut");
console.log(`age ?? "valeur par défaut" ->`, age ?? "valeur par défaut");
console.log(`ville ?? "valeur par défaut" ->`, ville ?? "valeur par défaut");
console.log(`score ?? "valeur par défaut" ->`, score ?? "valeur par défaut");
console.log(`actif ?? "valeur par défaut" ->`, actif ?? "valeur par défaut");

console.log("\n--- Partie B : || ---");
console.log(`nom || "valeur par défaut" ->`, nom || "valeur par défaut");
console.log(`age || "valeur par défaut" ->`, age || "valeur par défaut");
console.log(`ville || "valeur par défaut" ->`, ville || "valeur par défaut");
console.log(`score || "valeur par défaut" ->`, score || "valeur par défaut");
console.log(`actif || "valeur par défaut" ->`, actif || "valeur par défaut");

console.log("\n--- Partie C : Comparaison ?? et || ---");
let variables = [nom, age, ville, score, actif];
let noms = ["nom", "age", "ville", "score", "actif"];

for (let i = 0; i < variables.length; i++) {
    let resultatNullish = variables[i] ?? "valeur par défaut";
    let resultatOuLogique = variables[i] || "valeur par défaut";
    
    if (resultatNullish === resultatOuLogique) {
        console.log(`${noms[i]} : ?? et || -> même résultat`);
    } else {
        console.log(`${noms[i]} : ?? et || -> résultat différent`);
    }
}