import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Map your next big system in minutes</h2>
        <p className="text-slate-300 mt-3 max-w-2xl mx-auto">Start free. Invite your team. Upgrade anytime.</p>
        <div className="mt-8 flex justify-center">
          <a href="#" className="group inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-slate-100">
            Get started <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </div>
    </section>
  )
}
