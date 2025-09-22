export default function Footer(){
  return (
    <footer className="bg-gfg-700 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src="/team/mainlogo.png" 
              alt="GeeksforGeeks Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <div className="font-bold">GFG Campus Body — GCET</div>
            <div className="text-sm opacity-90">Campus Body 2025-26</div>
          </div>
        </div>
        <nav className="flex gap-6">
          <a href="#home" className="hover:text-gfg-200 transition-colors">Home</a>
          <a href="#team" className="hover:text-gfg-200 transition-colors">Team</a>
          <a href="#about" className="hover:text-gfg-200 transition-colors">About</a>
          <a href="#contact" className="hover:text-gfg-200 transition-colors">Contact</a>
        </nav>
      </div>
      <p className="text-center mt-6 text-sm opacity-90">Made with ❤️ by GFG Campus Body GCET</p>
    </footer>
  )
}