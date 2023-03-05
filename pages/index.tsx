import s from '@/styles/index.module.scss';
import Head from 'next/head'
import Image from 'next/image'


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
            className={s.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={s.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={s.grid}>

          <a href="/" target="_blank" rel="noopener noreferrer" className={s.card}>
            <h2>Save <span>-&gt;</span></h2>
            <p>Easily upload and save your memes from anywhere.</p>
          </a>

          <a href="/" target="_blank" rel="noopener noreferrer" className={s.card}>
            <h2>Store <span>-&gt;</span></h2>
            <p>Securely store your memes in the cloud for easy access.</p>
          </a>

          <a href="/" target="_blank" rel="noopener noreferrer" className={s.card}>
            <h2>Search <span>-&gt;</span></h2>
            <p>Instantly find that meme you just can&#39;t remember the name of.</p>
          </a>

          <a href="/" target="_blank" rel="noopener noreferrer" className={s.card}>
            <h2>Share <span>-&gt;</span></h2>
            <p>Share your memes with friends and family with just a tap.</p>
          </a>

        </div>
      </main>
    </>
  )
}
