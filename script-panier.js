// 1. Nos données (Base de données locale du panier)
// On récupère le panier depuis la mémoire. S'il n'y a rien, on initialise un tableau VIDE [].
let panier = JSON.parse(localStorage.getItem('cmcCart')) || [];

// Sélection des éléments HTML
const tbody = document.getElementById('cart-tbody');
const totalItemsEl = document.getElementById('total-items');
const subtotalPriceEl = document.getElementById('subtotal-price');
const finalPriceEl = document.getElementById('final-price');
const managementFeeInput = document.getElementById('management-fee');

// 2. Fonction pour afficher le panier
function afficherPanier() {
    tbody.innerHTML = ''; // On vide le tableau avant de le recréer
    
    if (panier.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 20px;">Votre panier est vide. Retournez à la boutique !</td></tr>';
        mettreAJourTotaux();
        return;
    }

    panier.forEach((produit, index) => {
        let sousTotal = produit.prix * produit.quantite;
        
        let ligne = `
            <tr>
                <td>
                    <div class="product-info" style="display:flex; align-items:center; gap:10px;">
                        <img src="${produit.image}" alt="${produit.nom}" class="product-img" style="width:50px; height:50px; object-fit:cover; border-radius:5px;">
                        <span class="product-name">${produit.nom}</span>
                    </div>
                </td>
                <td>${produit.prix.toFixed(2)} DH</td>
                <td>
                    <div class="qty-control" style="display:flex; align-items:center;">
                        <button class="qty-btn" onclick="modifierQuantite(${index}, -1)" style="padding: 2px 8px; cursor: pointer;">-</button>
                        <input type="text" class="qty-input" value="${produit.quantite}" readonly style="width: 40px; text-align: center; margin: 0 5px;">
                        <button class="qty-btn" onclick="modifierQuantite(${index}, 1)" style="padding: 2px 8px; cursor: pointer;">+</button>
                    </div>
                </td>
                <td style="font-weight: bold;">${sousTotal.toFixed(2)} DH</td>
                <td>
                    <button class="remove-btn" onclick="supprimerProduit(${index})" style="color: red; border: none; background: none; cursor: pointer;">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += ligne;
    });

    mettreAJourTotaux();
    sauvegarderPanier();
}

// 3. Fonction pour modifier la quantité
window.modifierQuantite = function(index, changement) {
    panier[index].quantite += changement;
    if (panier[index].quantite <= 0) {
        panier[index].quantite = 1; 
    }
    afficherPanier();
};

// 4. Fonction pour supprimer
window.supprimerProduit = function(index) {
    panier.splice(index, 1);
    afficherPanier();
};

// 5. Mettre à jour les totaux
function mettreAJourTotaux() {
    let nbArticles = 0;
    let prixSousTotal = 0;

    panier.forEach(produit => {
        nbArticles += produit.quantite;
        prixSousTotal += (produit.prix * produit.quantite);
    });
    let fraisGestion = parseFloat(managementFeeInput.value) || 0;
    let prixFinal = prixSousTotal + fraisGestion;

    totalItemsEl.textContent = nbArticles;
    subtotalPriceEl.textContent = prixSousTotal.toFixed(2) + ' DH';
    finalPriceEl.textContent = prixFinal.toFixed(2) + ' DH';
}

managementFeeInput.addEventListener('input', mettreAJourTotaux);

// 6. Sauvegarder
function sauvegarderPanier() {
    localStorage.setItem('cmcCart', JSON.stringify(panier));
}

// 7. Vider le panier
document.getElementById('clearCartBtn').addEventListener('click', () => {
    if(confirm("Êtes-vous sûr de vouloir vider votre panier ?")) {
        panier = [];
        sauvegarderPanier();
        afficherPanier();
    }
});

// Lancement initial
afficherPanier();