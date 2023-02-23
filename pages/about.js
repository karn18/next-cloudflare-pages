import React from "react"
import { fetchAPI } from "../lib/api"

const About = ({ homepage }) => {
  console.log(homepage)
  return (
    <h1>About</h1>
  )
}

export default About

// export async function getStaticProps({ params }) {
//   const homepageRes = await fetchAPI("/homepage", {
//     populate: {
//       hero: "*",
//       seo: { populate: "*" },
//     },
//   })

//   // console.log(homepageRes)

//   return {
//     props: {
//       homepage: homepageRes.data,
//     },
//   }
// }

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true
//   }
// }

export async function getServerSideProps() {
  // Run API calls in parallel
  const homepageRes = await fetchAPI("/homepage", {
    populate: {
      hero: "*",
      seo: { populate: "*" },
    },
  })

  // console.log(homepageRes)

  return {
    props: {
      homepage: homepageRes.data,
    },
  }
}