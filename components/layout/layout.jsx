import AppHeader from '../app-header/app-header'

export default function Layout({ children }) {
  return (
    <div className="p-6 bg-neutral-900 h-screen text-gray-50">
      <AppHeader />
      {children}
    </div>
  )
}
