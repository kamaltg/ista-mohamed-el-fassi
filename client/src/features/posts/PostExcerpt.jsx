import { selectPostById } from "@/features/posts/postSlice";
import { FaCalendarAlt, FaLongArrowAltRight, FaTags } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PostExcerpt({ postId }) {
  const post = useSelector((state) => selectPostById(state, postId));

  return (
    <article className="hover:bg-gray/10 group relative isolate flex flex-col gap-8 px-6 py-8 md:flex-row">
      {/* image */}
      <div className="w-full overflow-hidden md:h-60 md:max-w-sm">
        <img
          className="h-70 w-full object-cover object-top md:h-full"
          src={post.thumbnail}
          alt=""
        />
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="mb-4 space-y-2">
          {/* meta */}
          <div className="text-gray flex flex-wrap justify-start gap-4 text-sm">
            <span className="flex items-center gap-1">
              <FaCalendarAlt />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <FaTags />
              {post.tags.map((tag) => tag.name).join(", ")}
            </span>
            <span className="flex items-center gap-1">
              <IoPerson />
              {post.user.name}
            </span>
          </div>
          {/* title */}
          <h3 className="text-blue text-2xl font-bold">
            <Link to={`/tous-les-actualites/${post.id ?? 0}`}>
              <span className="absolute inset-0 z-2"></span>
              {post.title}
            </Link>
          </h3>
          {/* excerpt */}
          <p className="line-clamp-3 text-gray-700">{post.content}</p>
        </div>
        {/* read more */}
        <div
          aria-hidden={true}
          className="text-green flex w-fit items-center gap-2 font-bold">
          <span className="group-hover:underline">Continuer la lecture</span>
          <FaLongArrowAltRight />
        </div>
      </div>
    </article>
  );
}

export default PostExcerpt;
