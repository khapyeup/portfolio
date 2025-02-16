import Image from "next/image";

export default function Page() {
  return (
    <>
    <main className="h-full flex gap-10 flex-col py-10">
      <div className="flex items-center justify-center md:justify-between w-full gap-2 ">
        <div className="space-y-4">
          <h1 className="text-2xl tracking-wider font-semibold">
            Thien An is a <span className="text-purple-400">web developer</span>
          </h1>
          <p className="text-gray-400 tracking-widest">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="border border-purple-400 px-4 py-2 tracking-wider hover:bg-purple-400 rounded-sm transition-colors">
            Contact me !!
          </button>
        </div>
        <div className="hidden md:block">
          <Image
            className=""
            src="/hero-image.png"
            width={500}
            height={500}
            alt="Hero image"
          />
        </div>
      </div>
      <footer className="text-center">
        <div className=" relative inline-block">
          
          <p className="border border-gray-500 text-xl p-4 tracking-wider ">
            With great power comes great electricity bill
          </p>
          <div className="text-end">
            <p className="inline-block border-gray-500 border p-4  text-xl tracking-wider">
              {" "}
              - Dr. Who
            </p>
          </div>
        </div>
      </footer>

    </main>
    </>
  );
}
