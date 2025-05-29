import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <article
      key={`card-${post.index}`}
      className="relative max-w-sm overflow-clip rounded-2xl shadow-lg/20">
      <div
        className={`h-80 bg-cover bg-top`}
        style={{ backgroundImage: `url(${post.image})` }}>
        <div
          className="bg-blue flex h-full flex-col justify-between px-4 py-8 text-white"
          style={{
            clipPath: "polygon(0 0, 40% 0, 70% 100%, 0% 100%)",
          }}>
          <span className="bg-green max-w-1/2 px-4 py-2 text-center text-xs uppercase shadow-md">
            {post.category}
          </span>
          <div className="max-w-1/2 space-y-8">
            <h4 className="text-lg font-bold">{post.title}</h4>
            <p className="text-xs">{post.school}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray space-x-2 px-4 py-1 text-center text-white">
        <FontAwesomeIcon icon={faCalendar} />
        <span>{post.date}</span>
      </div>
      <h3 className="bg-gray/20 h-full p-4 text-center text-xl font-bold">
        <Link to={`#`}>
          {/* Make it a11y for screen readers */}
          <span className="absolute inset-0"></span>
          {post.title}
        </Link>
      </h3>
    </article>
  );
}

export default PostCard;
