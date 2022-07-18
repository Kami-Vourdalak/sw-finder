import AppHeader from '../app-header/app-header'

export default function Layout({ children }) {
  return (
    <div className="bg-neutral-900 h-screen overflow-hidden text-gray-50 max-h-full">
      <div className="overflow-auto h-full">
        <AppHeader />
        {children}
      </div>
    </div>
  )
}
