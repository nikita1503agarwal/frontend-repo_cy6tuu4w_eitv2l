import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function MarketTicker() {
  const [data, setData] = useState(null)
  const [event, setEvent] = useState(null)

  useEffect(() => {
    fetch(`${API}/api/markets/snapshot`).then(r => r.json()).then(setData)
  }, [])

  const tick = async () => {
    const res = await fetch(`${API}/api/markets/tick`, { method: 'POST' })
    const ev = await res.json()
    setEvent(ev)
  }

  return (
    <section id="play" className="bg-slate-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {data ? (
            <>
              <Card title="Stocks" subtitle={`${data.stocks.index} • ${data.stocks.change}%`} />
              <Card title="Property" subtitle={`$${data.property.avg_price.toLocaleString()} • ${data.property.change}%`} />
              <Card title="Business" subtitle={`Sentiment ${data.business.sentiment}`} />
            </>
          ) : (
            <div className="col-span-3 text-center text-slate-400">Loading markets...</div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <div className="text-sm text-slate-200">
            {event ? (
              <span>
                Event: <b className="text-white">{event.asset_type}</b> {event.percent_change}% — {event.message}
              </span>
            ) : (
              <span>Tap Tick to generate a market event.</span>
            )}
          </div>
          <button onClick={tick} className="rounded-lg bg-emerald-400 text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-emerald-300 transition">Tick</button>
        </div>
      </div>
    </section>
  )
}

function Card({ title, subtitle }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm text-slate-400">{title}</div>
      <div className="mt-1 text-xl font-semibold text-white">{subtitle}</div>
    </div>
  )
}
