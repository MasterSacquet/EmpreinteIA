# 🌱 Empreinte IA - Guide d'Utilisation

## À propos

**Empreinte IA** est un outil interactif qui permet d'estimer l'impact environnemental de votre utilisation quotidienne d'outils d'IA générative (ChatGPT, DALL·E, Claude, etc.).

## Fonctionnalités principales

### 📊 Deux modes d'analyse

1. **Mode Rapide** (2 minutes)
   - Estimation basée sur votre appareil et votre fréquence d'utilisation
   - Parfait pour une première impression

2. **Mode Détaillé**
   - Analyse précise de votre usage par type d'IA
   - Génération de texte, images, vidéos, audio, code
   - Comparaison entre différents modèles

### 💡 Résultats personnalisés

- **Estimation CO₂ mensuelle** en kgCO₂
- **Équivalents pédagogiques** :
  - Km en voiture thermique
  - Vols transatlantiques
  - Arbres nécessaires pour compenser
  - Planètes si tout le monde avait votre impact
- **Recommandations personnalisées** basées sur votre empreinte
- **Classification** : Faible 🌱 | Modéré ⚖️ | Élevé 🔥

## Types d'IA analysés

✅ **Texte** : ChatGPT, Claude, Mistral, Gemini, Deepseek, Grok, Perplexity, Kimi, etc.
✅ **Images** : DALL·E, Midjourney, Stable Diffusion, Adobe Firefly, Leonardo AI, etc.
✅ **Vidéos** : Sora, Runway, Pika, Stable Video Diffusion, Kaiber, etc.
✅ **Audio/Musique** : Suno, ElevenLabs, Udio, PlayHT, Descript, etc.
✅ **Code** : GitHub Copilot, ChatGPT, Claude, Codeium, Cursor, Replit Ghostwriter, etc.

## Variables prises en compte

### Configuration générale
- **Pays** : France, Belgique, Suisse (impact du mix énergétique)
- **Appareil** : Smartphone, Laptop, Desktop, Tablette
- **Fréquence** : Occasionnelle, Régulière, Intensive
- **Type d'utilisateur** : Particulier, Étudiant, Professionnel, Entreprise

### Pour le texte
- Modèle utilisé
- Nombre de requêtes
- Longueur des requêtes
- Longueur des réponses

### Pour les images
- Modèle utilisé
- Nombre d'images
- Résolution (512px → 4K)
- Nombre de tentatives

### Pour la vidéo
- Modèle utilisé
- Durée moyenne
- Résolution (SD → 4K+)

### Pour l'audio
- Modèle utilisé
- Durée moyenne

### Pour le code
- Modèle utilisé
- Type d'usage (suggestions simples → génération complète)
- Temps quotidien d'utilisation

## Comment réduire votre empreinte

### ✅ Actions rapides
- Limiter les tentatives de génération d'images
- Préférer les modèles légers (Mistral, Deepseek)
- Utiliser des résolutions plus faibles (1024px au lieu de 4K)
- Regrouper les requêtes pour en faire moins

### ⚠️ Changements majeurs
- Réduire l'usage de génération de vidéos (très gourmand)
- Passer aux versions gratuites quand possible
- Diminuer la fréquence globale d'utilisation
- Utiliser des outils offline pour le code quand possible

## Facteurs scientifiques

Les calculs sont basés sur :

| Facteur | Valeur |
|---------|--------|
| Intensité carbone France | 0.0196 gCO₂/Wh |
| Intensité carbone Belgique | 0.15 gCO₂/Wh |
| Intensité carbone Suisse | 0.05 gCO₂/Wh |
| Puissance Smartphone | 5 W |
| Puissance Laptop | 50 W |
| Puissance Desktop | 120 W |
| Puissance Tablet | 10 W |

### Équivalents pédagogiques
- 1 km en voiture = ~8.2 gCO₂
- 1 vol Paris ↔ Londres = ~255 gCO₂ par personne
- 1 arbre absorbe ~25 kgCO₂ par an
- Limite durable = ~5 kgCO₂ par an (pour 2 planètes)

## Remarques importantes

⚠️ **Ces résultats sont des estimations** basées sur des données moyennes et des recherches scientifiques. Les vrais impacts peuvent varier selon :
- Les fournisseurs d'IA et leurs datacenters
- Les versions et mises à jour des modèles
- Votre infrastructure réseau
- Les serveurs utilisés

💡 **Utilisation** : Cet outil est à titre informatif et pédagogique. L'objectif est d'augmenter la conscience écologique autour de l'IA.

## Technologies

- **React 19** - UI framework
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **ESLint** - Code linting

## Lancement local

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build pour production
npm run build

# Aperçu de la build production
npm run preview
```

## Licence

À définir selon votre choix.

---

**Contribuez à réduire l'empreinte carbone de l'IA ! 🌍**
