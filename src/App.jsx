import React from 'react'
import { useState, useEffect, Suspense, lazy } from 'react'

console.log("UI LAB RUNNING")

const deviceSizes = {
  desktop: '100%',
  tablet: '768px',
  mobile: '375px'
}

const deviceLabels = {
  desktop: 'Desktop',
  tablet: 'Tablet',
  mobile: 'Mobile'
}

// Simple Error Boundary - the single most important missing feature
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Component failed to render:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center text-red-500 bg-red-50 h-64 flex items-center justify-center flex-col gap-2">
          <p className="font-semibold">Component failed to load</p>
          <p className="text-xs text-gray-500">Check the console for errors</p>
        </div>
      )
    }

    return this.props.children
  }
}

const LoadingSpinner = ({ size = 8 }) => (
  <div className={`animate-spin rounded-full h-${size} w-${size} border-b-2 border-blue-500`}></div>
)

function formatComponentName(filename) {
  const name = filename.replace('./components/', '').replace('.jsx', '')
  return name.replace(/([A-Z])/g, ' $1').trim()
}

function App() {
  const [components, setComponents] = useState({})
  const [selectedComponent, setSelectedComponent] = useState('')
  const [device, setDevice] = useState(() => localStorage.getItem('uipreview_device') || 'desktop')
  const [viewMode, setViewMode] = useState(() => localStorage.getItem('uipreview_viewmode') || 'single')
  const [loading, setLoading] = useState(true)

  // Persist preferences to localStorage
  useEffect(() => localStorage.setItem('uipreview_device', device), [device])
  useEffect(() => localStorage.setItem('uipreview_viewmode', viewMode), [viewMode])
  useEffect(() => {
    if(selectedComponent) localStorage.setItem('uipreview_component', selectedComponent)
  }, [selectedComponent])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e) => {
      // Ignore if user is typing in an input
      if(e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return

      if(e.key === '1') setDevice('desktop')
      if(e.key === '2') setDevice('tablet')
      if(e.key === '3') setDevice('mobile')
      if(e.key === 'g') setViewMode('grid')
      if(e.key === 's') setViewMode('single')
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    const loadComponents = async () => {
      const modules = import.meta.glob('./components/*.jsx')
      const loaded = {}
      
      for (const path in modules) {
        const name = formatComponentName(path)
        loaded[name] = lazy(modules[path])
      }
      
      setComponents(loaded)
      const names = Object.keys(loaded)
      if (names.length > 0) {
        const lastSelected = localStorage.getItem('uipreview_component')
        setSelectedComponent(lastSelected && names.includes(lastSelected) ? lastSelected : names[0])
      }
      setLoading(false)
    }
    
    loadComponents()
  }, [])

  // Scroll to top when switching component
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [selectedComponent])

  const componentNames = Object.keys(components)

  const renderComponent = (name) => {
    const Component = components[name]
    return (
      <Suspense fallback={
        <div className="flex items-center justify-center h-64">
          <LoadingSpinner />
        </div>
      }>
        <ErrorBoundary>
          <Component />
        </ErrorBoundary>
      </Suspense>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <LoadingSpinner size={12} />
      </div>
    )
  }

  if(componentNames.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col gap-3">
        <p className="text-gray-500 text-lg">No components found</p>
        <p className="text-gray-400 text-sm">Add JSX components to /src/components/ folder</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-gray-900">UI Preview Lab</h1>
              <span className="text-sm text-gray-500">|</span>
              <span className="text-sm text-gray-500">{componentNames.length} Components</span>
              <span className="text-xs text-gray-400">⌨️ G S 1 2 3</span>
            </div>

            <div className="flex items-center space-x-4">

              {viewMode === 'single' && (
                <>
                  <select
                    value={selectedComponent}
                    onChange={(e) => setSelectedComponent(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white text-sm font-medium min-w-[180px]"
                  >
                    {componentNames.map(name => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>

                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    {Object.keys(deviceSizes).map((deviceKey) => (
                      <button
                        key={deviceKey}
                        onClick={() => setDevice(deviceKey)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                          device === deviceKey
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {deviceLabels[deviceKey]}
                      </button>
                    ))}
                  </div>
                </>
              )}

              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('single')}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'single'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Single View
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Grid View
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="p-6">
        {viewMode === 'single' ? (
          <div className="flex justify-center">
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300"
              style={{ width: deviceSizes[device] }}
              key={selectedComponent}
            >
              {renderComponent(selectedComponent)}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {componentNames.map((name) => (
              <div
                key={name}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700">{name}</h3>
                </div>
                <div className="overflow-auto" style={{ maxHeight: '500px' }}>
                  {renderComponent(name)}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App