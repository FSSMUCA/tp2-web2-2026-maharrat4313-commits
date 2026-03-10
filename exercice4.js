let paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    ["\t\n", "0"]
];

let compteur = 0;

for (let i = 0; i < paires.length; i++) {
    let [a, b] = paires[i];
    let egaliteLache = a == b;
    let egaliteStricte = a === b;

    console.log(`${String(a).replace(/\t\n/, "\\t\\n")} == ${String(b).replace(/\t\n/, "\\t\\n")} -> ${egaliteLache} | ${String(a).replace(/\t\n/, "\\t\\n")} === ${String(b).replace(/\t\n/, "\\t\\n")} -> ${egaliteStricte}`);

    if (egaliteLache && !egaliteStricte) {
        compteur++;
    }
}

console.log("---");
console.log(`${compteur} paire(s) où == et === donnent des résultats différents`);