import Image from "next/image";
import { FaStar } from "react-icons/fa";
import "./Review.css/Review.css"; // Import custom CSS

interface Props {
  review: {
    name: string;
    review: string;
    rating: string;
    profession: string;
    image: string;
  };
}

const ReviewCard = ({ review }: Props) => {
  const { image, name, rating, profession, review: clientReview } = review;

  return (
    <div className="review-card">
      {/* Top Section */}
      <div className="review-card-content">
        <Image src={"/images2/q.png"} alt={"quote"} width={50} height={50} />
        <p className="review-card-text">{clientReview}</p>
        <Image
          src={"/images2/q.png"}
          alt={"quote"}
          width={50}
          height={50}
          className="ml-auto"
        />
      </div>

      {/* Rating Box */}
      <div className="rating-box">
        <span>{rating}/5</span>
        <FaStar />
      </div>

      {/* Client Info */}
      <div className="client-info">
        <div className="client-info-content">
          <Image
            src={image}
            alt={name}
            width={40}
            height={40}
            className="client-info-image"
          />
          <div>
            <h1 className="client-info-name">{name}</h1>
            <p className="client-info-profession">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
