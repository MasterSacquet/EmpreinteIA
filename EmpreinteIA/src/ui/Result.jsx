import { useEffect } from "react";
import { computeFootprint } from "../logic/compute";
import { rules } from "../logic/rules";

export default function Result({ data, result, setResult, onRestart }) {
  useEffect(() => {
    const res = computeFootprint(data);
    setResult(res);
  }, []);

  if (!result) return null;

  // Handle detailed mode message
  if (result.level === "detailed") {
    return (
      <>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">📊 Mode Détaillé</h2>
          <p className="text-lg text-gray-600 mb-8">
            Le mode détaillé sera disponible prochainement pour une analyse plus complète.
          </p>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-blue-900">
              Utilisez le mode rapide pour découvrir votre empreinte carbone IA dès maintenant !
            </p>
          </div>
        </div>
        
        <button
          onClick={onRestart}
          className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-semibold"
        >
          ← Retour à l'accueil
        </button>
      </>
    );
  }

  const co2Value = parseFloat(result.co2);
  const co2ValueYears = (co2Value * 12).toFixed(2);
  const waterValue = parseFloat(result.water);
  const waterValueYears = (waterValue * 12).toFixed(2);
  const recommendations =
    result.level === "high"
      ? rules.recommendations.high
      : result.level === "moderate"
        ? rules.recommendations.moderate
        : rules.recommendations.low;

  // Calculate pedagogical equivalents for CO2
  const kmCar = (co2ValueYears * 1000 / rules.equivalents.km_car_per_km).toFixed(2);
  const flights = (co2ValueYears * 1000 / rules.equivalents.flight_paris_london).toFixed(2);
  const trees = (co2ValueYears * 1000 / rules.equivalents.tree_co2_per_year).toFixed(2);
  const planets = (co2ValueYears * 1000 / rules.equivalents.planet_fair_share).toFixed(2);

  // Calculate pedagogical equivalents for water
  const showers = (waterValueYears / rules.waterEquivalents.shower_liters).toFixed(2);
  const baths = (waterValueYears / rules.waterEquivalents.bath_liters).toFixed(2);
  const waterBottles = (waterValueYears / rules.waterEquivalents.water_bottle_liters).toFixed(2);
  const pools = (waterValueYears / rules.waterEquivalents.swimming_pool_small_liters).toFixed(2);

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">{result.label}</h2>
        <p className="text-5xl font-bold text-green-600">
          {co2ValueYears}
          <span className="text-lg"> kgCO₂/an</span>
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Énergie estimée : {(parseFloat(result.energy) * 12).toFixed(2)} Wh/an (soit {result.energy} Wh/mois)
        </p>
        <p className="text-blue-600 text-sm font-semibold mt-3">
          💧 Consommation d'eau : <strong>{waterValueYears} L/an</strong> ({result.water} L/mois)
        </p>
      </div>

      {/* Pedagogical equivalents */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-3">📊 Équivalents CO₂</h3>
        <div className="space-y-2 text-sm text-blue-800">
          <p>
            🚗 <strong>{kmCar} km</strong> en voiture thermique
          </p>
          <p>
            ✈️ <strong>{flights} vols</strong> Paris ↔ Londres
          </p>
          <p>
            🌳 <strong>{trees} arbre(s)</strong> absorberaient votre empreinte en un an
          </p>
          <p>
            🌍 <strong>{planets} %</strong> du budget personnel durable (2 tonnes/an/personne)
          </p>
        </div>
      </div>

      {/* Water consumption equivalents */}
      <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4 mb-6">
        <h3 className="font-semibold text-cyan-900 mb-3">💧 Équivalents eau consommée</h3>
        <div className="space-y-2 text-sm text-cyan-800">
          <p>
            🚿 <strong>{showers} douches</strong> (60L par douche)
          </p>
          <p>
            🛁 <strong>{baths} bain(s)</strong> (200L par bain)
          </p>
          <p>
            🧴 <strong>{waterBottles} bouteilles d'eau</strong> (0,5L)
          </p>
          <p>
            🏊 <strong>{pools} piscine(s)</strong> (25 000L)
          </p>
        </div>
      </div>

      {/* Recommendations */}
      <div
        className={`rounded-xl p-4 mb-6 ${
          result.level === "high"
            ? "bg-red-50 border border-red-200"
            : result.level === "moderate"
              ? "bg-yellow-50 border border-yellow-200"
              : "bg-green-50 border border-green-200"
        }`}
      >
        <h3
          className={`font-semibold mb-3 ${
            result.level === "high"
              ? "text-red-900"
              : result.level === "moderate"
                ? "text-yellow-900"
                : "text-green-900"
          }`}
        >
          💡 Conseils personnalisés
        </h3>
        <div
          className={`space-y-2 text-sm ${
            result.level === "high"
              ? "text-red-800"
              : result.level === "moderate"
                ? "text-yellow-800"
                : "text-green-800"
          }`}
        >
          {recommendations.map((rec, idx) => (
            <p key={idx}>{rec}</p>
          ))}
        </div>
      </div>

      {/* Mode info */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">📋 Résumé</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Mode</p>
            <p className="font-semibold">{data.mode || "Non spécifié"}</p>
          </div>
          <div>
            <p className="text-gray-600">Appareil</p>
            <p className="font-semibold">{data.device || "Non spécifié"}</p>
          </div>
          <div>
            <p className="text-gray-600">Pays</p>
            <p className="font-semibold">{data.country || "Non spécifié"}</p>
          </div>
          <div>
            <p className="text-gray-600">Fréquence</p>
            <p className="font-semibold">
              {data.rapidFrequency 
                ? data.rapidFrequency.split("(")[0].trim()
                : data.frequency?.split("(")[0].trim() || "Non spécifiée"
              }
            </p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mb-3">
        <button
          onClick={onRestart}
          className="flex-1 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-semibold"
        >
          Recommencer
        </button>
        <button
          onClick={() => {
            const summary = `Résultat Empreinte IA: ${co2ValueYears} kgCO₂/an (${result.label}) - Mode: ${data.mode}`;
            navigator.clipboard.writeText(summary);
            alert("Copié dans le presse-papiers !");
          }}
          className="flex-1 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 font-semibold"
        >
          Partager
        </button>
      </div>

      {/* Button to access detailed mode */}
      <div className="mb-3">
        <button
          onClick={onRestart}
          className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 font-semibold transition"
        >
          📊 Essayer le mode détaillé
        </button>
      </div>

      {/* Footer disclaimer */}
      <p className="text-xs text-gray-500 mt-4 text-center">
        *Ces chiffres sont des estimations, les vrais impacts peuvent varier selon les utilisations.
      </p>
    </>
  );
}