import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="flex items-center gap-4 mt-10">
        <h1 className="text-4xl tracking-wider">
          <span className="text-purple-400">#</span>projects
        </h1>
        <div className="w-full h-[1px] bg-purple-400"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <div className="border border-gray-400 border-collapse">
          <Image
          className="mx-auto"
            src="/preschool.png"
            width={200}
            height={200}
            alt="preschool"
          />
          <h2 className="p-2 border  border-gray-600 text-gray-400">
            React, Mongodb, Tailwind Css, Nodejs
          </h2>
          <div className="p-2 border border-gray-600 flex flex-col gap-4 ">
            <h2 className="text-2xl">Preschool Management</h2>
            <p className="text-gray-400 ">
              A website is used to manage preschool
            </p>

            <Link className="border  p-2 text-center border-purple-400" href="/">
              Live
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
