import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <div style={{backgroundColor:"#373535"}} className='relative z-50 h-[40vh] pt-[5vh] flex justify-around'>
      <div className='flex flex-col justify-around items-center'>
        <h2 className="font-bold text-3xl h-[5vh] flex items-start  justify-center">Other Websites</h2>
        <div className="flex flex-col">
          <Link className="mr-1" href={"https://salesailor.vercel.app/"}>
            SaleSailor
          </Link>
          <Link className="mr-1" href={"https://budget-orpin.vercel.app/"}>
            Budget
          </Link>
          <Link className="mr-1" href={"https://password-manager-fawn-phi.vercel.app/"}>
            Password Manager
          </Link>
        </div>
      </div>

      <div className='flex flex-col justify-around items-center'>
        <h2 className="font-bold text-3xl h-[5vh] flex items-start  justify-center">Car Models</h2>
        <div className="flex flex-col">
          <Link className="mr-1" href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}0`}>
            Porsche 911
          </Link>
          <Link className="mr-1" href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}1`}>
            BMW M3
          </Link>
          <Link className="mr-1" href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}2`}>
            Porsche Gt3
          </Link>
          <Link className="mr-1" href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}3`}>
            Jiotto Caspita F1
          </Link>
          <Link className="mr-1" href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}4`}>
            Nissan Skyline Gtr
          </Link>
          <Link className="mr-1" href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}5`}>
            BMW M4
          </Link>
        </div>
      </div>
      <div className='flex flex-col justify-around items-center'>
        <h2 className="font-bold text-3xl h-[5vh] flex items-start  justify-center">Contact Us</h2>
        <div className="flex flex-col">
          <Link className="mr-1 flex items-center gap-1" href={""}>
            <Image src={"/github.png"} alt={"Github"} height={40} width={40}></Image>
            Github
          </Link>
          <Link className="mr-1 flex items-center gap-1" href={""}>
            <Image src={"/instagram.png"} alt={"instagram"} height={40} width={40}></Image>
            Instagram
          </Link>
          <Link className="mr-1 flex items-center gap-1" href={""}>
            <Image src={"/yt.png"} alt={"youtube"} height={40} width={40}></Image>
            YouTube
          </Link>
        </div>
      </div>
    </div>
  )
}


