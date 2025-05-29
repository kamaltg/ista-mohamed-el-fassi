import PostsExcerpt from "@/features/posts/PostExcerpt";
import { selectPostIds, useGetPostsQuery } from "@/features/posts/postSlice";
import { useSelector } from "react-redux";

function PostsList() {
  const { isLoading, isSuccess, isError, error } = useGetPostsQuery();
  const orderedPostIds = useSelector(selectPostIds);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = orderedPostIds.map((postId) => (
      <div key={postId} className="divide-gray/30 divide-y-1">
        <PostsExcerpt postId={postId} />
      </div>
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
}

export default PostsList;
