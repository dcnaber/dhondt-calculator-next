import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '../components/Navbar'
import Head from 'next/head'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '500', subsets: ['devanagari'] })
const poppins200 = Poppins({ weight: '400', subsets: ['devanagari'] })


export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Head>
        <link rel='icon' href='https://dcnaber.github.io/dhondt-calculator-next/favicon.ico' />
        <title>D'hondt Calculator</title>
      </Head>
        <NavBar />
      <main className={poppins200.className}>
        <div className={poppins.className}><h1 className={"text-3xl font-bold mb-4"}>What's D'Hondt Method?</h1></div>
        <p className="text-lg text-gray-700 leading-7 my-5 poppins">
          The D'Hondt method is a mathematical formula used to allocate seats in a proportional representation system. It is named after Belgian mathematician Victor D'Hondt, who developed the method in the late 19th century.
        </p>
        <p className="text-lg text-gray-700 leading-7 my-5 poppins">
          The D'Hondt method is commonly used in many countries around the world for allocating seats in parliamentary elections and other forms of proportional representation. The method works by dividing the total number of votes that each political party or candidate receives by a series of divisors that increase incrementally from one to the number of seats available. The party or candidate with the highest quotient at each round is awarded a seat, and the process is repeated until all seats are allocated.
        </p>
        <p className="text-lg text-gray-700 leading-7 my-5 poppins">
          One of the advantages of the D'Hondt method is that it tends to give more seats to larger parties or candidates, which can lead to more stable governments. However, it can also disadvantage smaller parties or candidates, as they may struggle to win any seats at all if their vote share is too small.
        </p>
        <p className="text-lg text-gray-700 leading-7 my-5 poppins">
          Overall, the D'Hondt method is just one of many different systems used to allocate seats in proportional representation elections, and each system has its own advantages and disadvantages depending on the specific context and goals of the election.
        </p>
      </main>
    </div>
  )
}
