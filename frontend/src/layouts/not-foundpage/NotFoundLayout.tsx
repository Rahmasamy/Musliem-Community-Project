import './Notfound.css'
import { Link } from 'react-router-dom'
import NotFound from '@/assets/imgs/notfound.png'
export default function NotFoundLayout() {
  return (
     <div className="Notfound h-screen flex flex-col gap-2 justify-center items-center bg-gray-100 text-center">
     <img src={NotFound} alt="Not Found Image" />
      <p className="text-4xl font-bold text-gray-800">Oops! </p>
      <p className="mt-2 text-gray-600">The page you're looking for can't be found.</p>
      <Link to="/" className="mt-4 text-blue-500 go-home">
        Go to Home
      </Link>
    </div>
  )
}
