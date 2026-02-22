import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ENDPOINTS } from '../config/endpoints'

function Redirect() {
  const { shortUrl } = useParams<{ shortUrl: string }>()

  useEffect(() => {
    if (shortUrl) {
      window.location.href = ENDPOINTS.LINKS.GETLINK(shortUrl)
    }
  }, [shortUrl])

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
