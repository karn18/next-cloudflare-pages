// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// // import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
// export async function getStaticProps({ params }) {
//   console.log(params)
//   return {
//     props: {
//       id: '1',
//       message: "test"
//     }
//   }
// }

// export async function getStaticPaths() {
//   return {
//     paths: [ {params: { id: '1' }}],
//     fallback: true
//   }
// }

export default function Blog(params) {
  console.log(params)
  return (
    <h1>Blog {params.id}</h1>
  )
}

export function parsePath(pathname, ctx) {
  const pattern = new URLPattern({ pathname });
  const result = pattern.exec(`http://host${ctx.req?.url}`);
  console.log(result)
  return result?.pathname.groups || {};
}

export async function getServerSideProps(ctx) {
  const { id } = parsePath('/blogs/:id', ctx)
  // Run API calls in parallel
  console.log(id)
  // console.log(homepageRes)

  return {
    props: {
      id: id
    },
  }
}