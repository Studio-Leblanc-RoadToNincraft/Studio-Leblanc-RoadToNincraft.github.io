document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('submit').addEventListener('click', calculerAgeRP);
});



function calculerAgeRP() {
        // Récupération et vérification des valeurs des champs d'entrée
        const annee = parseInt(document.getElementById('annee').value, 10);
        const mois = parseInt(document.getElementById('mois').value, 10); // Mois sélectionné comme nombre 0-11
        const jour = parseInt(document.getElementById('jour').value, 10);
        const ageCreation = parseInt(document.getElementById('age').value, 10);

        // Vérification des valeurs récupérées
        if (isNaN(annee) || isNaN(mois) || isNaN(jour) || isNaN(ageCreation)) {
            document.getElementById('resultat').innerHTML = 'Veuillez remplir tous les champs correctement.';
            return;
        }

        // Création de la date de création du personnage
        const dateCreation = new Date(annee, mois, jour);
        const delta = Date.now() - dateCreation.getTime();

        // Calcul du temps écoulé en temps RP
        const deltaRP = delta * 14;
        const ageRP = ageCreation + deltaRP / (1000 * 60 * 60 * 24 * 365.25);

        // Affichage des résultats
        document.getElementById('resultat').innerHTML = `
            Ton personnage a ${ageRP.toFixed(2)} ans.<br>
            Temps écoulé : ${(deltaRP / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2)} ans (RP).<br>
            Soit : ${(deltaRP / (1000 * 60 * 60 * 24 * 30)).toFixed(2)} mois (RP).<br>
            Soit : ${(deltaRP / (1000 * 60 * 60 * 24)).toFixed(2)} jours (RP).
        `;
    }
