import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{backgroundImage: "url(/main-bg.webp)"}}>
        <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
          <h1 className='text-[50px] text-white font-semibold'>
            Balıkesirde Profesyonel 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
             {" "} Web Tasarım Hizmetleri
            </span>
          </h1>
          <p className='text-gray-200 hidden md:block'>
          Mobil Uyumlu, Estetik ve Etkili Çözümlerimizle Öne Çıkın! İhtiyaçlarınıza Özel Web Tasarımı İçin Hemen İletişime Geçin.          </p>
          <div className='flex-col md:flex-row hidden md:flex gap-5'>
            <Link 
            href="/neler-yapiyoruz" className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              Neler Yapıyoruz?
            </Link>
            <Link 
            href="/projelerimiz" className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20'/>
              Projelerimiz
            </Link>
            <Link 
            href="/bize-yazin" className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20'/>
              Bize yazın
            </Link>
          </div>
        </div>
      </div>

      <div className='absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5'>
            <Link 
            href="/neler-yapiyoruz" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
            Neler Yapıyoruz?
            </Link>
            <Link 
            href="/projelerimiz" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
            Projelerimiz
            </Link>
            <Link 
            href="/bize-yazin" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
            Bize yazın
            </Link>
          </div>

          <div className='absolute bottom-0 right-0 z-[10]'>
            <Image 
            src="/horse.png"
            alt="horse"
            height={300}
            width={300}
            className='absolute right-55 top-40'
            />

            <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
          </div>

          <div className='absolute bottom-0 z-[5] w-full h-auto'>
            <Image
            src="/trees.webp"
            alt="trees"
            width={2000}
            height={2000}
            className='w-full h-full'
            />
          </div>
          <Image 
            src="/stars.png"
            alt="stars"
            height={300}
            width={300}
            className='absolute top-0 left-0 z-[10]'
            />
    </main>
  )
}
