import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="text-center w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to FFXIV Raid Tracker</h2>
      <p className="text-gray-600 mb-6">Search for characters and see if you've raided with them before.</p>
      <Link
        to="/search"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Start Searching
      </Link>
    </div>
  )
}
