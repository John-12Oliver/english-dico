function search() {
    let word = document.getElementById("text").value;
    let resultat = document.getElementById("resultat");

    if (word.length != 0) {
        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                try {
                    // Utilisez "let" à la place de "for" pour récupérer la première définition
                    let definition = data[0].meanings[0].definitions[0].definition;
                    resultat.innerHTML = "<p class='res'><span>Definition</span><br> " + definition + "</p>";
                } catch (err) {
                    resultat.innerHTML = "<p class='res'>Aucune définition trouvée</p>";
                }
            })
            .catch(err => {
                resultat.innerHTML = "<p class='res'>Une erreur s'est produite lors de la récupération des données</p>";
            });

    } else {
        resultat.innerHTML = "<p class='res'>Veuillez remplir ce champ !</p>";
    }
}