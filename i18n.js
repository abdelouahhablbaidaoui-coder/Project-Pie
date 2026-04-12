// i18n.js - Système de traduction complet pour SwapShop

const translations = {
    fr: {
        flag: "🇫🇷", label: "Français",
        
        // Navigation
        nav_home: "Accueil",
        nav_shop: "Boutique",
        nav_categories: "Catégories",
        nav_deals: "Promos",
        nav_contact: "Contactez-nous",
        nav_login: "Se connecter",
        nav_search_placeholder: "Rechercher...",
        
        // Hero Section (Accueil)
        hero_badge: "Marketplace Stagiaire",
        hero_title: "Achetez et Vendez tout, facilement",
        hero_desc: "Découvrez des milliers de produits uniques de vendeurs vérifiés. Publiez vos articles en quelques minutes et touchez des acheteurs.",
        hero_btn_explore: "Explorer les produits",
        hero_btn_sell: "Commencer à vendre",
        hero_stat_listings: "Annonces",
        hero_stat_sellers: "Vendeurs",
        hero_stat_satisfied: "Satisfaits",

        // Categories Section
        cat_label_explore: "Explorer",
        cat_title: "Acheter par catégorie",
        cat_overlay_explore: "Explorer →",
        cat_name_women: "Vêtements Femme",
        cat_name_beauty: "Beauté & Santé",
        cat_name_electronics: "Électronique",
        cat_name_home: "Maison & Déco",
        cat_name_art: "Art & Artisanat",
        cat_name_games: "Jeux",
        btn_show_more: "Voir plus",

        // Featured Products Section
        featured_title: "Produits en vedette",
        laptops_title: "Ordinateurs Portables",
        all_products_title: "Tous les produits",
        btn_see_all: "Voir tout →",
        text_reviews: "Avis",
        btn_add_to_cart: "Ajouter au panier",
        btn_buy_now: "Acheter",

        // Nom des produits (Exemples)
        prod_mirror: "Miroirs à main décoratifs",
        prod_headband: "Bandeaux perlés",
        prod_watch1: "Montre",
        prod_minibag: "Likely Match",
        prod_polo_sneakers: "Baskets Polo Ralph Lauren",
        prod_ballet_flats: "Ballerines",
        prod_tote_bag: "Sac cabas en cuir marron",
        prod_iphone: "iPhone 15 Pro",
        prod_airpods: "Apple AirPods Max",
        prod_hair_straightener: "Lisseur à cheveux L'ange",
        prod_parfum: "Parfum Intense",
        prod_apple_watch: "Apple Watch",
        prod_sunglasses: "Lunettes de soleil à monture",
        prod_violin: "Violon acoustique",
        prod_chess: "Jeu d'échecs",
        prod_crochet: "Matériel de crochet",
        prod_paintbrush: "Ensembles de pinceaux",
        prod_apron: "Tablier noir",
        prod_ties: "Cravates en soie",
        prod_socks: "Chaussettes Lauren",
        prod_coat: "Manteau court croisé",
        prod_umbrella: "Parapluie",
        prod_pillow: "Coussin de nuque",
        prod_sleepmask: "Masque de sommeil",
        prod_tshirt: "T-Shirt",
        prod_sweater: "Pull-over",
        prod_striped_shirt: "Chemise rayée à manches courtes",
        prod_collectible: "Accessoire de collection",
        prod_wig: "Perruque rose pastel",
        prod_anime_figures: "Figurines Chibi Jujutsu Kaisen",
        prod_hp_pavilion: "HP Pavilion x360 — Portable Convertible 2-en-1 Argent",
        prod_samsung_galaxybook: "Samsung Galaxy Book Pro — Portable Fin Gris",
        prod_gigabyte_aorus: "Portable Gaming Gigabyte Aorus — Noir",
        prod_samsung_odyssey: "Écran Gaming Incurvé Samsung Odyssey Ark 55\"",
        prod_dell_xps: "Dell XPS 15 — Argent & Noir",
        prod_asus_rog: "Écran Gaming ASUS ROG Strix 35\"",
        prod_victus16: "Victus 16 — Portable Gaming Bleu",
        prod_razer_blade: "Razer Blade 15 — Noir Furtif",
        prod_macbook_air_blue: "Apple MacBook Air — Coque Bleu Bébé",
        prod_pixio: "Écran Gaming Pixio PX275C 27\" Rose",
        prod_imac: "Apple iMac 21.5\"",
        prod_hp_stream: "HP Stream 14",
        prod_thinkpad: "Lenovo ThinkPad X1 Carbon",
        prod_ideapad: "Lenovo IdeaPad 330 — 15\" Brun Chocolat",
        prod_vivobook: "ASUS VivoBook 16 — Noir Élégant",
        prod_hp_spectre: "HP Spectre x360 — Noir & Or Rose",
        prod_macbook_pro: "Apple MacBook Pro — Coque Brun Moka",
        prod_acer_aspire: "Acer Aspire 5 — 15.6\" Vert Matcha",
        prod_msi_gl65: "MSI GL65 Leopard — Noir & Rouge",
        prod_toshiba: "Toshiba Satellite — 15.6\" Rouge",
        prod_fujitsu: "Fujitsu LifeBook T935 — 2-en-1 Argent",
        prod_sony_vaio: "Sony VAIO — Rose Brillant",
        prod_nec_versapro: "NEC VersaPro — Noir Mat",
        prod_huawei_matebook: "Huawei MateBook 14 — Vert Menthe",
        prod_xiaomi_mi: "Xiaomi Mi Notebook Air",

        // Newsletter & Features
        news_tag: "Newsletter",
        news_title: "Prêt à recevoir nos<br><span class=\"s5-span\">nouveautés ?</span>",
        news_desc: "Soyez le premier informé des nouvelles annonces, des offres exclusives et des mises à jour du campus.",
        news_placeholder: "Entrez votre adresse email",
        news_btn_subscribe: "S'abonner",
        feat_verified_title: "Vendeurs vérifiés",
        feat_verified_desc: "Chaque vendeur est un vrai étudiant, vérifié sur le campus.",
        feat_fast_title: "Annonces rapides",
        feat_fast_desc: "Publiez votre article en moins de 2 minutes et touchez des acheteurs.",
        feat_community_title: "La communauté d'abord",
        feat_community_desc: "Conçu pour les étudiants, par les étudiants — échangez, achetez et vendez.",

        // Footer
        footer_tagline: "La marketplace étudiante — achetez, vendez et échangez sur le campus.",
        footer_col_marketplace: "Marketplace",
        footer_link_browse: "Parcourir les annonces",
        footer_link_sell: "Vendre un article",
        footer_link_deals: "Promos",
        footer_link_categories: "Catégories",
        footer_col_account: "Compte",
        footer_link_login: "Se connecter",
        footer_link_signup: "S'inscrire",
        footer_link_mylistings: "Mes annonces",
        footer_link_saved: "Articles sauvegardés",
        footer_col_support: "Support",
        footer_link_howitworks: "Comment ça marche",
        footer_link_safety: "Conseils de sécurité",
        footer_link_contact: "Contactez-nous",
        footer_link_faq: "FAQ",
        footer_copyright: "© 2026 SwapShop. Tous droits réservés.",
        footer_link_privacy: "Politique de confidentialité",
        footer_link_terms: "Conditions d'utilisation",
        footer_link_cookies: "Cookies",

        // Wishlist
        wishlist_title: "Mes Favoris",

        // Contact Page
        contact_coords_title: "Nos Coordonnées",
        contact_coords_desc: "Une question, une suggestion ou un problème avec une commande ? N'hésitez pas à nous contacter.",
        contact_campus_title: "Notre Campus",
        contact_campus_desc: "CMC Tanger, Maroc",
        contact_email_title: "Email",
        contact_whatsapp_title: "WhatsApp (Support)",
        contact_form_title: "Envoyez-nous un message",
        contact_placeholder_name: "Votre Nom complet",
        contact_placeholder_email: "Email institutionnel",
        contact_placeholder_subject: "Sujet",
        contact_placeholder_message: "Votre message ici...",
        contact_btn_send: "Envoyer le message",

        // Modal (Mettre en Vente)
        modal_sell_title: "Mettre en vente",
        modal_sell_item_title: "Titre de l'objet",
        modal_sell_placeholder_title: "Ex: Livre de Math, Blouse T-M...",
        modal_sell_category: "Catégorie",
        modal_sell_cat_select: "Sélectionner...",
        modal_sell_cat_books: "Livres",
        modal_sell_cat_tech: "Tech & Informatique",
        modal_sell_cat_clothes: "Vêtements",
        modal_sell_cat_tools: "Outils / Matériel",
        modal_sell_cat_sport: "Sport & Loisirs",
        modal_sell_cat_furniture: "Mobilier",
        modal_sell_cat_other: "Autre",
        modal_sell_price: "Prix (DH)",
        modal_sell_condition: "État",
        modal_sell_cond_new: "Neuf",
        modal_sell_cond_good: "Bon",
        modal_sell_cond_used: "Usé",
        modal_sell_photo_label: "Photo du produit",
        modal_sell_photo_choose: "Choisir une photo",
        modal_sell_photo_or: "ou glisser ici",
        modal_sell_wa_label: "Ton WhatsApp",
        modal_sell_wa_hint: "Les acheteurs te contacteront directement ici.",
        modal_sell_btn_publish: "Publier l'annonce",

        // Panier
        cart_header_title: "Mon Panier",
        cart_breadcrumb: "Accueil / Panier",
        cart_th_product: "Produit",
        cart_th_price: "Prix",
        cart_th_quantity: "Quantité",
        cart_th_subtotal: "Sous-total",
        cart_btn_clear: "Vider le panier",
        cart_summary_title: "Résumé de la commande",
        cart_summary_items: "Articles",
        cart_summary_fee: "Frais de gestion CMC",
        cart_summary_total: "Total",
        cart_btn_checkout: "Valider la commande",

        // Auth Page
        auth_signup_title: "Créer un compte",
        auth_signup_subtitle: "Rejoins la marketplace des stagiaires",
        auth_ph_name: "Nom complet",
        auth_ph_major: "Filière (ex: Dev Digital)",
        auth_ph_email_inst: "Email institutionnel",
        auth_ph_password: "Mot de passe",
        auth_btn_signup: "S'inscrire",
        auth_login_title: "Se Connecter",
        auth_login_subtitle: "Gère tes ventes et tes commandes",
        auth_ph_email: "Email",
        auth_forgot_pass: "Mot de passe oublié ?",
        auth_btn_login: "Se connecter",
        auth_overlay_login_title: "Déjà inscrit ?",
        auth_overlay_login_desc: "Connecte-toi pour suivre tes commandes ou publier de nouveaux articles.",
        auth_overlay_signup_title: "C'est le moment d'exposer ton talent !",
        auth_overlay_signup_desc: "Inscris-toi pour commencer à vendre tes créations au sein de l'établissement.",
        auth_modal_recov_title: "Récupération",
        auth_modal_recov_desc: "Entre ton email institutionnel pour recevoir un lien de réinitialisation.",
        auth_modal_ph_email: "Ton email...",
        auth_modal_btn_send: "Envoyer le lien"
    },
    en: {
        flag: "🇬🇧", label: "English",
        
        // Navigation
        nav_home: "Home",
        nav_shop: "Shop",
        nav_categories: "Categories",
        nav_deals: "Deals",
        nav_contact: "Contact us",
        nav_login: "Log in",
        nav_search_placeholder: "Search...",
        
        // Hero Section
        hero_badge: "Trainee marketplace",
        hero_title: "Buy & Sell anything, effortlessly",
        hero_desc: "Discover thousands of unique products from verified sellers. List your items in minutes and reach buyers.",
        hero_btn_explore: "Explore products",
        hero_btn_sell: "Start selling",
        hero_stat_listings: "Listings",
        hero_stat_sellers: "Sellers",
        hero_stat_satisfied: "Satisfied",

        // Categories Section
        cat_label_explore: "Explore",
        cat_title: "Shop by category",
        cat_overlay_explore: "Explore →",
        cat_name_women: "Women's Clothing",
        cat_name_beauty: "Beauty & Health",
        cat_name_electronics: "Electronics",
        cat_name_home: "Home & Living",
        cat_name_art: "Art & Craft",
        cat_name_games: "Games",
        btn_show_more: "Show more",

        // Featured Products Section
        featured_title: "Featured products",
        laptops_title: "Laptops",
        all_products_title: "All products",
        btn_see_all: "See all →",
        text_reviews: "Reviews",
        btn_add_to_cart: "Add to cart",
        btn_buy_now: "Buy now",

        // Nom des produits
        prod_mirror: "Decorative Hand Mirrors",
        prod_headband: "Pearl Headbands",
        prod_watch1: "Watch",
        prod_minibag: "Likely Match",
        prod_polo_sneakers: "Polo Ralph Lauren Sneakers",
        prod_ballet_flats: "Ballet flats",
        prod_tote_bag: "Brown leather tote bag",
        prod_iphone: "iPhone 15 Pro",
        prod_airpods: "Apple AirPods Max",
        prod_hair_straightener: "L'ange Hair Straightener",
        prod_parfum: "Parfum Intense",
        prod_apple_watch: "Apple Watch",
        prod_sunglasses: "Frame sunglasses",
        prod_violin: "Acoustic violin",
        prod_chess: "Chess Set",
        prod_crochet: "Crochet Materials",
        prod_paintbrush: "Paintbrush sets",
        prod_apron: "Black apron",
        prod_ties: "Silk ties",
        prod_socks: "Lauren Socks",
        prod_coat: "Breasted Short Coat",
        prod_umbrella: "Umbrella",
        prod_pillow: "Neck Pillow",
        prod_sleepmask: "Sleep mask",
        prod_tshirt: "T-Shirt",
        prod_sweater: "Sweater",
        prod_striped_shirt: "Striped Short-Sleeve",
        prod_collectible: "Collectible accessory",
        prod_wig: "Pastel pink wig",
        prod_anime_figures: "Jujutsu Kaisen Chibi Figures",
        prod_hp_pavilion: "HP Pavilion x360 — 2-in-1 Convertible Laptop Silver",
        prod_samsung_galaxybook: "Samsung Galaxy Book Pro — Slim Laptop Gray",
        prod_gigabyte_aorus: "Gigabyte Aorus Gaming Laptop — Black with RGB Vents",
        prod_samsung_odyssey: "Samsung Odyssey Ark — 55\" Curved Gaming Monitor",
        prod_dell_xps: "Dell XPS 15 — Silver & Black 2 Colors Available",
        prod_asus_rog: "ASUS ROG Strix — 35\" Curved Ultrawide Gaming Monitor",
        prod_victus16: "Victus 16 — Gaming Laptop Blue",
        prod_razer_blade: "Razer Blade 15 — Stealth Black Gaming Laptop",
        prod_macbook_air_blue: "Apple MacBook Air — With Baby Blue Hard Shell Case",
        prod_pixio: "Pixio PX275C — 27\" Pink Gaming Monitor",
        prod_imac: "Apple iMac 21.5\"",
        prod_hp_stream: "HP Stream 14 — Pink Laptop with USB Drive",
        prod_thinkpad: "Lenovo ThinkPad X1 Carbon — Slim Black Business Laptop",
        prod_ideapad: "Lenovo IdeaPad 330 — 15\" Chocolate Brown Laptop",
        prod_vivobook: "ASUS VivoBook 16 — Sleek Black Laptop for Work & Study",
        prod_hp_spectre: "HP Spectre x360 — Black & Rose Gold Convertible Laptop",
        prod_macbook_pro: "Apple MacBook Pro — With Mocha Brown Hard Shell Case",
        prod_acer_aspire: "Acer Aspire 5 — 15.6\" Matcha Green Laptop",
        prod_msi_gl65: "MSI GL65 Leopard — Black & Red Gaming Laptop",
        prod_toshiba: "Toshiba Satellite — 15.6\" Red Laptop",
        prod_fujitsu: "Fujitsu LifeBook T935 — 2-in-1 Convertible Laptop Silver",
        prod_sony_vaio: "Sony VAIO — Glossy Pink Laptop",
        prod_nec_versapro: "NEC VersaPro — Matte Black Business Laptop",
        prod_huawei_matebook: "Huawei MateBook 14 — Mint Green Slim Laptop",
        prod_xiaomi_mi: "Xiaomi Mi Notebook Air",

        // Newsletter & Features
        news_tag: "Newsletter",
        news_title: "Ready to get<br><span class=\"s5-span\">our new stuff?</span>",
        news_desc: "Be the first to know about new listings, exclusive deals, and campus updates.",
        news_placeholder: "Enter your email address",
        news_btn_subscribe: "Subscribe",
        feat_verified_title: "Verified sellers",
        feat_verified_desc: "Every seller is a real student, verified on campus.",
        feat_fast_title: "Fast listings",
        feat_fast_desc: "Post your item in under 2 minutes and reach buyers.",
        feat_community_title: "Community first",
        feat_community_desc: "Built for students, by students — swap, buy & sell.",

        // Footer
        footer_tagline: "The student marketplace — buy, sell & swap on campus.",
        footer_col_marketplace: "Marketplace",
        footer_link_browse: "Browse listings",
        footer_link_sell: "Sell an item",
        footer_link_deals: "Deals",
        footer_link_categories: "Categories",
        footer_col_account: "Account",
        footer_link_login: "Log in",
        footer_link_signup: "Sign up",
        footer_link_mylistings: "My listings",
        footer_link_saved: "Saved items",
        footer_col_support: "Support",
        footer_link_howitworks: "How it works",
        footer_link_safety: "Safety tips",
        footer_link_contact: "Contact us",
        footer_link_faq: "FAQ",
        footer_copyright: "© 2026 SwapShop. All rights reserved.",
        footer_link_privacy: "Privacy Policy",
        footer_link_terms: "Terms of Use",
        footer_link_cookies: "Cookies",

        // Wishlist
        wishlist_title: "My Wishlist",

        // Contact Page
        contact_coords_title: "Our Contact Info",
        contact_coords_desc: "Have a question, a suggestion, or an issue with an order? Don't hesitate to contact us.",
        contact_campus_title: "Our Campus",
        contact_campus_desc: "CMC Tangier, Morocco",
        contact_email_title: "Email",
        contact_whatsapp_title: "WhatsApp (Support)",
        contact_form_title: "Send us a message",
        contact_placeholder_name: "Your Full Name",
        contact_placeholder_email: "Institutional Email",
        contact_placeholder_subject: "Subject",
        contact_placeholder_message: "Your message here...",
        contact_btn_send: "Send message",

        // Modal (Mettre en Vente)
        modal_sell_title: "List an item",
        modal_sell_item_title: "Item title",
        modal_sell_placeholder_title: "Ex: Math Book, M-Size Coat...",
        modal_sell_category: "Category",
        modal_sell_cat_select: "Select...",
        modal_sell_cat_books: "Books",
        modal_sell_cat_tech: "Tech & IT",
        modal_sell_cat_clothes: "Clothing",
        modal_sell_cat_tools: "Tools / Equipment",
        modal_sell_cat_sport: "Sport & Leisure",
        modal_sell_cat_furniture: "Furniture",
        modal_sell_cat_other: "Other",
        modal_sell_price: "Price (DH)",
        modal_sell_condition: "Condition",
        modal_sell_cond_new: "New",
        modal_sell_cond_good: "Good",
        modal_sell_cond_used: "Used",
        modal_sell_photo_label: "Product photo",
        modal_sell_photo_choose: "Choose a photo",
        modal_sell_photo_or: "or drag here",
        modal_sell_wa_label: "Your WhatsApp",
        modal_sell_wa_hint: "Buyers will contact you directly here.",
        modal_sell_btn_publish: "Publish listing",

        // Panier
        cart_header_title: "My Cart",
        cart_breadcrumb: "Home / Cart",
        cart_th_product: "Product",
        cart_th_price: "Price",
        cart_th_quantity: "Quantity",
        cart_th_subtotal: "Subtotal",
        cart_btn_clear: "Clear cart",
        cart_summary_title: "Order Summary",
        cart_summary_items: "Items",
        cart_summary_fee: "CMC Handling Fee",
        cart_summary_total: "Total",
        cart_btn_checkout: "Proceed to checkout",

        // Auth Page
        auth_signup_title: "Create an account",
        auth_signup_subtitle: "Join the trainee marketplace",
        auth_ph_name: "Full Name",
        auth_ph_major: "Major (e.g., Digital Dev)",
        auth_ph_email_inst: "Institutional Email",
        auth_ph_password: "Password",
        auth_btn_signup: "Sign Up",
        auth_login_title: "Sign In",
        auth_login_subtitle: "Manage your sales and orders",
        auth_ph_email: "Email",
        auth_forgot_pass: "Forgot password?",
        auth_btn_login: "Sign In",
        auth_overlay_login_title: "Already registered?",
        auth_overlay_login_desc: "Log in to track your orders or list new items.",
        auth_overlay_signup_title: "Time to showcase your talent!",
        auth_overlay_signup_desc: "Sign up to start selling your creations on campus.",
        auth_modal_recov_title: "Recovery",
        auth_modal_recov_desc: "Enter your institutional email to receive a reset link.",
        auth_modal_ph_email: "Your email...",
        auth_modal_btn_send: "Send link"
    }
};

// --- NE TOUCHE PAS AU DICTIONNAIRE AU-DESSUS ---

// 1. Fonction pour mettre à jour les textes sur la page
function updateContent(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        // SÉCURITÉ : On vérifie que le mot existe dans le dico pour ne pas faire bugger le site
        if (translations[lang] && translations[lang][key]) {
            if(translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // On sauvegarde le choix
    localStorage.setItem('cmcLanguage', lang);
}

// 2. Fonction pour mettre à jour l'apparence du bouton (Affiche l'AUTRE langue)
function updateButtonUI(currentLang) {
    const flagEl = document.getElementById("flag");
    const textEl = document.getElementById("langText");
    
    if (!flagEl || !textEl) return; // Sécurité si le bouton n'est pas sur la page

    if (currentLang === 'fr') {
        // Si le site est en Français, le bouton te propose de passer en Anglais
        flagEl.textContent = "🇬🇧";
        textEl.textContent = "English";
    } else {
        // Si le site est en Anglais, le bouton te propose de passer en Français
        flagEl.textContent = "🇫🇷";
        textEl.textContent = "Français";
    }
}

// 3. Fonction déclenchée quand tu cliques sur le bouton
window.toggleLang = function() {
    // On regarde la langue actuelle (par défaut Anglais)
    const currentLang = localStorage.getItem('cmcLanguage') || 'en';
    // On inverse : si c'était FR on passe à EN, sinon on passe à FR
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    
    // On applique les changements !
    updateContent(newLang);
    updateButtonUI(newLang);
};

// 4. Ce qui se passe au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // On récupère la dernière langue choisie par l'utilisateur
    const savedLang = localStorage.getItem('cmcLanguage') || 'en';
    
    // On traduit la page et on met à jour le bouton
    updateContent(savedLang);
    updateButtonUI(savedLang);
});