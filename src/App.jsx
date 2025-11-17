import { useRef } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import SketchDemo from './components/SketchDemo'
import FlowDemo from './components/FlowDemo'
import CTA from './components/CTA'

function App() {
  const topRef = useRef(null)

  const handleCTAClick = () => {
    const el = document.getElementById('flow-demo')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={topRef} className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-extrabold text-slate-900">Arkt</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#integrations" className="hover:text-slate-900">Integrations</a>
            <a href="#tutorials" className="hover:text-slate-900">Tutorials</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#" className="text-sm px-3 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50">Sign in</a>
            <a href="#" className="text-sm px-3 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-800">Try free</a>
          </div>
        </div>
      </header>

      <main>
        <Hero onCTAClick={handleCTAClick} />
        <div id="features"><Features /></div>
        <SketchDemo />
        <div id="flow-demo"><FlowDemo /></div>
        <section id="integrations" className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">Works with your tools</h3>
              <p className="text-slate-600 mt-2">Connect GitHub to link repos, issues and PRs. Bring Figma frames to anchor design beside architecture. Keep everything in sync.</p>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
                <li>Auto-import service graphs from your monorepo</li>
                <li>Attach commits to nodes and flows</li>
                <li>Embed Figma frames and keep them updated</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">GitHub • Figma • Slack</div>
          </div>
        </section>
        <section id="tutorials" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-semibold text-slate-900">Learn fast</h3>
            <p className="text-slate-600 mt-2">Short tutorials and a rich command palette so anyone can build clear diagrams quickly.</p>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {['Model microservices','Event-driven patterns','Monorepo maps'].map((t,i)=> (
                <div key={i} className="rounded-xl border border-slate-200 p-4">{t}</div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>

      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-600">© {new Date().getFullYear()} Arkt Labs</footer>
    </div>
  )
}

export default App
