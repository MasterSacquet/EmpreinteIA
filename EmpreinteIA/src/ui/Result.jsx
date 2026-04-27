import { useEffect } from "react";
import { computeFootprint } from "../logic/compute";
import { rules } from "../logic/rules";

export default function Result({ data, result, setResult, onRestart }) {
  useEffect(() => {
    const res = computeFootprint(data);
    setResult(res);
  }, []);

  if (!result) return null;

  const co2Value = parseFloat(result.co2);
  const recommendations =
    result.level === "high"
      ? rules.recommendations.high
      : result.level === "moderate"
        ? rules.recommendations.moderate
        : rules.recommendations.low;

  // Calculate pedagogical equivalents
  const kmCar = (co2Value * 1000 / rules.equivalents.km_car_100km / 100).toFixed(1);
  const flights = (co2Value * 1000 / rules.equivalents.flight_paris_london).toFixed(1);
  const trees = (co2Value * 1000 / rules.equivalents.tree_co2_per_year).toFixed(2);
  const planets = (co2Value * 1000 / rules.equivalents.planet_fair_share).toFixed(3);

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">{result.label}</h2>
        <p className="text-5xl font-bold text-green-600">
          {result.co2}
          <span className="text-lg"> kgCO₂/mois</span>
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Énergie estimée : {result.energy} Wh/mois
        </p>
      </div>

      {/* Pedagogical equivalents */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-3">📊 Équivalents pédagogiques</h3>
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
            🌍 <strong>{planets} planète(s)</strong> seraient nécessaires si tout le monde avait votre impact
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
              {data.frequency?.split("(")[0].trim() || "Non spécifiée"}
            </p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button
          onClick={onRestart}
          className="flex-1 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-semibold"
        >
          Recommencer
        </button>
        <button
          onClick={() => {
            const summary = `Résultat Empreinte IA: ${result.co2} kgCO₂/mois (${result.label}) - Mode: ${data.mode}`;
            navigator.clipboard.writeText(summary);
            alert("Copié dans le presse-papiers !");
          }}
          className="flex-1 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 font-semibold"
        >
          Partager
        </button>
      </div>

      {/* Footer disclaimer */}
      <p className="text-xs text-gray-500 mt-4 text-center">
        *Les chiffres sont des estimations basées sur des données moyennes. Les vrais impacts peuvent varier selon les modèles et les fournisseurs.
      </p>
    </>
  );
}