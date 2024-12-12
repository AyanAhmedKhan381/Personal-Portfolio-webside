import Image from "next/image";
import "./blog.css/blog.css"; // Import custom CSS

interface Props {
  blog: {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
  };
}

const BlogCard = ({ blog }: Props) => {
  const { date, image, summary, title } = blog;

  return (
    <div className="blog-card">
      <Image src={image} alt={title} width={300} height={300} />
      <div className="blog-card-content">
        {/* News badge */}
        <p className="blog-news-badge">News</p>
        {/* Title */}
        <h1 className="blog-title">{title}</h1>
        {/* Summary */}
        <p className="blog-summary">{summary}</p>
        {/* Divider */}
        <div className="blog-divider"></div>
        <div className="flex items-center justify-between">
          {/* Date */}
          <h1 className="blog-date">{date}</h1>
          {/* Read More */}
          <button className="blog-read-more">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
