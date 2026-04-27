export default function Home({ onStart }) {
  return (
    <>
      {/* Hero */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">🌱 Empreinte IA</h1>
        <p className="text-lg text-gray-600">
          Découvrez l'impact environnemental de votre utilisation de l'IA générative
        </p>
      </div>

      {/* Key features */}
      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
          <span className="text-2xl">📱</span>
          <div>
            <p className="font-semibold">Analyse rapide</p>
            <p className="text-sm text-gray-600">2 minutes pour estimer votre empreinte</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
          <span className="text-2xl">🎯</span>
          <div>
            <p className="font-semibold">Résultats personnalisés</p>
            <p className="text-sm text-gray-600">Recommandations adaptées à votre usage</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
          <span className="text-2xl">📊</span>
          <div>
            <p className="font-semibold">Comparaisons pédagogiques</p>
            <p className="text-sm text-gray-600">Équivalents en km de voiture, arbres, etc.</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
          <span className="text-2xl">💡</span>
          <div>
            <p className="font-semibold">Conseils pratiques</p>
            <p className="text-sm text-gray-600">Actions concrètes pour réduire votre impact</p>
          </div>
        </div>
      </div>

      {/* What we cover */}
      <div className="mb-8">
        <h2 className="font-semibold text-lg mb-3">✨ Ce que nous analysons</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-gray-50 rounded text-sm font-medium">💬 Texte (ChatGPT, Claude...)</div>
          <div className="p-2 bg-gray-50 rounded text-sm font-medium">🎨 Images (DALL·E, Midjourney...)</div>
          <div className="p-2 bg-gray-50 rounded text-sm font-medium">🎬 Vidéos (Sora, Runway...)</div>
          <div className="p-2 bg-gray-50 rounded text-sm font-medium">🎵 Audio (Suno, ElevenLabs...)</div>
          <div className="p-2 bg-gray-50 rounded text-sm font-medium">💻 Code (Copilot, Cursor...)</div>
          <div className="p-2 bg-gray-50 rounded text-sm font-medium">📍 Par région</div>
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={onStart}
        className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition text-lg"
      >
        Estimer mon empreinte carbone
      </button>

      {/* Footer note */}
      <p className="text-xs text-gray-500 text-center mt-4">
        ℹ️ Les résultats sont des estimations basées sur des données scientifiques récentes. Cet outil est à titre informatif.
      </p>
    </>
  );
}