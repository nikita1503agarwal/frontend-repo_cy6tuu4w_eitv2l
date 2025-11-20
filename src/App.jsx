import Hero from './components/Hero'
import MarketTicker from './components/MarketTicker'
import PlayerCreator from './components/PlayerCreator'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <MarketTicker />
      <PlayerCreator />
      <footer className="border-t border-white/5 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-400">
          Built for modern, minimalist financial learning.
        </div>
      </footer>
    </div>
  )
}

export default App
