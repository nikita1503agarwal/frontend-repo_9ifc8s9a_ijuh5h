import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Layers, ZoomIn, GitBranch, FileCode2, MessageSquare, Command, BookOpen } from 'lucide-react'

export default function Features() {
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power2.out' })
    })
    return () => ctx.revert()
  }, [])

  const items = [
    { icon: Layers, title: 'Multi‑level diagrams', desc: 'Nest nodes without limits and drill down infinitely to model real systems.' },
    { icon: ZoomIn, title: 'Infinite zoom', desc: 'Smooth zooming transitions keep context while you explore details.' },
    { icon: MessageSquare, title: 'AI copilot', desc: 'Ask for changes, explanations, and best practices right in your canvas.' },
    { icon: GitBranch, title: 'GitHub integration', desc: 'Link repos, auto‑sync architecture, and open pull requests from nodes.' },
    { icon: FileCode2, title: 'Figma sync', desc: 'Embed frames, keep design and system diagrams in lockstep.' },
    { icon: Command, title: 'Command palette', desc: 'Do everything with swift, memorable commands—no deep menus.' },
    { icon: BookOpen, title: 'Tutorials & templates', desc: 'Step‑by‑step guides and ready‑made blueprints to get productive fast.' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Everything you need to think in systems</h2>
        <p className="text-gray-600 mt-3 text-center max-w-2xl mx-auto">Model, iterate, and communicate complex software with clarity.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} ref={el => cardsRef.current[i] = el} className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition bg-white">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center mb-3">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
