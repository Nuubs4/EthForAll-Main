import React from "react"
import { InferGetServerSidePropsType } from "next"

import Categories from "../../../components/client/Categories"
import ClientFooter from "../../../components/layout/client-footer/ClientFooter"
import ClientNavbar from "../../../components/layout/client-navbar/ClientNavbar"
import clientPromise from "../../../utils/db/clientPromise"

const index = ({ gigs }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(gigs)
  return (
    <div>
      <ClientNavbar />
      <Categories />
      <ClientFooter />
    </div>
  )
}

export default index

export const getServerSideProps = async () => {
  try {
    const client = await clientPromise

    const db = client.db("Decentralance")

    const gigs = await db.collection("gigs").find({}).sort({ metacritic: -1 }).limit(20).toArray()

    return {
      props: { gigs: JSON.parse(JSON.stringify(gigs)) },
    }
  } catch (e) {
    console.error(e)
  }
}
