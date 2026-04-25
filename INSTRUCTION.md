# 🌱 Application : Empreinte carbone de l’IA générative

- Application de calcul d’empreinte carbone liée à l’utilisation quotidienne de l’IA générative :
  - génération de texte
  - génération d’images
  - génération de son
- Questionnaire grand public menant à un résultat :
  - compréhensible
  - pédagogique (ex : équivalent en nombre de planètes)
- À la fin :
  - recommandations personnalisées pour réduire son empreinte

---

# 🧭 Questionnaire

## Début
**Estimer votre empreinte carbone liée à l’IA ?**

---

## 1. Choix du mode
- Rapide
- Détaillé

---

# ⚡ Analyse rapide

## 2. Profil utilisateur
- Pays d’utilisation
- Type d’utilisateur
  - Particulier
  - Étudiant
  - Professionnel
    - Secteur d’activité
  - Entreprise
    - Taille de l’organisation
    - Secteur d’activité

---

## 4. Types d’IA utilisés (multi-choix)

### Texte (chatbot)
- Modèle utilisé (ChatGPT, Claude, Mistral, Gemini)
- Outil utilisé
- Nombre de requêtes par session
- Longueur des requêtes
  - Courtes (1 phrase)
  - Moyennes (paragraphe)
  - Longues (documents)
- Type de réponses
  - Courtes
  - Longues
  - Analyse de documents

### Génération d’images
- Modèle utilisé
- Nombre d’images par session
- Résolution
  - Faible
  - Moyenne
  - Élevée
- Nombre de tentatives

### Génération vidéo
- Modèle utilisé
- Durée moyenne
- Résolution

### Audio / musique
- Modèle utilisé
- Durée moyenne

### Code
- Modèle utilisé
- Type d’usage
  - Suggestions simples
  - Génération complète
- Temps d’utilisation

---

## 5. Niveau d’utilisation de l’IA
- Version utilisée
  - Gratuite
  - Payante / avancée
- Intensité d’usage
  - Occasionnelle
  - Régulière
  - Intensive

---

# 🔬 Analyse détaillée

## 2. Profil utilisateur
- Pays d’utilisation
- Type d’utilisateur
  - Particulier
  - Étudiant
  - Professionnel
    - Secteur d’activité
  - Entreprise
    - Taille de l’organisation
    - Secteur d’activité

---

## 3. Appareil et usage
- Appareil principal
  - Smartphone
  - Ordinateur portable
  - Ordinateur fixe
  - Tablette
- Temps moyen par session
- Fréquence d’utilisation
  - Quotidienne
  - Hebdomadaire
  - Occasionnelle

---

## 4. Types d’IA utilisés (multi-choix)

### Texte (chatbot)
- Modèle utilisé
- Plan (Free, Go, Pro, Business…)
- Outil utilisé
- Nombre de requêtes par session
- Longueur des requêtes
  - Courtes
  - Moyennes
  - Longues
- Type de réponses
  - Courtes
  - Longues
  - Analyse de documents
- Fréquence d’utilisation

---

### Génération d’images
- Modèle utilisé
- Plan
- Nombre d’images par session
- Résolution
  - Faible
  - Moyenne
  - Élevée
- Nombre de tentatives
- Fréquence d’utilisation

---

### Génération vidéo
- Modèle utilisé
- Plan
- Durée moyenne
- Résolution
- Fréquence d’utilisation (par semaine)

---

### Audio / musique
- Modèle utilisé
- Plan
- Durée moyenne
- Fréquence d’utilisation

---

### Code
- Modèle utilisé
- Plan
- Type d’usage
  - Suggestions simples
  - Génération complète
- Temps d’utilisation
- Fréquence d’utilisation

---

## 6. Connexion réseau
- Type de connexion
  - Wi-Fi
  - 4G / 5G
- Temps de connexion pendant usage

---

# 🧮 Calcul

Le modèle combine :
- Énergie terminal (Wh)
- Énergie réseau
- Énergie data center
- Type de modèle IA (proxy via usage)
- Mix électrique du pays

## Concepts clés
- Analyse du cycle de vie (ACV)
- Empreinte carbone

---

## 🌍 Empreinte carbone

CO2e = (Eterminal + Ereseau + Edata) × CI

### Variables :
- Eterminal : énergie du device utilisateur (partie 3)
- Ereseau : énergie du transport de données (partie 6)
- Edata : énergie des serveurs IA (partie 4)
- CI : intensité carbone (kgCO₂e/kWh, dépend du pays)

### Détail des calculs

Eterminal = Pdevice × tusage  
- Smartphone ≈ 2–6 W  
- Laptop ≈ 30–70 W  

Ereseau = Data × EIreseau  
- EIreseau ≈ 0.05 à 0.2 kWh/Go  

Edata = Nreq × Epar_requete  

Pour le texte :  
- 0.001 – 0.1 kWh / requête  

Pour les images :  
Eimage = Nimages × Epar_image  
- ≈ 0.01 – 0.05 kWh / image  

Pour la vidéo :  
Evideo = duree × facteur_modele  

### Intensité carbone
- France : ~0.05 kgCO₂e/kWh  
- Europe : ~0.2–0.4  
- Monde : ~0.5+  

---

# 💧 Empreinte eau

Eau = Énergie × WI  

- WI = intensité hydrique (L/kWh)  
- Ordres de grandeur : 1 à 10 L/kWh  

---

# 📊 Résultats

## 7. Résultats affichés
- Empreinte carbone totale (CO₂e)
- Consommation d’eau totale

### Répartition
- Serveurs IA
- Réseau
- Appareil

### Équivalents concrets
- km en voiture
- charges de smartphone
- g / kg de viande rouge consommée
- nombre de piscines
- nombre de douches

### Recommandations
- Conseils personnalisés pour réduire l’empreinte

---

# 📁 Données
(A compléter)