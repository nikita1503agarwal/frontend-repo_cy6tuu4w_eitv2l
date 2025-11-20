import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live markets meet learning
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Master money by playing
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            A minimalist financial literacy game blending markets, property, business and careers. Track cashflow and net worth as you make real-world style decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#play" className="rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow/50 shadow-white/10 hover:bg-slate-100 transition">Start playing</a>
            <a href="#how" className="rounded-lg border border-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/10 transition">How it works</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
    </section>
  )
}
