import s from '@/styles/index.module.scss';
import Head from 'next/head'
import Image from 'next/image'
import { TbCloudUpload } from 'react-icons/tb'
import { FaRegLaughBeam } from 'react-icons/fa'
import { MdOutlineSaveAlt, MdOutlineImageSearch } from 'react-icons/md'


export default function Home() {
  return (
    <>
      <Head>
        <title>Join Meeme</title>
        <meta name="description" content="Save, search, and share your favorite memes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={s.main}>

        <div className={s.banner}>
          <Image
            className={s.logo_text}
            src="/logo_text.svg"
            alt="Meeme"
            width={250}
            height={80}
            priority
          />
          <div className={s.logo}>
            <Image
              src="/logo.svg"
              alt="Meeme Logo"
              width={52.5}
              height={52.5}
              priority
            />
          </div>
        </div>

        <div className={s.grid}>

          <div className={s.card}>
            <h2>Save <MdOutlineSaveAlt className={s.icon_1}/></h2>
            <p>Easily download and save your memes from anywhere.</p>
          </div>

          <div className={s.card}>
            <h2>Store <TbCloudUpload className={s.icon_2}/></h2>
            <p>Securely store your memes in the cloud for easy access.</p>
          </div>

          <div className={s.card}>
            <h2>Search <MdOutlineImageSearch className={s.icon_3}/></h2>
            <p>Instantly find that meme you can&#39;t remember the name of.</p>
          </div>

          <div className={s.card}>
            <h2>Share <FaRegLaughBeam className={s.icon_4}/></h2>
            <p>Send your memes to friends and family with just a tap.</p>
          </div>

        </div>
      </main>
    </>
  )
}
