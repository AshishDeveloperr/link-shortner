import { useState } from 'react'
import axios from 'axios'
import Logo from './assets/img/logo.png'
import {ENDPOINTS} from './config/endpoints'

function App() {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleShorten = async ()=>{
    if(!url){
      setError('Please enter a URL');
      setTimeout(() => setError(''), 3000);
      return;
    }

    setLoading(true);
    setError('');
    setShortUrl('');

    try{
      const response = await axios.post(ENDPOINTS.LINKS.CREATE, {originalUrl: url});
      setShortUrl(`${window.location.origin}/${response.data.data.shortUrl}`);
    }catch(err: any){
      setError(err.response?.data?.error || 'Something went wrong');
      setTimeout(() => setError(''), 3000);
    }finally{
      setLoading(false);
    }
  }

  const handleCopy = async ()=>{
    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(()=> setCopied(false), 2000);
  }

  return (
    <>
      <section className="min-h-screen bg-gradient-animation flex justify-center items-center px-4 relative">
        <div className="w-full max-w-2xl md:px-6 -mt-20">
          <div className="flex justify-center">
            <img src={Logo} alt="Logo" className="h-20" />
          </div>
          <h1 className="text-xl font-bold text-center text-white mb-8">Link Shortener</h1>
          
          <div className="relative">
            <input 
              type="url" 
              placeholder="Paste your long URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleShorten()}
              className="w-full px-6 py-4 bg-zinc-900/80 border border-zinc-700 rounded-full text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-500 text-base"
            />
            <button 
              onClick={handleShorten}
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors cursor-pointer disabled:opacity-50"
            >
              {loading ? 'Shortening...' : 'Shorten'}
            </button>
          </div>

          {error && (
            <div className="flex items-center max-w-sm p-4 mt-4 mx-auto text-white bg-red-900/90 rounded-xl border border-red-700 absolute top-4 right-4 w-xs" role="alert">
                <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-red-300 bg-red-800 rounded">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                </div>
                <div className="ms-3 text-sm font-normal">{error}</div>
                <button 
                  type="button" 
                  onClick={() => setError('')}
                  className="ms-auto flex items-center justify-center text-white hover:bg-red-800 rounded text-sm h-8 w-8"
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                </button>
            </div>
          )}

          {shortUrl && (
            <div className="mt-6 p-4 bg-zinc-900/80 border border-zinc-700 rounded-2xl flex items-center justify-between gap-4">
              <a 
                href={shortUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 truncate"
              >
                {shortUrl}
              </a>
              <button
                onClick={handleCopy}
                className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default App
