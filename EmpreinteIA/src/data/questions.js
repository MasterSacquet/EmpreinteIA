export const questions = [
  // Initial choice
  {
    id: "mode",
    question: "Quel mode d'analyse préférez-vous ?",
    choices: ["Rapide", "Détaillé"],
    type: "single"
  },

  // ========== COMMON TO BOTH MODES ==========
  {
    id: "country",
    question: "Pays d'utilisation",
    choices: ["France", "Belgique", "Suisse"],
    type: "single",
    showIn: "all"
  },
  {
    id: "device",
    question: "Appareil principal",
    choices: ["Smartphone", "Ordinateur portable", "Ordinateur fixe", "Tablette"],
    type: "single",
    showIn: "all"
  },
  
  // User type with subcategories (RAPID MODE)
  {
    id: "userType",
    question: "Type d'utilisateur",
    choices: ["Particulier", "Étudiant", "Professionnel", "Entreprise"],
    type: "single",
    showIn: "all"
  },
  {
    id: "professionalSubType",
    question: "Domaine professionnel",
    choices: ["Tech / IT", "Marketing / Communication", "Finance / Conseil", "Éducation / Recherche", "Industrie / Ingénierie", "Autre"],
    type: "single",
    showIn: "rapid",
    dependsOn: "userType",
    dependsOnValue: "Professionnel"
  },
  {
    id: "enterpriseSize",
    question: "Taille de l'entreprise",
    choices: ["Petite (< 50 employés)", "Moyenne (50–250)", "Grande (> 250)"],
    type: "single",
    showIn: "rapid",
    dependsOn: "userType",
    dependsOnValue: "Entreprise"
  },
  {
    id: "enterpriseSector",
    question: "Secteur d'activité",
    choices: ["Tech", "Industrie", "Services", "Autre"],
    type: "single",
    showIn: "rapid",
    dependsOn: "enterpriseSize",
    dependsOnValue: null // Always show if enterprise
  },

  // Network connection (RAPID MODE)
  {
    id: "networkType",
    question: "Type de connexion",
    choices: ["Wi-Fi", "Données mobiles (4G)", "Données mobiles (5G)"],
    type: "single",
    showIn: "rapid"
  },

  // ========== AI TYPES (both modes) ==========
  {
    id: "aiTypes",
    question: "Quels types d'IA utilisez-vous ? (sélectionnez tout ce qui s'applique)",
    choices: ["Texte (chatbot)", "Images", "Vidéo", "Audio/Musique", "Code"],
    type: "multiple",
    showIn: "all"
  },

  // ========== TEXT AI QUESTIONS (both modes) ==========
  {
    id: "textModel",
    question: "Quel modèle de texte utilisez-vous ?",
    choices: ["ChatGPT", "Claude", "Mistral", "Gemini", "Deepseek", "Grok", "Perplexity", "Kimi", "Euria", "Lumo", "Autre"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Texte (chatbot)"
  },
  {
    id: "textRequests",
    question: "Nombre de requêtes par session",
    choices: ["1–5", "5–20", "20–50", "50+"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Texte (chatbot)"
  },
  {
    id: "textLength",
    question: "Longueur des requêtes",
    choices: ["Courtes (1 phrase)", "Moyennes (paragraphe)", "Longues (documents)"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Texte (chatbot)"
  },
  {
    id: "textResponses",
    question: "Type de réponses",
    choices: ["Courtes", "Longues", "Analyse de documents"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Texte (chatbot)"
  },

  // ========== IMAGE AI QUESTIONS (both modes) ==========
  {
    id: "imageModel",
    question: "Quel modèle de génération d'images utilisez-vous ?",
    choices: ["DALL·E (ChatGPT)", "Midjourney", "Stable Diffusion", "Adobe Firefly", "Leonardo AI", "Playground AI", "Gemini (image)", "Grok (image)", "Autre"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Images"
  },
  {
    id: "imageCount",
    question: "Nombre d'images par session",
    choices: ["1–2", "3–10", "10–30", "30+"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Images"
  },
  {
    id: "imageResolution",
    question: "Résolution des images",
    choices: ["Faible (512px)", "Moyenne (1024px)", "Élevée (HD/4K)"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Images"
  },
  {
    id: "imageTries",
    question: "Nombre de tentatives",
    choices: ["1", "2–5", "5–10", "10+"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Images"
  },

  // ========== VIDEO AI QUESTIONS (both modes) ==========
  {
    id: "videoModel",
    question: "Quel modèle de génération de vidéo utilisez-vous ?",
    choices: ["Sora (OpenAI)", "Runway (Gen-2/Gen-3)", "Pika", "Stable Video Diffusion", "Kaiber", "Autre"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Vidéo"
  },
  {
    id: "videoDuration",
    question: "Durée moyenne des vidéos",
    choices: ["< 10 sec", "10–30 sec", "30–60 sec", "> 1 min"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Vidéo"
  },
  {
    id: "videoResolution",
    question: "Résolution des vidéos",
    choices: ["SD", "HD", "4K+"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Vidéo"
  },

  // ========== AUDIO AI QUESTIONS (both modes) ==========
  {
    id: "audioModel",
    question: "Quel modèle audio/musique utilisez-vous ?",
    choices: ["Suno", "ElevenLabs", "Udio", "PlayHT", "Descript", "Autre"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Audio/Musique"
  },
  {
    id: "audioDuration",
    question: "Durée moyenne du contenu audio",
    choices: ["< 30 sec", "30 sec – 2 min", "2–5 min", "> 5 min"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Audio/Musique"
  },

  // ========== CODE AI QUESTIONS (both modes) ==========
  {
    id: "codeModel",
    question: "Quel modèle de code utilisez-vous ?",
    choices: ["GitHub Copilot", "ChatGPT", "Claude", "Codeium", "Cursor", "Replit Ghostwriter", "Autre"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Code"
  },
  {
    id: "codeUsage",
    question: "Type d'usage du code",
    choices: ["Suggestions simples", "Génération complète", "Debug / correction"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Code"
  },
  {
    id: "codeTime",
    question: "Temps d'utilisation quotidien",
    choices: ["< 30 min", "30 min – 2 h", "2–5 h", "5 h+"],
    type: "single",
    showIn: "all",
    dependsOn: "aiTypes",
    dependsOnValue: "Code"
  },

  // ========== VERSION AND FREQUENCY (RAPID MODE) ==========
  {
    id: "version",
    question: "Version utilisée",
    choices: ["Gratuite", "Payante (Pro)", "Entreprise"],
    type: "single",
    showIn: "rapid"
  },
  {
    id: "rapidFrequency",
    question: "Fréquence d'utilisation de l'IA",
    choices: ["Occasionnelle (quelques fois/mois)", "Régulière (quelques fois/semaine)", "Intensive (quotidienne)"],
    type: "single",
    showIn: "rapid"
  },

  // ========== DETAILED MODE ONLY ==========
  {
    id: "textVersion",
    question: "Version utilisée (Texte)",
    choices: ["Gratuite", "Payante (Pro)", "Entreprise"],
    type: "single",
    showIn: "detailed",
    dependsOn: "aiTypes",
    dependsOnValue: "Texte (chatbot)"
  },
  {
    id: "textFrequency",
    question: "Fréquence d'utilisation (Texte)",
    choices: ["Occasionnelle (quelques fois/mois)", "Régulière (quelques fois/semaine)", "Intensive (quotidienne)"],
    type: "single",
    showIn: "detailed",
    dependsOn: "aiTypes",
    dependsOnValue: "Texte (chatbot)"
  },
  {
    id: "imageVersion",
    question: "Version utilisée (Images)",
    choices: ["Gratuite", "Payante (Pro)", "Entreprise"],
    type: "single",
    showIn: "detailed",
    dependsOn: "aiTypes",
    dependsOnValue: "Images"
  },
  {
    id: "imageFrequency",
    question: "Fréquence d'utilisation (Images)",
    choices: ["Occasionnelle (quelques fois/mois)", "Régulière (quelques fois/semaine)", "Intensive (quotidienne)"],
    type: "single",
    showIn: "detailed",
    dependsOn: "aiTypes",
    dependsOnValue: "Images"
  },
  {
    id: "videoVersion",
    question: "Version utilisée (Vidéo)",
    choices: ["Gratuite", "Payante (Pro)", "Entreprise"],
    type: "single",
    showIn: "detailed",
    dependsOn: "aiTypes",
    dependsOnValue: "Vidéo"
  },
  {
    id: "videoFrequency",
    question: "Fréquence d'utilisation (Vidéo)",
    choices: ["Occasionnelle (quelques fois/mois)", "Régulière (quelques fois/semaine)", "Intensive (quotidienne)"],
    type: "single",
    showIn: "detailed",
    dependsOn: "aiTypes",
    dependsOnValue: "Vidéo"
  },
  {
    id: "audioVersion",
    question: "Version utilisée (Audio)",
    choices: ["Gratuite", "Payante (Pro)", "Entreprise"],
    type: "single",
    showIn: "detailed",
    dependsOn: "aiTypes",
    dependsOnValue: "Audio/Musique"
  },
  {
    id: "audioFrequency",
    question: "Fréquence d'utilisation (Audio)",
    choices: ["Occasionnelle (quelques fois/mois)", "Régulière (quelques fois/semaine)", "Intensive (quotidienne)"],
    type: "single",
    showIn: "detailed",
    dependsOn: "aiTypes",
    dependsOnValue: "Audio/Musique"
  },
  {
    id: "codeVersion",
    question: "Version utilisée (Code)",
    choices: ["Gratuite", "Payante (Pro)", "Entreprise"],
    type: "single",
    showIn: "detailed",
    dependsOn: "aiTypes",
    dependsOnValue: "Code"
  }
];
