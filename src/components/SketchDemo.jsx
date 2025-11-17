import { useEffect, useRef } from 'react'
import rough from 'roughjs/bundled/rough.esm.js'

export default function SketchDemo() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const rc = rough.canvas(canvas)
    const w = canvas.width
    const h = canvas.height

    rc.rectangle(20, 20, w - 40, h - 40, { roughness: 2, bowing: 2.2, stroke: '#0f172a' })
    rc.circle(90, 90, 70, { fill: 'rgba(14,165,233,0.12)', stroke: '#0ea5e9' })
    rc.circle(200, 140, 50, { fill: 'rgba(34,197,94,0.12)', stroke: '#22c55e' })
    rc.line(120, 110, 200, 140, { stroke: '#64748b' })
  }, [])

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <canvas ref={ref} width={800} height={300} className="w-full" />
        </div>
      </div>
    </section>
  )
}
