import {
  selectAllPosts,
  selectPostById,
  useGetPostsQuery,
} from "@/features/posts/postSlice";
import Container from "@/layouts/Container";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// icons
import { AiFillInstagram } from "react-icons/ai";
import { FaCalendarAlt, FaFacebook, FaTags } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoAttachOutline, IoPerson } from "react-icons/io5";

function PostDetail() {
  const { postId } = useParams();
  const numericPostId = Number(postId);

  const { isLoading } = useGetPostsQuery();

  // Select current post by ID
  const post = useSelector((state) => selectPostById(state, numericPostId));
  // Select all posts as an array
  const allPosts = useSelector(selectAllPosts);

  if (isLoading) return <div>Chargement...</div>;
  if (!post) return <div>Annonce introuvable</div>;

  return (
    <Container className="mt-14 flex flex-col-reverse gap-28 lg:flex-row lg:gap-8">
      {/* Recent Posts Section */}
      <div className="flex-1 space-y-8">
        <h4 className="w-fit text-2xl font-medium">
          Annonces Récents
          <div aria-hidden className="bg-blue mt-1 h-1 w-1/2"></div>
        </h4>

        <div className="divide-gray/50 divide-y-1">
          {allPosts.map((recentPost) => (
            <div
              key={recentPost.id}
              className="hover:bg-gray/10 relative space-y-2 p-4 text-center">
              <div className="max-h-50 w-full overflow-hidden">
                <img
                  className="mx-auto w-full object-cover"
                  src={recentPost.tumbnail}
                  alt=""
                />
              </div>
              <h5 className="text-blue mx-auto w-fit font-bold">
                <a href="#">
                  <span aria-hidden className="absolute inset-0"></span>
                  {recentPost.title}
                </a>
              </h5>
              <div className="text-gray mx-auto flex w-fit items-center gap-1 text-xs">
                <span>
                  <FaCalendarAlt />
                </span>
                <span>{recentPost.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Post Detail */}
      <article className="flex-2">
        <div className="text-gray text-md flex flex-wrap justify-start gap-4">
          <span className="flex items-center gap-1">
            <FaCalendarAlt />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <FaTags />
            {post.tags.join(", ")}
          </span>
          <span className="flex items-center gap-1">
            <IoPerson />
            {post.author}
          </span>
        </div>

        <h3 className="text-green mt-4 text-4xl font-bold">{post.title}</h3>
        <p className="mt-8">{post.content}</p>

        {/* Attachments */}
        <div>
          <h4 className="mt-12 mb-6 w-fit text-2xl font-bold">
            Pièces Jointes
            <div className="bg-green mt-1 h-1 w-1/2"></div>
          </h4>
          <ul className="text-green space-y-2">
            {post.post_attachements.map(({ file_path }, idx) => (
              <li
                key={idx}
                className="border-gray/20 hover:border-gray hover:bg-gray/5 flex cursor-pointer items-center gap-2 rounded-full border-1 px-8 py-4 text-xl transition-colors duration-300">
                <IoAttachOutline />
                {file_path}
              </li>
            ))}
          </ul>
        </div>

        {/* Share Buttons */}
        <div className="w-fit">
          <h4 className="mt-12 mb-6 w-fit text-2xl font-bold">
            Partager cette annonce
            <div className="bg-green mt-1 h-1 w-1/2"></div>
          </h4>
          <ul className="text-gray flex gap-4 text-4xl">
            <li className="cursor-pointer hover:text-green-700">
              <IoLogoWhatsapp />
            </li>
            <li className="cursor-pointer hover:text-blue-700">
              <FaFacebook />
            </li>
            <li className="cursor-pointer hover:text-red-700">
              <AiFillInstagram />
            </li>
            <li className="cursor-pointer hover:text-gray-900">
              <FaSquareXTwitter />
            </li>
          </ul>
        </div>
      </article>
    </Container>
  );
}
export default PostDetail;
