export default function Footer() {
  return (
    <footer className="w-full border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500 flex justify-between">
        <span>© {new Date().getFullYear()} CareerPilot</span>
        <span>Built with ❤️</span>
      </div>
    </footer>
  );
}
