// script-index.js - À lier dans index.html

document.addEventListener('DOMContentLoaded', () => {
    // On sélectionne tous les liens qui ont la classe .btn (tes boutons "buy now")
    const boutonsAchat = document.querySelectorAll('.card-body .btn');

    boutonsAchat.forEach(bouton => {
        bouton.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche la page de remonter en haut quand on clique sur le lien "#"

            // 1. On cible la carte produit spécifique sur laquelle on a cliqué
            const carteProduit = this.closest('.card');

            // 2. On "aspire" les informations directement depuis le HTML
            const nomProduit = carteProduit.querySelector('.card-title').innerText;
            const imageProduit = carteProduit.querySelector('.card-img-top').src;
            
            // On nettoie le prix (enlève "MAD" et transforme en nombre)
            const textePrix = carteProduit.querySelector('.product-price').innerText;
            const prixAnettoyer = textePrix.replace('MAD', '').trim();
            const prixProduit = parseFloat(prixAnettoyer);

            // 3. On crée un objet "Produit"
            const nouvelArticle = {
                nom: nomProduit,
                prix: prixProduit,
                image: imageProduit,
                quantite: 1
            };

            // 4. On récupère le panier existant dans la mémoire (le même nom "cmcCart" que dans panier.js)
            let panier = JSON.parse(localStorage.getItem('cmcCart')) || [];

            // 5. On vérifie si ce produit est déjà dans le panier
            const indexExistant = panier.findIndex(item => item.nom === nouvelArticle.nom);

            if (indexExistant !== -1) {
                // S'il existe déjà, on augmente juste la quantité
                panier[indexExistant].quantite += 1;
            } else {
                // Sinon, on l'ajoute comme nouveau produit
                panier.push(nouvelArticle);
            }

            // 6. On sauvegarde le tout dans la mémoire locale
            localStorage.setItem('cmcCart', JSON.stringify(panier));

            // Petit message visuel pour l'utilisateur
            alert("✅ " + nomProduit + " a été ajouté à votre panier SwapShop !");
        });
    });
});





// --- GESTION DE LA WISHLIST (FAVORIS) ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Éléments du DOM pour la wishlist
    const boutonsWishlist = document.querySelectorAll('.card-body .btn-1'); // Tes boutons "add to chart"
    const wishlistIcon = document.getElementById('wishlist-icon');
    const wishlistSidebar = document.getElementById('wishlist-sidebar');
    const wishlistOverlay = document.getElementById('wishlist-overlay');
    const closeWishlistBtn = document.getElementById('close-wishlist');
    const wishlistItemsContainer = document.getElementById('wishlist-items');

    // 2. Fonction pour afficher la wishlist
    function afficherWishlist() {
        // Récupérer les favoris depuis la mémoire (nom différent du panier : 'cmcWishlist')
        let favoris = JSON.parse(localStorage.getItem('cmcWishlist')) || [];
        wishlistItemsContainer.innerHTML = ''; // On vide avant de remplir

        if (favoris.length === 0) {
            wishlistItemsContainer.innerHTML = '<p style="text-align:center; color:#777; margin-top:20px;">Vous n\'avez pas encore de favoris.</p>';
            return;
        }

        favoris.forEach((produit, index) => {
            let itemHTML = `
                <div class="wishlist-item">
                    <img src="${produit.image}" alt="${produit.nom}">
                    <div class="wishlist-item-info">
                        <p class="wishlist-item-title">${produit.nom}</p>
                        <p class="wishlist-item-price">${produit.prix.toFixed(2)} MAD</p>
                    </div>
                    <button class="remove-wishlist" data-index="${index}" title="Retirer">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            `;
            wishlistItemsContainer.innerHTML += itemHTML;
        });

        // Ajouter les événements pour les boutons poubelle dans la wishlist
        const removeBtns = document.querySelectorAll('.remove-wishlist');
        removeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const indexToRemove = this.getAttribute('data-index');
                favoris.splice(indexToRemove, 1);
                localStorage.setItem('cmcWishlist', JSON.stringify(favoris));
                afficherWishlist(); // Rafraîchir l'affichage
            });
        });
    }

    // 3. Ajouter un produit aux favoris quand on clique sur "add to chart" (btn-1)
    boutonsWishlist.forEach(bouton => {
        bouton.addEventListener('click', function(event) {
            event.preventDefault(); 
            const carteProduit = this.closest('.card');
            
            const nomProduit = carteProduit.querySelector('.card-title').innerText;
            const imageProduit = carteProduit.querySelector('.card-img-top').src;
            const textePrix = carteProduit.querySelector('.product-price').innerText;
            const prixProduit = parseFloat(textePrix.replace('MAD', '').trim());

            const nouveauFavori = { nom: nomProduit, prix: prixProduit, image: imageProduit };

            let favoris = JSON.parse(localStorage.getItem('cmcWishlist')) || [];
            
            // Vérifier si le produit est déjà dans les favoris
            const existeDeja = favoris.some(item => item.nom === nouveauFavori.nom);

            if (!existeDeja) {
                favoris.push(nouveauFavori);
                localStorage.setItem('cmcWishlist', JSON.stringify(favoris));
                afficherWishlist(); // Mettre à jour le panneau
                
                // Ouvrir automatiquement le panneau pour montrer que ça a marché
                wishlistSidebar.classList.add('open');
                wishlistOverlay.classList.add('open');
            } else {
                alert(nomProduit + " est déjà dans vos favoris !");
            }
        });
    });

    // 4. Gérer l'ouverture et la fermeture du panneau latéral
    wishlistIcon.addEventListener('click', (e) => {
        e.preventDefault();
        afficherWishlist(); // Rafraîchir avant d'ouvrir
        wishlistSidebar.classList.add('open');
        wishlistOverlay.classList.add('open');
    });

    closeWishlistBtn.addEventListener('click', () => {
        wishlistSidebar.classList.remove('open');
        wishlistOverlay.classList.remove('open');
    });

    wishlistOverlay.addEventListener('click', () => {
        wishlistSidebar.classList.remove('open');
        wishlistOverlay.classList.remove('open');
    });

    // Initialiser l'affichage au chargement de la page
    afficherWishlist();
});