import { StaticImageData } from "next/image"

export type PopularServicesType = {
  id: string | number
  title: string
  image: string | StaticImageData
  desc?: string
  content?: string
  badges: Array<{
    title: string
    color?: string
    className?: string
  }>
}

const PopularServices: Array<PopularServicesType> = [
  {
    id: 0,
    title: "Logo Design",
    badges: [{ title: "Popular" }],
    image:
      "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    content: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt iure sint tempora vel fuga dolores temporibus provident saepe facere sequi soluta, similique accusamus?",
  },
  {
    id: 2,
    title: "Wordpress",
    badges: [{ title: "Trending", color: "bg-yellow text-typo" }],
    image:
      "https://images.unsplash.com/photo-1566207474742-de921626ad0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    content: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt iure sint tempora vel fuga dolores temporibus provident saepe facere sequi soluta, similique accusamus?",
  },
  {
    id: 3,
    title: "Voice Over",
    badges: [],
    image:
      "https://images.unsplash.com/photo-1638389746457-ac5ff8228bec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    content: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt iure sint tempora vel fuga dolores temporibus provident saepe facere sequi soluta, similique accusamus?",
  },
  {
    id: 4,
    title: "DAPP Development",
    badges: [],
    image:
      "https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    content: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt iure sint tempora vel fuga dolores temporibus provident saepe facere sequi soluta, similique accusamus?",
  },
  {
    id: 5,
    title: "Video Editing",
    badges: [],
    image:
      "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt iure sint tempora vel fuga dolores temporibus provident saepe facere sequi soluta, similique accusamus?",
  },
]

export default PopularServices
