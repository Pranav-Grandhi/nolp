import BeautyStars from "./StarRating";

interface ReviewProps {
  imgsrc: string
  username: string
  rating: number
  text: string
}

export default function Review({
    imgsrc,
    username,
    rating,
    text
}: ReviewProps) {
  return (
    <>
      <div className="mb-6">
        <div className="flex items-center">
            <img src={imgsrc} className="rounded-full w-8 h-8" />
            <p className="ml-3 font-semibold">{username}</p>
        </div>
        <div className="my-3">        
            <BeautyStars value={rating} size={20} activeColor="#EF4444" inactiveColor="#D1D5DB" />
        </div>
        {text}
      </div>
    </>
  )
}
