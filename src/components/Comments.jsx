import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const Comments = ({ comment }) => {
  return (
    <div className=" flex p-2">
      <div className="flex items-center gap-2 mb-3 flex-shrink-0">
        <img
          className="rounded-full w-12 h-12 i"
          src={comment.authorThumbnail[0].url}
          alt="authorThumbnail"
        />
      </div>
      <div className="ml-5  ">
        <div className="flex gap-2 ">
          <p className="font-bold ">{comment.authorText}</p>
          <p className="text-sm text-gray-400">{comment.publishedTimeText}</p>
        </div>

        <p>{comment.textDisplay}</p>

        <div className="flex items-center mt-2 gap-3  text-sm">
          <div className="flex gap-2 items-center cursor-pointer">
            <AiFillLike />
            <p className="inline-flex">{comment.likesCount}</p>
          </div>

          <div className="flex gap-2 items-center cursor-pointer">
            <AiFillDislike />
            <p className="hover:bg-gray-400 rounded-full p-2 cursor-pointer font-bold">
              Yanıtla
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 py-1 px-2 mt-2 rounded-full cursor-pointer text-[#3DA3FA] hover:bg-[#263850]">
          {comment.replyCount !== 0 && <IoMdArrowDropdown />}
          <p>{comment.replyCount === 0 ? "" : comment.replyCount + " yanıt"}</p>
        </span>
      </div>
    </div>
  );
};

export default Comments;
