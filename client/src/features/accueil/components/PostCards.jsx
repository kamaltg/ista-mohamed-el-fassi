import "@/assets/swiper.css";
import RecentPost from "@/features/accueil/components/PostCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function PostCards({ posts }) {
  return (
    <div className="relative select-none">
      <Swiper
        keyboard={{ enabled: true }}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1 },
          600: { slidesPerView: 2, slidesPerGroup: 2 },
          // 768: { slidesPerView: 2, slidesPerGroup: 2 },
          1024: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
        navigation={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Navigation, Pagination]}
        className="recentPosts !pb-10 !pl-12 sm:!px-14" // push down the swiper content for pagination
      >
        {posts.map((post, index) => (
          <SwiperSlide key={`post-${index}`}>
            <RecentPost post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default PostCards;
