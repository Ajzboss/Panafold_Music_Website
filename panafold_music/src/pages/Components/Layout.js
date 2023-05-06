import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Layout({children,home}){
    return (
        <>
        <Head>
        <title>Panafold Music</title>
        </Head>
        <div className=" w-full items-center justify-start font-mono text-sm flex px-10 py-10 border-b-2 border-blue-500 bg-white h-12 fixed z-50">
          <Image src="/panafold_logo.jpg"  width={30} height={30} alt="/"></Image>
    
        <p className="ml-5 font-bold text-lg whitespace-nowrap">
             Panafold Music
            </p>
        <div className='flex justify-end w-full'> 
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "> Sign In</button>
            <button className="bg-white hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded-full ml-5 border-2"> Sign Up</button>
          </div>
          </div>
        <main className={`flex min-h-screen flex-col items-left justify-between p-24 pl-12 pr-12 ${inter.className} bg-blue-100`}>
            {children}  
        </main>
        {!home &&
        <div className='opacity-100 transition duration-300 ease-in-out hover:opacity-50 fixed w-28 left-0 bottom-0 bg-slate-50 rounded-sm'>
        <Link className="z-50 font-bold" href='/'> Back To Home</Link>
        </div>
    }

        </>
    )
    
}