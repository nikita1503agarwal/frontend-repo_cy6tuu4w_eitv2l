import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function PlayerCreator() {
  const [name, setName] = useState('')
  const [profession, setProfession] = useState('Analyst')
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(false)

  const create = async (e) => {
    e.preventDefault()
    setLoading(true)
    const body = {
      name,
      profession,
      income: 5000,
      expenses: 3500,
      cash: 2000,
      assets: [],
      liabilities: []
    }
    await fetch(`${API}/api/players`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    const list = await fetch(`${API}/api/players`).then(r => r.json())
    setPlayers(list)
    setLoading(false)
    setName('')
  }

  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white text-lg font-semibold">Create your player</h3>
          <form onSubmit={create} className="mt-4 space-y-4">
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            <select value={profession} onChange={e=>setProfession(e.target.value)} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400">
              <option>Analyst</option>
              <option>Engineer</option>
              <option>Teacher</option>
              <option>Designer</option>
              <option>Entrepreneur</option>
            </select>
            <button disabled={loading} type="submit" className="rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-slate-100 disabled:opacity-60">{loading ? 'Creating...' : 'Create player'}</button>
          </form>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white text-lg font-semibold">Players</h3>
          <button onClick={async()=> setPlayers(await fetch(`${API}/api/players`).then(r=>r.json()))} className="mt-3 rounded-md border border-white/20 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10">Refresh</button>
          <ul className="mt-4 space-y-3">
            {players.map(p => (
              <li key={p.id} className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-900/50 px-3 py-2">
                <div>
                  <div className="text-white font-medium">{p.name}</div>
                  <div className="text-xs text-slate-400">{p.profession}</div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-300 text-sm">Cash ${p.cash?.toLocaleString?.() ?? p.cash}</div>
                  <div className="text-xs text-slate-400">Income ${p.income} • Expenses ${p.expenses}</div>
                </div>
              </li>
            ))}
            {players.length === 0 && (
              <li className="text-slate-400 text-sm">No players yet. Create one to begin.</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
