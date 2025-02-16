import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="flex gap-4 mt-10 items-center">
        <h1 className="text-4xl tracking-wider">
          <span className="text-purple-400">#</span>about-me
        </h1>
        <div className="flex-1 h-[1px] bg-purple-400"></div>
      </div>
      <p className="tracking-wide text-gray-400 mt-10">
        Hello, i’m Thien An! I’m a self-taught front-end developer . I can
        develop responsive websites from scratch and raise them into modern
        user-friendly web experiences. Transforming my creativity and knowledge
        into a websites has been my passion for over a year. I have been helping
        various clients to establish their presence online. I always strive to
        learn about the newest technologies and frameworks.
      </p>
    </div>
  );
}
