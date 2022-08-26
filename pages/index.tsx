import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">


        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Bot Shop !
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Need a Telegram bot for your community? Fill out this form:
       
        </p>
        <div className="bg-red">
        <ContactForm/>
        </div>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">

   <p className="hidden">“Attention bot shoppers! Take advantage of our penny bot sale! If you buy one piece of bot at the regular price, you get another piece of bot of equal or lesser value for only a penny! Try and beat bot for a penny! If you can find cheaper bot anywhere else, fuck it!</p>

        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
      © Underpants Gnomes Inc.
      </footer>
    </div>
  )
}

export default Home
