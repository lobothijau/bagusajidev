import Head from 'next/head'
import { useState } from 'react'

const tabs = [
  "Mobile Development",
  "Books",
  "Courses",
]
const contents = [
  [
    {
      title: "BUMA Digiman",
      year: 2021,
      platform: "Android (Kotlin)",
      cover: "",
      images: [],
      url: "https://play.google.com/store/apps/details?id=com.bukitmakmur.digiman"
    },
    {
      title: "JBA Bidding",
      year: 2021,
      platform: "Flutter",
      cover: "",
      images: [],
      url: "https://play.google.com/store/apps/details?id=id.logique.jbabiddingrevamp"
    },
    {
      title: "Gadai ValueMax",
      year: 2021,
      platform: "Flutter",
      cover: "",
      images: []
    },
    {
      title: "Sinar Mas Land Career",
      year: 2021,
      platform: "Android (Java)",
      cover: "",
      images: [],
      url: "https://play.google.com/store/apps/details?id=com.sinarmasland.rnd.mobileerec.external"
    },
  ],
  [
    {
      title: "Ubuntu Untuk Semua",
      year: 2016,
      description: "Helps beginner to learn Ubuntu Linux."
    },
    {
      title: "Membangun Progressive Web App",
      year: 2019,
      description: "Learn PWA building blocks to build web app with native-like features."
    },
  ],
  []
]

function Tab({ title, isActive }) {
  return (
    <button className={`text-center px-4 py-2 ${isActive ? 'rounded-md border-slate-400 border-2' : ''}`}>
      {title}
    </button>
  )
}

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="">
      <Head>
        <title>Bagus Aji Santoso | Teacher, Writer &amp; Programmer</title>
        <meta name="description" content="Bagus Aji Santoso | Teacher, Writer &amp; Programmer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center mt-16 w-6/12 ml-auto mr-auto">
        <img className='ml-auto mr-auto w-48 rounded-full shadow-lg border-gray-100' src="/me.jpg" />
        <h1 className="text-3xl font-black my-5">
          Bagus Aji Santoso
        </h1>

        <p className="">
          Under construction. Please visit my <a style={{ color: 'red' }} href="https://www.linkedin.com/in/baguzzzaji/">LinkedIn profile</a> to keep in touch.
        </p>

        <nav className="mt-5">
          <ul className="flex flex-row justify-center space-x-5">
            {tabs.map((tab, index) => (
              <li key={index} onClick={() => setSelectedIndex(index)}>
                <Tab title={tab} isActive={index == selectedIndex} />
              </li>
            ))}
          </ul>
        </nav>

        <ul className='flex flex-col items-start mt-5'>
        {
          contents[selectedIndex].map((content, index) => (
            <li>{content.year} - <a href={content.url} target={'_blank'}>{content.title}</a></li>
          ))
        }
        </ul>
      </main>
    </div>
  )
}
