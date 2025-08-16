import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/search')({
  component: Search,
})

function Search() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Search for Characters</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <form className="space-y-4">
          <div>
            <label htmlFor="characterName" className="block text-sm font-medium text-gray-700">
              Character Name
            </label>
            <input
              type="text"
              id="characterName"
              name="characterName"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter character name..."
            />
          </div>
          <div>
            <label htmlFor="server" className="block text-sm font-medium text-gray-700">
              Server
            </label>
            <select
              id="server"
              name="server"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select a server...</option>
              <option value="aether">Aether</option>
              <option value="crystal">Crystal</option>
              <option value="primal">Primal</option>
              <option value="dynamis">Dynamis</option>
            </select>
            <Button className="w-full">Search</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
