import React, { useCallback } from 'react'
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from 'reactflow'
import 'reactflow/dist/style.css'

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'System' } },
  { id: '2', position: { x: 200, y: 60 }, data: { label: 'Service A' } },
  { id: '3', position: { x: 200, y: -60 }, data: { label: 'Service B' } },
]
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }, { id: 'e1-3', source: '1', target: '3' }]

export default function FlowDemo() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onConnect = useCallback(params => setEdges(eds => addEdge(params, eds)), [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Try a mini flow</h2>
        <div style={{ height: 360 }} className="rounded-xl border border-gray-200 overflow-hidden">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          >
            <MiniMap />
            <Controls />
            <Background gap={16} />
          </ReactFlow>
        </div>
      </div>
    </section>
  )
}
