// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// // import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
export async function getStaticProps({ params }) {
  console.log(params)
  return {
    props: {
      id: '1',
      message: "test"
    }
  }
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: [ {params: { id: '1' }}],
    fallback: true
  }
}

export default function Blog(params) {
  console.log(params)
  return (
    <h1>Blog {params.id}</h1>
  )
}