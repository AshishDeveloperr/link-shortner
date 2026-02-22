// import { useState } from 'react'
import Logo from './assets/img/logo.png'

function App() {

  return (
    <>
      <section className="min-h-screen bg-gradient-animation flex items-center justify-center">
        <div className="w-full max-w-2xl px-6">
          <div className="flex justify-center">
            <img src={Logo} alt="Logo" className="h-20" />
          </div>
          <h1 className="text-xl font-bold text-center text-white mb-8">Link Shortener</h1>
          
          <div className="relative">
            <input 
              type="url" 
              placeholder="Paste your long URL here..."
              className="w-full px-6 py-4 bg-zinc-900/80 border border-zinc-700 rounded-full text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-500 text-base"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors">
              Shorten
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
