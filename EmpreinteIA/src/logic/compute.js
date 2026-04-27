import { rules } from "./rules";

export function computeFootprint(data) {
  let totalEnergy = 0; // Wh
  const ci = rules.carbonIntensity[data.country] || 0.1; // gCO2/Wh
  const devicePower = rules.devicePower[data.device] || 50; // W
  const frequencyFactor = data.rapidFrequency 
    ? rules.frequencyFactor[data.rapidFrequency] || 1
    : rules.frequencyFactor[data.frequency] || 1;
  
  let userTypeFactor = rules.userTypeFactor[data.userType] || 1;
  
  // Apply professional subcategory factor
  if (data.userType === "Professionnel" && data.professionalSubType) {
    userTypeFactor *= rules.professionalSubTypeFactor[data.professionalSubType] || 1;
  }
  
  // Apply enterprise size and sector factors
  if (data.userType === "Entreprise") {
    if (data.enterpriseSize) {
      userTypeFactor *= rules.enterpriseSizeFactor[data.enterpriseSize] || 1;
    }
    if (data.enterpriseSector) {
      userTypeFactor *= rules.enterpriseSectorFactor[data.enterpriseSector] || 1;
    }
  }

  const networkFactor = rules.networkTypeFactor[data.networkType] || 1;

  // Mode rapide vs Détaillé
  if (data.mode === "Rapide") {
    const basePower = devicePower * frequencyFactor * 10; // Wh par jour
    totalEnergy = basePower * 30 * userTypeFactor * networkFactor; // Par mois
  } else {
    // Mode détaillé : calculation complexe basée sur chaque type d'IA
    const aiTypes = Array.isArray(data.aiTypes) ? data.aiTypes : [];

    // Texte
    if (aiTypes.includes("Texte (chatbot)")) {
      const baseEnergy = rules.aiPower.text[data.textModel] || 0.003;
      const requests = rules.textRequestFactor[data.textRequests] || 0.5;
      const length = rules.textLengthFactor[data.textLength] || 1;
      const response = rules.textResponseFactor[data.textResponses] || 1;
      let textEnergy = baseEnergy * requests * length * response * 1000; // Wh
      
      // Apply frequency and version factors for detailed mode
      if (data.textFrequency) {
        const textFreq = rules.frequencyFactor[data.textFrequency] || 1;
        textEnergy *= textFreq;
      }
      if (data.textVersion) {
        const textVer = rules.versionFactor[data.textVersion] || 1;
        textEnergy *= textVer;
      }
      totalEnergy += textEnergy;
    }

    // Images
    if (aiTypes.includes("Images")) {
      const baseEnergy = rules.aiPower.image[data.imageModel] || 0.05;
      const count = rules.imageCountFactor[data.imageCount] || 1;
      const resolution = rules.imageResolutionFactor[data.imageResolution] || 1;
      const tries = rules.imageTriesFactor[data.imageTries] || 1;
      let imageEnergy = baseEnergy * count * resolution * tries * 100; // Wh
      
      if (data.imageFrequency) {
        const imgFreq = rules.frequencyFactor[data.imageFrequency] || 1;
        imageEnergy *= imgFreq;
      }
      if (data.imageVersion) {
        const imgVer = rules.versionFactor[data.imageVersion] || 1;
        imageEnergy *= imgVer;
      }
      totalEnergy += imageEnergy;
    }

    // Vidéo
    if (aiTypes.includes("Vidéo")) {
      const baseEnergy = rules.aiPower.video[data.videoModel] || 0.4;
      const duration = rules.videoDurationFactor[data.videoDuration] || 1;
      const resolution = rules.videoResolutionFactor[data.videoResolution] || 1;
      let videoEnergy = baseEnergy * duration * resolution * 100; // Wh
      
      if (data.videoFrequency) {
        const vidFreq = rules.frequencyFactor[data.videoFrequency] || 1;
        videoEnergy *= vidFreq;
      }
      if (data.videoVersion) {
        const vidVer = rules.versionFactor[data.videoVersion] || 1;
        videoEnergy *= vidVer;
      }
      totalEnergy += videoEnergy;
    }

    // Audio
    if (aiTypes.includes("Audio/Musique")) {
      const baseEnergy = rules.aiPower.audio[data.audioModel] || 0.03;
      const duration = rules.audioDurationFactor[data.audioDuration] || 1;
      let audioEnergy = baseEnergy * duration * 100; // Wh
      
      if (data.audioFrequency) {
        const audioFreq = rules.frequencyFactor[data.audioFrequency] || 1;
        audioEnergy *= audioFreq;
      }
      if (data.audioVersion) {
        const audioVer = rules.versionFactor[data.audioVersion] || 1;
        audioEnergy *= audioVer;
      }
      totalEnergy += audioEnergy;
    }

    // Code
    if (aiTypes.includes("Code")) {
      const baseEnergy = rules.aiPower.code[data.codeModel] || 0.0015;
      const usage = rules.codePowerFactor[data.codeUsage] || 0.5;
      const time = rules.codeTimeFactor[data.codeTime] || 1;
      totalEnergy += baseEnergy * usage * time * 1000; // Wh
    }

    // Base frequency multiplier for detailed mode
    totalEnergy = totalEnergy * 30; // Par mois
  }

  // Base device energy consumption
  const deviceMonthly = devicePower * frequencyFactor * 8 * 30 * userTypeFactor * networkFactor; // 8h/day
  totalEnergy += deviceMonthly;

  // Convert to CO2 (gCO2)
  const co2 = totalEnergy * ci;

  // Determine label
  let label = "Faible 🌱";
  if (co2 > 500) label = "Élevé 🔥";
  else if (co2 > 200) label = "Modéré ⚖️";

  return {
    co2: (co2 / 1000).toFixed(2), // Convert to kgCO2
    energy: totalEnergy.toFixed(2),
    label,
    level: co2 > 500 ? "high" : co2 > 200 ? "moderate" : "low"
  };
}