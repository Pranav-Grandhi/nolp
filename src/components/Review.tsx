import BeautyStars from './StarRating'
import { LogoColor } from './vars'

interface BusinessReviewProps {
  imgsrc: string
  username: string
  rating: number
  text: string
  date: string
}

interface UserReviewProps {
  businessname: string
  location: string
  imgsrc: string
  rating: number
  text: string
  date: string
}

export function BusinessReview({
  imgsrc,
  username,
  rating,
  text,
  date,
}: BusinessReviewProps) {
  return (
    <>
      <div className="mb-6">
        <div className="flex items-center">
          <img src={imgsrc} className="rounded-full w-8 h-8" />
          <div className="ml-3 flex flex-col">
            <p className="font-semibold">{username}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="my-3">
          <BeautyStars
            value={rating}
            size={20}
            activeColor={LogoColor}
            inactiveColor="#D1D5DB"
          />
        </div>
        {text}
      </div>
    </>
  )
}

export function UserReview({
  location,
  businessname,
  imgsrc,
  rating,
  text,
  date,
}: UserReviewProps) {
  return (
    <>
      <div className="mb-6">
        <div className="flex items-center">
          <img src={imgsrc} className="rounded-full w-16 h-16" />
          <div className="ml-5 flex flex-col">
            <p className="font-semibold">{businessname}</p>
            <p className="text-sm text-gray-500">{location}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="my-3">
          <BeautyStars
            value={rating}
            size={20}
            activeColor="#F59E0B"
            inactiveColor="#D1D5DB"
          />
        </div>
        {text}
      </div>
    </>
  )
}
