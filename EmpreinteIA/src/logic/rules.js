export const rules = {
  devicePower: {
    Smartphone: 5,
    "Ordinateur portable": 50,
    "Ordinateur fixe": 120,
    Tablette: 10,
  },

  frequencyFactor: {
    "Occasionnelle (quelques fois/mois)": 0.5,
    "Régulière (quelques fois/semaine)": 2,
    "Intensive (quotidienne)": 4,
  },

  carbonIntensity: {
    France: 0.0196,
    Belgique: 0.15,
    Suisse: 0.05,
  },

  // AI-specific power consumption (Wh per request)
  aiPower: {
    text: {
      "ChatGPT": 0.003,
      "Claude": 0.004,
      "Mistral": 0.002,
      "Gemini": 0.003,
      "Deepseek": 0.002,
      "Grok": 0.003,
      "Perplexity": 0.003,
      "Kimi": 0.003,
      "Euria": 0.003,
      "Lumo": 0.003,
      "Autre": 0.003,
    },
    image: {
      "DALL·E (ChatGPT)": 0.05,
      "Midjourney": 0.08,
      "Stable Diffusion": 0.04,
      "Adobe Firefly": 0.06,
      "Leonardo AI": 0.05,
      "Playground AI": 0.045,
      "Gemini (image)": 0.06,
      "Grok (image)": 0.07,
      "Autre": 0.05,
    },
    video: {
      "Sora (OpenAI)": 0.5,
      "Runway (Gen-2/Gen-3)": 0.4,
      "Pika": 0.35,
      "Stable Video Diffusion": 0.3,
      "Kaiber": 0.45,
      "Autre": 0.4,
    },
    audio: {
      "Suno": 0.08,
      "ElevenLabs": 0.015,
      "Udio": 0.06,
      "PlayHT": 0.02,
      "Descript": 0.03,
      "Autre": 0.03,
    },
    code: {
      "GitHub Copilot": 0.001,
      "ChatGPT": 0.002,
      "Claude": 0.002,
      "Codeium": 0.0015,
      "Cursor": 0.0015,
      "Replit Ghostwriter": 0.0015,
      "Autre": 0.0015,
    },
  },

  // Multipliers for request intensity
  textRequestFactor: {
    "1–5": 0.2,
    "5–20": 0.5,
    "20–50": 1,
    "50+": 2,
  },

  textLengthFactor: {
    "Courtes (1 phrase)": 0.5,
    "Moyennes (paragraphe)": 1,
    "Longues (documents)": 2,
  },

  textResponseFactor: {
    "Courtes": 0.5,
    "Longues": 1.5,
    "Analyse de documents": 2,
  },

  imageCountFactor: {
    "1–2": 0.3,
    "3–10": 1,
    "10–30": 2.5,
    "30+": 5,
  },

  imageResolutionFactor: {
    "Faible (512px)": 1,
    "Moyenne (1024px)": 1.5,
    "Élevée (HD/4K)": 3,
  },

  imageTriesFactor: {
    "1": 1,
    "2–5": 2,
    "5–10": 4,
    "10+": 8,
  },

  videoDurationFactor: {
    "< 10 sec": 0.3,
    "10–30 sec": 1,
    "30–60 sec": 2,
    "> 1 min": 4,
  },

  videoResolutionFactor: {
    "SD": 1,
    "HD": 2,
    "4K+": 4,
  },

  audioDurationFactor: {
    "< 30 sec": 0.5,
    "30 sec – 2 min": 1,
    "2–5 min": 1.5,
    "> 5 min": 2.5,
  },

  codePowerFactor: {
    "Suggestions simples": 0.3,
    "Génération complète": 1,
    "Debug / correction": 0.5,
  },

  codeTimeFactor: {
    "< 30 min": 0.3,
    "30 min – 2 h": 1,
    "2–5 h": 2,
    "5 h+": 4,
  },

  userTypeFactor: {
    "Particulier": 1,
    "Étudiant": 0.8,
    "Professionnel": 1.2,
    "Entreprise": 1.5,
  },

  professionalSubTypeFactor: {
    "Tech / IT": 1.3,
    "Marketing / Communication": 1.1,
    "Finance / Conseil": 1.2,
    "Éducation / Recherche": 1.0,
    "Industrie / Ingénierie": 1.2,
    "Autre": 1.0,
  },

  enterpriseSizeFactor: {
    "Petite (< 50 employés)": 1.0,
    "Moyenne (50–250)": 1.3,
    "Grande (> 250)": 1.6,
  },

  enterpriseSectorFactor: {
    "Tech": 1.4,
    "Industrie": 1.2,
    "Services": 1.0,
    "Autre": 1.1,
  },

  networkTypeFactor: {
    "Wi-Fi": 1.0,
    "Données mobiles (4G)": 1.2,
    "Données mobiles (5G)": 1.1,
  },

  versionFactor: {
    "Gratuite": 1,
    "Payante (Pro)": 1.1,
    "Entreprise": 1.3,
  },

  // Recommendations based on carbon footprint
  recommendations: {
    low: [
      "✅ Vous avez une faible empreinte carbone !",
      "💡 Continuez vos bonnes pratiques",
      "🌍 Vos gestes ont un impact positif sur la planète"
    ],
    moderate: [
      "⚖️ Votre empreinte est modérée",
      "💡 Voici quelques suggestions pour l'améliorer :",
      "• Limitez le nombre de tentatives pour la génération d'images",
      "• Préférez les modèles plus légers (Mistral, Deepseek)",
      "• Fusionnez vos requêtes pour en faire moins",
      "• Évitez la génération de vidéos haute résolution",
      "• Utilisez les versions gratuites quand c'est possible"
    ],
    high: [
      "🔥 Votre empreinte carbone est élevée",
      "🌱 Changements recommandés :",
      "• Réduisez drastiquement l'usage de génération d'images et vidéos",
      "• Passez à des modèles plus efficaces (Deepseek, Mistral, Codeium)",
      "• Limitez les résolutions élevées (préférez HD au lieu de 4K)",
      "• Diminuez la fréquence d'utilisation",
      "• Considérez l'utilisation offline pour les tâches de code",
      "• Regroupez vos requêtes pour les traiter en une seule"
    ]
  },

  // Pedagogical equivalents
  equivalents: {
    "km_car_100km": 8.2, // gCO2 par km en voiture
    "flight_paris_london": 255, // gCO2 par personne
    "tree_co2_per_year": 25000, // gCO2 par an qu'un arbre absorbe
    "planet_fair_share": 5000, // gCO2 par an pour être durable (limite 2 planètes)
  }
};