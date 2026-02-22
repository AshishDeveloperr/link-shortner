import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ENDPOINTS } from '../config/endpoints'

function Redirect() {
  const { shortUrl } = useParams<{ shortUrl: string }>()
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      if (!shortUrl) return

      try {
        const response = await axios.get(ENDPOINTS.LINKS.GETLINK(shortUrl))
        const originalUrl = response.data.data.originalUrl
        window.location.href = originalUrl
      } catch (err: any) {
        setError(err.response?.data?.error || 'Link not found')
      }
    }

    fetchOriginalUrl()
  }, [shortUrl])

  if (error) {
    return (
      <section className="min-h-screen bg-gradient-animation flex justify-center items-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Oops!</h1>
          <p className="text-red-400">{error}</p>
          <a href="/" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
            Go back home
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-animation flex justify-center items-center px-4">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white">Redirecting...</p>
      </div>
    </section>
  )
}

export default Redirect
