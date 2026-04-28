export const rules = {
  // ========== DEVICE POWER CONSUMPTION (W) ==========
  devicePower: {
    Smartphone: 2,
    "Ordinateur portable": 35,
    "Ordinateur fixe": 200,
    Tablette: 4,
  },

  // ========== CARBON INTENSITY (kgCO2e/kWh) ==========
  // Sources: RTE France (2025), SFOE Switzerland, Belgaqua Belgium
  carbonIntensity: {
    France: 0.0196,      // 19.6 gCO2e/kWh
    Belgique: 0.174,     // 174 gCO2e/kWh
    Suisse: 0.033,       // 33 gCO2e/kWh
  },

  // ========== WATER INTENSITY (L/kWh) ==========
  // Sources: INSTRUCTIONPROMPT.md - Intensité hydrique
  waterIntensity: {
    France: 0.87,        // 0.87 L/kWh (https://hal.science/hal-04698568v1/file/De_l_eau_dans_les_nuages.pdf)
  },

  // ========== FREQUENCY FACTORS (days per month) ==========
  // Used for calculating monthly energy from daily estimates
  frequencyFactorMonthly: {
    "Occasionnelle (quelques fois/mois)": 7,
    "Régulière (quelques fois/semaine)": 15,
    "Intensive (quotidienne)": 30,
  },

  // ========== VERSION FACTORS ==========
  // Impacts energy consumption based on plan tier
  versionFactor: {
    "Gratuite": 1,
    "Payante (Pro)": 3,
    "Entreprise": 6,
  },

  // ========== AI ENERGY PER REQUEST (Wh) ==========
  // Based on INSTRUCTIONPROMPT.md data table - mean values from ranges
  aiEnergyPerRequest: {
    text: {
      "ChatGPT": 0.35,        // Moyenne pour longueur moyenne: (0.3+0.4)/2 = 0.35 Wh
      "Claude": 0.30,         // Moyenne pour longueur moyenne: (0.2+0.4)/2 = 0.30 Wh
      "Mistral": 0.15,        // Moyenne: (0.01+0.05)/2 + (0.1+0.3)/2 + (0.5+2)/2 = ~0.15
      "Gemini": 0.20,         // Moyenne: (0.02+0.06)/2 + 0.24 + (1+2)/2 = ~0.20
      "Deepseek": 0.45,       // Moyenne: (0.03+0.1)/2 + (0.3+0.6)/2 + (2+5)/2 = ~0.45
      "Grok": 0.40,           // Moyenne: (0.03+0.1)/2 + (0.3+0.6)/2 + (2+4)/2 = ~0.40
      "Perplexity": 0.60,     // Moyenne: (0.05+0.15)/2 + (0.4+1)/2 + (2+5)/2 = ~0.60
      "Kimi": 0.30,           // Moyenne: (0.02+0.08)/2 + (0.1+0.4)/2 + (1+3)/2 = ~0.30
      "Euria": 0.35,          // Moyenne: (0.02+0.1)/2 + (0.2+0.5)/2 + (1+3)/2 = ~0.35
      "Lumo": 0.35,           // Moyenne: (0.02+0.1)/2 + (0.2+0.5)/2 + (1+3)/2 = ~0.35
      "Autre": 0.30,
    },
    image: {
      "DALL·E (ChatGPT)": 3.0,      // Moyenne: (1+5)/2 = 3 Wh
      "Midjourney": 4.0,             // Moyenne: (2+6)/2 = 4 Wh
      "Stable Diffusion": 1.25,      // Moyenne: (0.5+2)/2 = 1.25 Wh
      "Adobe Firefly": 2.5,          // Moyenne: (1+4)/2 = 2.5 Wh
      "Leonardo AI": 2.5,            // Moyenne: (1+4)/2 = 2.5 Wh
      "Playground AI": 1.25,         // Moyenne: (0.5+2)/2 = 1.25 Wh
      "Gemini (image)": 2.5,         // Moyenne: (1+4)/2 = 2.5 Wh
      "Grok (image)": 3.0,           // Moyenne: (1+5)/2 = 3 Wh
      "Autre": 2.5,
    },
    video: {
      "Sora (OpenAI)": 50,           // Estimation moyenne pour durée standard
      "Runway (Gen-2 / Gen-3)": 40,  // Moyenne: (20+60)/2 = 40 Wh pour 5-10s HD
      "Pika": 40,                    // Moyenne: (20+60)/2 = 40 Wh pour 5-10s HD
      "Stable Video Diffusion": 27.5, // Moyenne: (15+40)/2 = 27.5 Wh pour 5-10s HD
      "Kaiber": 55,                  // Moyenne: (30+80)/2 = 55 Wh pour 5-10s HD
      "Autre": 40,
    },
    audio: {
      "Suno": 2.0,                   // Moyenne: (1+3)/2 = 2 Wh (pour ~30sec)
      "ElevenLabs": 0.65,            // Moyenne: (0.3+1)/2 = 0.65 Wh (pour ~30sec)
      "Udio": 2.0,                   // Moyenne: (1+3)/2 = 2 Wh (pour ~30sec)
      "PlayHT": 0.65,                // Moyenne: (0.3+1)/2 = 0.65 Wh (pour ~30sec)
      "Descript": 1.0,               // Moyenne: (0.5+1.5)/2 = 1 Wh (pour ~30sec)
      "Autre": 1.0,
    },
    code: {
      "GitHub Copilot": 0.005,       // Moyenne: (0.001+0.01)/2 = 0.005 Wh (mWh range)
      "ChatGPT": 0.05,               // Moyenne: (0.01+0.1)/2 = 0.05 Wh
      "Claude": 0.05,                // Moyenne: (0.01+0.1)/2 = 0.05 Wh
      "Codeium": 0.01,               // Estimation basée sur Copilot (un peu plus que Copilot)
      "Cursor": 0.01,                // Estimation basée sur Copilot
      "Replit Ghostwriter": 0.01,    // Estimation basée sur Copilot
      "Autre": 0.02,
    },
  },

  // ========== TIME PER REQUEST (minutes) ==========
  // Time required to complete each type of request
  // Source: INSTRUCTIONPROMPT.md - Données
  timePerRequest: {
    text: 2,      // 2 minutes
    image: 3,     // 3 minutes
    audio: 5,     // 5 minutes
    video: 8,     // 8 minutes
    code: 0,      // Special handling - uses time selection
  },

  // ========== REQUEST COUNT FACTORS ==========
  // Converts range selections into average request counts
  aiRequestCount: {
    text: {
      "1–5": 3,
      "5–20": 12,
      "20–50": 35,
      "50+": 75,
    },
    image: {
      "1–2": 1.5,
      "3–10": 6,
      "10–30": 20,
      "30+": 50,
    },
    video: {
      "1–2": 1.5,
      "3–10": 6,
      "10–30": 20,
      "30+": 50,
    },
    audio: {
      "1–2": 1.5,
      "3–10": 6,
      "10–30": 20,
      "30+": 50,
    },
  },

  // ========== REQUEST LENGTH FACTORS (for text) ==========
  // These factors are applied to the base energy to adjust for request length
  // Based on INSTRUCTIONPROMPT.md table values
  aiRequestLength: {
    text: {
      "Courtes (1 phrase)": 0.15,      // ~15% of average (courte vs moyenne)
      "Moyennes (paragraphe)": 1,      // Base level
      "Longues (documents)": 9,        // ~9x the moyenne value
    },
  },

  // ========== IMAGE RESOLUTION FACTORS ==========
  aiImageResolution: {
    "Standard": 1,
    "Haute définition": 3,
    "Je ne sais pas": 2,
  },

  // ========== VIDEO DURATION AND RESOLUTION FACTORS ==========
  aiVideoDuration: {
    "< 10 sec": 1,
    "10–30 sec": 2,
    "30–60 sec": 4,
    "> 1 min": 8,
  },

  aiVideoResolution: {
    "Standard": 1,
    "Haut définition": 3,
  },

  // ========== AUDIO DURATION FACTORS ==========
  aiAudioDuration: {
    "< 30 sec": 1,
    "30 sec – 2 min": 2,
    "2–5 min": 5,
    "> 5 min": 10,
  },

  // ========== CODE USAGE AND TIME FACTORS ==========
  aiCodeUsage: {
    "Suggestions simples": 1,
    "Génération complète": 10,
    "Debug / correction": 100,
  },

  aiCodeTime: {
    "< 30 min": 0.3,
    "30 min – 2 h": 1,
    "2–5 h": 2,
    "5 h+": 4,
  },

  // ========== NETWORK ENERGY INTENSITY (kWh/GB) ==========
  // Source: INSTRUCTIONPROMPT.md - Données
  networkEnergyIntensity: {
    "Wi-Fi": 0.05,                    // 0.05 kWh/GB
    "Données mobiles (4G, 5G)": 0.2,  // 0.2 kWh/GB
  },

  // ========== DATA PER REQUEST (GB/requête) ==========
  // Source: INSTRUCTIONPROMPT.md - Données
  // Used to calculate network energy consumption
  dataPerRequest: {
    text: 0.00001,        // 0.00001 GB/requête
    image: {
      "Standard": 0.01,   // 0.01 GB/requête
      "Haute définition": 0.1,  // 0.1 GB/requête
    },
    audio: 0.06,          // 0.06 GB/requête/minute (will be multiplied by duration)
    video: {
      "Standard": 0.45,   // 0.45 GB/requête/minute
      "Haute définition": 1.2,  // 1.2 GB/requête/minute
    },
  },

  // ========== RECOMMENDATIONS BASED ON LEVEL ==========
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

  // ========== PEDAGOGICAL EQUIVALENTS ==========
  equivalents: {
    "km_car_100km": 8.2,           // gCO2 per km of car
    "flight_paris_london": 255,    // gCO2 per person
    "tree_co2_per_year": 25000,    // gCO2 per year absorbed by a tree
    "planet_fair_share": 5000,     // gCO2 per year for sustainability
  }
};