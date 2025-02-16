import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="flex gap-4 mt-10 items-center">
        <h1 className="text-4xl tracking-wider">
          <span className="text-purple-400">#</span>contacts
        </h1>
        <div className="flex-1 h-[1px] bg-purple-400"></div>
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-4 mt-10">
        <p className="tracking-wide text-gray-400 mt-10">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
        <div className="border border-gray-400 p-4">
          <p>Message me here</p>
          <Link className="text-gray-400" href="https://www.facebook.com/profile.php?id=100073170949068">Facebook</Link>
        </div>
      </div>
    </div>
  );
}
