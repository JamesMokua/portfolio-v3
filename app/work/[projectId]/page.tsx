import { useRouter } from "next/router";
import { expertise } from "../../../components/data/expertise";
export default function Page({ params }: any) {
  const post = expertise.find((post) => post.id === parseInt(params.projectId));
  if (!post) {
    return <div className="text-white text-5xl">Loading...</div>; // or show an appropriate message
  }
  return (
    <div className="text-white px-10 flex flex-col justify-center items-center">
      <h1 className=" text-5xl">{post.title}</h1>
      <div className="text-2xl pt-10">
        {post.desc}
      </div>
      <div className="text-lg  pt-10">
        {post.techStack}
      </div>
      
    </div>
  );
}
