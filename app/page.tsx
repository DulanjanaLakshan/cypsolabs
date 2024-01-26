import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <Image
              src="/assets/under-maintenance.png"
              alt="under maintenance Image"
              width={1000}
              height={240}
              priority
            />
      <h3 className="text-2xl font-bold text-blue-950 opacity-75">we are under maintenance.</h3>
      <h3 className="text-1xl font-bold text-blue-950 opacity-55">will be back soon!</h3>
      <p className="text-xs absolute bottom-2  opacity-75">Contact Us :  office.cypsolabs@gmail.com /  +94 78 724 7012</p>
    </main>
  );
}
