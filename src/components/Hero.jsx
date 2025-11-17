import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import rough from 'roughjs/bundled/rough.esm.js'
import { ArrowRight, Github, Figma, Sparkles } from 'lucide-react'

export default function Hero({ onCTAClick }) {
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const sketchRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' })
    gsap.fromTo(subRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' })
    gsap.fromTo(ctaRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.35, ease: 'power3.out' })
  }, [])

  useEffect(() => {
    const canvas = sketchRef.current
    const rc = rough.canvas(canvas)
    const w = canvas.width
    const h = canvas.height

    rc.rectangle(16, 16, w - 32, h - 32, { roughness: 1.7, stroke: '#0ea5e9', bowing: 1.2 })
    rc.circle(w - 80, 40, 18, { stroke: '#f59e0b' })
    rc.circle(w - 50, 40, 18, { stroke: '#22c55e' })
    rc.rectangle(60, 60, 200, 100, { fill: 'rgba(14,165,233,0.08)', stroke: '#0ea5e9' })
    rc.line(260, 110, 360, 140, { stroke: '#64748b' })
    rc.rectangle(340, 120, 180, 80, { fill: 'rgba(34,197,94,0.08)', stroke: '#22c55e' })
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-sky-700 mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-medium">Ask AI to refactor, generate, and explain diagrams</span>
            </div>
            <h1 ref={titleRef} className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Design software systems you can dive into forever
            </h1>
            <p ref={subRef} className="mt-4 text-lg text-gray-600 max-w-xl">
              A clean, fast canvas for multi‑level diagrams. Zoom into any node infinitely, simulate flows, and collaborate. Integrates with GitHub and Figma, powered by an AI copilot.
            </p>
            <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={onCTAClick} className="group inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 transition">
                Start diagramming free
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a href="#integrations" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-gray-900 font-medium border border-gray-200 hover:bg-gray-50">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="#integrations" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-gray-900 font-medium border border-gray-200 hover:bg-gray-50">
                <Figma className="w-4 h-4" /> Figma
              </a>
            </div>
          </div>
          <div className="relative">
            <canvas ref={sketchRef} width={560} height={320} className="w-full rounded-xl border border-sky-200 bg-white shadow-[0_10px_30px_rgba(2,132,199,0.08)]" />
            <div className="absolute -bottom-6 -left-6 rotate-[-2deg] select-none text-sky-700">hand‑drawn vibes</div>
          </div>
        </div>
      </div>
    </section>
  )
}
