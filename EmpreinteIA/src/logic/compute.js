import { rules } from "./rules";

export function computeFootprint(data) {
  // Skip detailed mode for now - return minimal result with button to access detailed
  if (data.mode === "Détaillé") {
    return {
      co2: "0.00",
      energy: "0.00",
      label: "Mode Détaillé 🔄",
      level: "detailed",
      message: "Le mode détaillé sera bientôt disponible. Pour l'instant, utilisez le mode rapide."
    };
  }

  // === RAPID MODE CALCULATION ===
  // CO2e = (Eterminal + Ereseau + Edata) × CI
  // Formula based on INSTRUCTIONPROMPT.md section "Détail des calculs"

  // Get carbon intensity for country (in kgCO2e/kWh)
  const ci = rules.carbonIntensity[data.country] || 0.0196;

  // Get device power (W)
  const devicePower = rules.devicePower[data.device] || 50;

  // Get version factor (impacts Edata calculation)
  const versionFactor = rules.versionFactor[data.version] || 1;

  // Get frequency per month
  const frequencyPerMonth = rules.frequencyFactorMonthly[data.rapidFrequency] || 7;

  // Get network intensity based on connection type (in kWh/GB)
  const networkIntensity = rules.networkEnergyIntensity[data.networkType] || 0.05;

  // Initialize daily energy calculations (in Wh)
  let eterminalJour = 0;  // Energy of user device
  let eresauJour = 0;      // Network energy
  let edataJour = 0;       // AI server energy

  const aiTypes = Array.isArray(data.aiTypes) ? data.aiTypes : [];

  // === TEXT AI ===
  if (aiTypes.includes("Texte (chatbot)")) {
    const baseEnergyPerRequest = rules.aiEnergyPerRequest.text[data.textModel] || 0.05; // Wh
    const requestCount = rules.aiRequestCount.text[data.textRequests] || 3;
    const lengthFactor = rules.aiRequestLength.text[data.textLength] || 1;

    // Eterminal: device usage time for text = requestCount × t_requete
    const timeMinutesText = requestCount * rules.timePerRequest.text; // minutes
    const timeHoursText = timeMinutesText / 60; // hours
    eterminalJour += devicePower * timeHoursText; // Wh (P in W, t in hours -> Wh)

    // Ereseau: network data for text
    const dataText = rules.dataPerRequest.text * requestCount; // GB
    eresauJour += dataText * networkIntensity * 1000; // Convert kWh to Wh (kWh/GB * GB * 1000 = Wh)

    // Edata: AI server energy for text
    const textEnergyPerDay = baseEnergyPerRequest * requestCount * lengthFactor * versionFactor;
    edataJour += textEnergyPerDay;
  }

  // === IMAGE AI ===
  if (aiTypes.includes("Génération d'images")) {
    const baseEnergyPerRequest = rules.aiEnergyPerRequest.image[data.imageModel] || 0.2; // Wh
    const requestCount = rules.aiRequestCount.image[data.imageCount] || 2;
    const resolutionFactor = rules.aiImageResolution[data.imageResolution] || 1;

    // Eterminal: device usage time for image = requestCount × t_requete
    const timeMinutesImage = requestCount * rules.timePerRequest.image; // minutes
    const timeHoursImage = timeMinutesImage / 60; // hours
    eterminalJour += devicePower * timeHoursImage; // Wh

    // Ereseau: network data for image (depends on resolution)
    let dataPerImageGb = rules.dataPerRequest.image["Standard"] || 0.01;
    if (data.imageResolution === "Haute définition") {
      dataPerImageGb = rules.dataPerRequest.image["Haute définition"] || 0.1;
    }
    const dataImage = dataPerImageGb * requestCount; // GB
    eresauJour += dataImage * networkIntensity * 1000; // Wh

    // Edata: AI server energy for image
    const imageEnergyPerDay = baseEnergyPerRequest * requestCount * resolutionFactor * versionFactor;
    edataJour += imageEnergyPerDay;
  }

  // === VIDEO AI ===
  if (aiTypes.includes("Génération vidéo")) {
    const baseEnergyPerRequest = rules.aiEnergyPerRequest.video[data.videoModel] || 1.0; // Wh
    const requestCount = rules.aiRequestCount.video[data.videoCount] || 2;
    const durationFactor = rules.aiVideoDuration[data.videoDuration] || 1;
    const resolutionFactor = rules.aiVideoResolution[data.videoResolution] || 1;

    // Eterminal: device usage time for video = requestCount × t_requete
    const timeMinutesVideo = requestCount * rules.timePerRequest.video; // minutes
    const timeHoursVideo = timeMinutesVideo / 60; // hours
    eterminalJour += devicePower * timeHoursVideo; // Wh

    // Ereseau: network data for video (depends on resolution and duration)
    let dataPerMinuteGb = rules.dataPerRequest.video["Standard"] || 0.45;
    if (data.videoResolution === "Haut définition") {
      dataPerMinuteGb = rules.dataPerRequest.video["Haute définition"] || 1.2;
    }
    // Extract duration in minutes from the data
    let durationMinutes = 0.083; // Default: < 10 sec average = ~5 sec
    if (data.videoDuration === "10–30 sec") durationMinutes = 0.333; // ~20 sec
    else if (data.videoDuration === "30–60 sec") durationMinutes = 0.75; // ~45 sec
    else if (data.videoDuration === "> 1 min") durationMinutes = 1.5; // ~90 sec

    const dataVideo = dataPerMinuteGb * durationMinutes * requestCount; // GB
    eresauJour += dataVideo * networkIntensity * 1000; // Wh

    // Edata: AI server energy for video
    const videoEnergyPerDay = baseEnergyPerRequest * requestCount * durationFactor * resolutionFactor * versionFactor;
    edataJour += videoEnergyPerDay;
  }

  // === AUDIO AI ===
  if (aiTypes.includes("Audio / musique")) {
    const baseEnergyPerRequest = rules.aiEnergyPerRequest.audio[data.audioModel] || 0.1; // Wh
    const requestCount = rules.aiRequestCount.audio[data.audioCount] || 2;
    const durationFactor = rules.aiAudioDuration[data.audioDuration] || 1;

    // Eterminal: device usage time for audio = requestCount × t_requete
    const timeMinutesAudio = requestCount * rules.timePerRequest.audio; // minutes
    const timeHoursAudio = timeMinutesAudio / 60; // hours
    eterminalJour += devicePower * timeHoursAudio; // Wh

    // Ereseau: network data for audio (depends on duration)
    let durationMinutesAudio = 0.5; // Default: < 30 sec
    if (data.audioDuration === "30 sec – 2 min") durationMinutesAudio = 1;
    else if (data.audioDuration === "2–5 min") durationMinutesAudio = 3;
    else if (data.audioDuration === "> 5 min") durationMinutesAudio = 7;

    const dataAudio = rules.dataPerRequest.audio * durationMinutesAudio * requestCount; // GB
    eresauJour += dataAudio * networkIntensity * 1000; // Wh

    // Edata: AI server energy for audio
    const audioEnergyPerDay = baseEnergyPerRequest * requestCount * durationFactor * versionFactor;
    edataJour += audioEnergyPerDay;
  }

  // === CODE AI ===
  if (aiTypes.includes("Code")) {
    const baseEnergyPerRequest = rules.aiEnergyPerRequest.code[data.codeModel] || 0.01; // Wh
    const usageFactor = rules.aiCodeUsage[data.codeUsage] || 1;
    const timeFactor = rules.aiCodeTime[data.codeTime] || 1;

    // Eterminal: device usage from code time selection (codeTime represents hours per day roughly)
    // For code, we use the time selection directly
    let codeTimeHours = 0.5; // Default: < 30 min
    if (data.codeTime === "30 min – 2 h") codeTimeHours = 1;
    else if (data.codeTime === "2–5 h") codeTimeHours = 3.5;
    else if (data.codeTime === "5 h+") codeTimeHours = 7;

    eterminalJour += devicePower * codeTimeHours; // Wh

    // Ereseau: code has minimal network data, so we approximate as 0 or very small
    // (not explicitly defined in the data)

    // Edata: AI server energy for code
    const codeEnergyPerDay = baseEnergyPerRequest * usageFactor * timeFactor * versionFactor;
    edataJour += codeEnergyPerDay;
  }

  // === Convert energy per day to kWh ===
  const eterminalJourKwh = eterminalJour / 1000; // kWh
  const eresauJourKwh = eresauJour / 1000; // kWh
  const edataJourKwh = edataJour / 1000; // kWh

  // === Total energy per day ===
  const totalEnergyJourKwh = eterminalJourKwh + eresauJourKwh + edataJourKwh; // kWh

  // === Calculate monthly energy ===
  const totalEnergyMonthKwh = totalEnergyJourKwh * frequencyPerMonth; // kWh

  // === Calculate CO2 emissions ===
  const co2PerMonthKg = totalEnergyMonthKwh * ci; // kgCO2e

  // === Determine label ===
  let label = "Faible 🌱";
  if (co2PerMonthKg > 10) label = "Élevé 🔥";
  else if (co2PerMonthKg > 5) label = "Modéré ⚖️";

  return {
    co2: co2PerMonthKg.toFixed(2),
    energy: (totalEnergyMonthKwh * 1000).toFixed(2), // Convert back to Wh for display
    label,
    level: co2PerMonthKg > 10 ? "high" : co2PerMonthKg > 5 ? "moderate" : "low",
    // Additional details for debugging/breakdown
    breakdown: {
      eterminalJour: eterminalJour.toFixed(2),
      eresauJour: eresauJour.toFixed(2),
      edataJour: edataJour.toFixed(2),
    }
  };
}