export const questions = [
  // Initial choice - keep mode selection to allow access to detailed
  {
    id: "mode",
    question: "Quel mode d'analyse préférez-vous ?",
    choices: ["Rapide", "Détaillé"],
    type: "single"
  },

  // ========== RAPID MODE ONLY - SECTION 2: PROFIL UTILISATEUR ==========
  {
    id: "country",
    question: "Pays d'utilisation",
    choices: ["France", "Belgique", "Suisse"],
    type: "single",
    showIn: "rapid"
  },
  
  {
    id: "userType",
    question: "Type d'utilisateur",
    choices: ["Particulier", "Étudiant", "Professionnel", "Entreprise"],
    type: "single",
    showIn: "rapid"
  },
  
  // Professional subcategories
  {
    id: "professionalSubType",
    question: "Domaine professionnel",
    choices: ["Tech / IT", "Marketing / Communication", "Finance / Conseil", "Éducation / Recherche", "Industrie / Ingénierie", "Autre"],
    type: "single",
    showIn: "rapid",
    dependsOn: "userType",
    dependsOnValue: "Professionnel"
  },
  
  // Enterprise size
  {
    id: "enterpriseSize",
    question: "Taille de l'entreprise",
    choices: ["Petite (< 50 employés)", "Moyenne (50–250)", "Grande (> 250)"],
    type: "single",
    showIn: "rapid",
    dependsOn: "userType",
    dependsOnValue: "Entreprise"
  },
  
  // Enterprise sector
  {
    id: "enterpriseSector",
    question: "Secteur d'activité",
    choices: ["Tech", "Industrie", "Services", "Autre"],
    type: "single",
    showIn: "rapid",
    dependsOn: "enterpriseSize",
    dependsOnValue: null
  },

  // ========== RAPID MODE ONLY - SECTION 3: APPAREIL ET USAGE ==========
  {
    id: "device",
    question: "Appareil principal",
    choices: ["Smartphone", "Ordinateur portable", "Ordinateur fixe", "Tablette"],
    type: "single",
    showIn: "rapid"
  },

  // ========== RAPID MODE ONLY - SECTION 4: TYPES D'IA UTILISÉS ==========
  {
    id: "aiTypes",
    question: "Quels types d'IA utilisez-vous ? (sélectionnez tout ce qui s'applique)",
    choices: ["Texte (chatbot)", "Génération d'images", "Génération vidéo", "Audio / musique", "Code"],
    type: "multiple",
    showIn: "rapid"
  },

  // ========== TEXT AI - RAPID MODE ==========
  {
    id: "textModel",
    question: "Quel modèle de texte utilisez-vous ?",
    choices: ["ChatGPT", "Claude", "Mistral", "Gemini", "Deepseek", "Grok", "Perplexity", "Kimi", "Euria", "Lumo", "Autre"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Texte (chatbot)"
  },
  
  {
    id: "textRequests",
    question: "Nombre de requêtes par session",
    choices: ["1–5", "5–20", "20–50", "50+"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Texte (chatbot)"
  },
  
  {
    id: "textLength",
    question: "Longueur des requêtes",
    choices: ["Courtes (1 phrase)", "Moyennes (paragraphe)", "Longues (documents)"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Texte (chatbot)"
  },

  // ========== IMAGE AI - RAPID MODE ==========
  {
    id: "imageModel",
    question: "Quel modèle de génération d'images utilisez-vous ?",
    choices: ["DALL·E (ChatGPT)", "Midjourney", "Stable Diffusion", "Adobe Firefly", "Leonardo AI", "Playground AI", "Gemini (image)", "Grok (image)", "Autre"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Génération d'images"
  },
  
  {
    id: "imageCount",
    question: "Nombre de requêtes par session",
    choices: ["1–2", "3–10", "10–30", "30+"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Génération d'images"
  },
  
  {
    id: "imageResolution",
    question: "Résolution",
    choices: ["Standard", "Haute définition", "Je ne sais pas"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Génération d'images"
  },

  // ========== VIDEO AI - RAPID MODE ==========
  {
    id: "videoModel",
    question: "Quel modèle de génération de vidéo utilisez-vous ?",
    choices: ["Sora (OpenAI)", "Runway (Gen-2 / Gen-3)", "Pika", "Stable Video Diffusion", "Kaiber", "Autre"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Génération vidéo"
  },
  
  {
    id: "videoCount",
    question: "Nombre de requêtes par session",
    choices: ["1–2", "3–10", "10–30", "30+"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Génération vidéo"
  },
  
  {
    id: "videoDuration",
    question: "Durée moyenne d'une vidéo",
    choices: ["< 10 sec", "10–30 sec", "30–60 sec", "> 1 min"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Génération vidéo"
  },
  
  {
    id: "videoResolution",
    question: "Résolution",
    choices: ["Standard", "Haut définition"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Génération vidéo"
  },

  // ========== AUDIO AI - RAPID MODE ==========
  {
    id: "audioModel",
    question: "Quel modèle audio/musique utilisez-vous ?",
    choices: ["Suno", "ElevenLabs", "Udio", "PlayHT", "Descript", "Autre"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Audio / musique"
  },
  
  {
    id: "audioCount",
    question: "Nombre de requêtes par session",
    choices: ["1–2", "3–10", "10–30", "30+"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Audio / musique"
  },
  
  {
    id: "audioDuration",
    question: "Durée moyenne d'un audio",
    choices: ["< 30 sec", "30 sec – 2 min", "2–5 min", "> 5 min"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Audio / musique"
  },

  // ========== CODE AI - RAPID MODE ==========
  {
    id: "codeModel",
    question: "Quel modèle de code utilisez-vous ?",
    choices: ["GitHub Copilot", "ChatGPT", "Claude", "Codeium", "Cursor", "Replit Ghostwriter", "Autre"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Code"
  },
  
  {
    id: "codeUsage",
    question: "Type d'usage",
    choices: ["Suggestions simples", "Génération complète", "Debug / correction"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Code"
  },
  
  {
    id: "codeTime",
    question: "Temps d'utilisation",
    choices: ["< 30 min", "30 min – 2 h", "2–5 h", "5 h+"],
    type: "single",
    showIn: "rapid",
    dependsOn: "aiTypes",
    dependsOnValue: "Code"
  },

  // ========== SECTION 5: VERSION AND FREQUENCY (RAPID MODE) ==========
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

  // ========== SECTION 6: CONNEXION RÉSEAU (RAPID MODE) ==========
  {
    id: "networkType",
    question: "Type de connexion",
    choices: ["Wi-Fi", "Données mobiles (4G, 5G)"],
    type: "single",
    showIn: "rapid"
  },

  // ========== DETAILED MODE QUESTIONS (placeholder for future development) ==========
  // Detailed mode questions would go here but are not included in current rapid-only implementation
];
