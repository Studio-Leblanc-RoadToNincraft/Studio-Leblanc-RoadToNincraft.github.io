document.addEventListener('DOMContentLoaded', () => {
    // Attache l'écouteur d'événement au bouton
    document.getElementById('submit').addEventListener('click', calculerDateRP);
});

function calculerDateRP() {
        // Récupération du facteur de conversion
        const facteur = parseFloat(document.getElementById('facteur').value);
        
        if (isNaN(facteur) || facteur <= 0) {
            document.getElementById('resultat').innerHTML = 'Veuillez entrer un facteur de conversion valide.';
            return;
        }

        // Référentiel
        const T0Irl = new Date(2023, 9, 14); // Octobre est le mois 9 en JS (0-indexé)
        const T0RP = new Date(8, 0, 1); // Janvier est le mois 0 en JS (0-indexé)
        
        // Calcul des deltas
        const NowIrl = new Date();
        const deltaIrl = NowIrl - T0Irl;
        const deltaRP = deltaIrl * facteur;

        // Calcul de la date actuelle en RP
        const dateRP = new Date(T0RP.getTime() + deltaRP);

        // Mois en français
        const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        const y = dateRP.getFullYear();
        const m = mois[dateRP.getMonth()];
        const d = dateRP.getDate();
        const h = dateRP.getHours();
        const mn = dateRP.getMinutes().toString().padStart(2, '0');

        // Affichage du résultat
        document.getElementById('resultat').innerHTML = `Nous sommes le <strong>${d} ${m}</strong> de l'an <strong>${y}</strong>.<br>Il est actuellement <strong>${h}h${mn}</strong>.`;
    }
