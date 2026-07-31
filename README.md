# CRM Interne
CRM Interne est une application web simple et claire conçue pour gérer efficacement les demandes clients, suivre leur statut et conserver des notes internes, le tout de manière sécurisée et organisée.

L’objectif du projet est de créer un outil interne fonctionnel et facile à utiliser, sans surcharge de fonctionnalités inutiles.

## Fonctionnalités
- Créer, mettre à jour et supprimer des demandes clients
- Suivi des demandes par statut : Nouveau, En cours, Terminé, Refusé
- Ajouter des notes internes avec un éditeur de texte enrichi
- Tableau de bord affichant le nombre de demandes par statut
- Authentification sécurisée et gestion du mot de passe
- Interface responsive pour desktop et mobile
- Notifications d’erreur et de succès via des toasts

## Stack technique
### Frontend

- React (Vite)
- JavaScript
- Tailwind CSS (UI et responsive)
- React Quill (éditeur de notes)

### Backend / Base de données

- Node.js & Express
- MongoDB

### Outils

- Git & GitHub
- Vercel (déploiement frontend)
- Render (déploiement backend)

## Démarrage du projet
### Prérequis

- Nodejs
- npm ou yarn

### Installation
1. Cloner le projet :
```bash
git clone https://github.com/Hene-W/CRM-Interne.git
```

2. Installer les dépendances pour le backend et le frontend :
```bash
cd backend
npm install
cd ../frontend
npm install
```

3. Créer les fichiers `.env` et ajouter les variables d’environnement nécessaires
#### Backend (`backend/.env`) :
```env
PORT=5000
MONGO_URI=ton_mongodb_uri
JWT_SECRET=ton_jwt_secret
```

#### Frontend (`frontend/.env`) :
```env
VITE_API_URL=http://localhost:5000/api
```

4. Lancer les serveurs de développement

#### Backend :
```bash
cd backend
npm run dev
```

#### Frontend :
```bash
cd frontend
npm run dev
```

## Déploiement
- Backend : Render
- Frontend : Vercel


## Limitations actuelles
- Authentification pour un seul utilisateur (pas de multi-utilisateurs)
- Outil interne uniquement, non accessible au public
- Pas de modification de l’email, uniquement le mot de passe

## Améliorations futures
- Support multi-utilisateurs avec rôles et permissions
- Filtrage et recherche avancée pour les demandes
- Notifications par email ou Slack
- Amélioration de l’UI/UX et mode sombre


## Mon rôle
J’ai développé l’intégralité du projet, du frontend React.js au backend Node.js/Express (CRUD, auth basique), et intégré toutes les fonctionnalités et interfaces.
