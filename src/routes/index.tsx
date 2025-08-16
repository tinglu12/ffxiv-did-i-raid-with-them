import { createFileRoute, Link } from '@tanstack/react-router'
import LinkForm from '@/features/character-input/components/LinkForm'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="text-center w-full h-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to FFXIV Raid Tracker</h2>
      <p className="text-gray-600 mb-6">Search for characters and see if you've raided with them before.</p>
      <div className="flex justify-center w-[70%] mx-auto">
        <LinkForm />
      </div>
    </div>
  )
}
