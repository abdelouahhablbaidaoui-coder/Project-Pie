// --- 1. Gestion des animations des panneaux ---
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => container.classList.add("right-panel-active"));
signInButton.addEventListener('click', () => container.classList.remove("right-panel-active"));

// --- 2. Fonction pour afficher l'Alerte Décorée ---
function showAlert(message, type) {
    const alertBox = document.getElementById('customAlert');
    const alertMsg = document.getElementById('alertMessage');
    
    alertMsg.textContent = message;
    alertBox.className = `custom-alert ${type}`; 
    
    setTimeout(() => { alertBox.classList.add('hidden'); }, 3000);
}

// --- 3. Logique d'Inscription (Sign Up) ---
const formSignUp = document.getElementById('formSignUp');
formSignUp.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const user = {
        nom: document.getElementById('reg-name').value,
        filiere: document.getElementById('reg-filiere').value,
        email: document.getElementById('reg-email').value,
        motDePasse: document.getElementById('reg-pass').value
    };

    let usersList = JSON.parse(localStorage.getItem('cmcUsers')) || [];

    if (usersList.find(u => u.email === user.email)) {
        showAlert("Cet email est déjà utilisé !", "error");
        return;
    }

    usersList.push(user);
    localStorage.setItem('cmcUsers', JSON.stringify(usersList));

    showAlert("Inscription réussie ! Connecte-toi.", "success");
    formSignUp.reset(); 
    container.classList.remove("right-panel-active"); 
});

// --- 4. Logique de Connexion (Sign In) ---
const formSignIn = document.getElementById('formSignIn');
formSignIn.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailTape = document.getElementById('log-email').value;
    const passTape = document.getElementById('log-pass').value;

    let usersList = JSON.parse(localStorage.getItem('cmcUsers')) || [];
    const userTrouve = usersList.find(u => u.email === emailTape && u.motDePasse === passTape);

    if (userTrouve) {
        showAlert(`Bienvenue ${userTrouve.nom} !`, "success");
        setTimeout(() => {
            window.location.href = "./index.html"; // Redirection vers l'accueil
        }, 1500);
    } else {
        showAlert("Email ou mot de passe incorrect.", "error");
    }
});

// --- 5. NOUVEAU : Logique de la Modale Mot de Passe Oublié ---
const openModalBtn = document.getElementById('openForgotModal');
const closeModalBtn = document.getElementById('closeModal');
const modal = document.getElementById('forgotPasswordModal');
const sendRecoveryBtn = document.getElementById('sendRecoveryBtn');

// Ouvrir la fenêtre au clic sur le lien
openModalBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le lien de recharger la page
    modal.classList.remove('hidden');
});

// Fermer la fenêtre au clic sur la croix
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Fermer si on clique dans le vide à l'extérieur de la boîte
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

// Simuler l'envoi du mail de récupération
sendRecoveryBtn.addEventListener('click', () => {
    const emailToRecover = document.getElementById('recovery-email').value;
    let usersList = JSON.parse(localStorage.getItem('cmcUsers')) || [];
    
    if(emailToRecover === "") {
        showAlert("Veuillez entrer une adresse email.", "error");
        return;
    }

    // Vérifier si l'utilisateur existe dans le JSON du localStorage
    const userExists = usersList.find(u => u.email === emailToRecover);

    if (userExists) {
        showAlert("Un lien a été envoyé sur ta boîte mail CMC !", "success");
        modal.classList.add('hidden');
        document.getElementById('recovery-email').value = ""; // On vide le champ
    } else {
        showAlert("Cet email n'est pas inscrit sur la plateforme.", "error");
    }
});