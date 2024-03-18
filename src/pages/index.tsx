// pages/index.tsx

import Head from 'next/head';
import { ReactNode } from 'react';
import { Metadata } from 'next';

interface Props {
  children?: ReactNode;
}

export const metadata: Metadata = {
  title: 'Next Static Boilerplate',
  description: 'a simple boilerplate for static sites with Next.js',
};

export default function Home({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Next Static Boilerplate</title>
        <meta name="description" content="Your description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="mb-8 bg-white p-8 rounded-lg shadow-lg text-black min-w-fit	">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Welcome to Next Static Boilerplate</h1>
            <p className="text-lg mt-4">
              a simple boilerplate for static sites with Next.js
            </p>
          </header>

          <section className="mb-8">
            <p className="text-lg">
              Get started by editing <code className='text-primary'>src/pages/index.tsx</code>
            </p>
          </section>

          <section className="mb-8">
            <p className="text-lg">
              after that, run <code className='text-primary'>npm run dev</code> to start the development server
            </p>
          </section>

          <section className="mb-8">
            <p className="text-lg">
              or run <code className='text-primary'>npm run build</code> to build the project
            </p>
          </section>

        </div>
      </main>

      <footer className="text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} <a href="kuray.dev">kuray.dev</a></p>
      </footer>
    </div>
  );
}
