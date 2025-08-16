import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="w-full bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 py-4">FFXIV Did I Raid With Them?</h1>
        </div>
      </header>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  ),
})
