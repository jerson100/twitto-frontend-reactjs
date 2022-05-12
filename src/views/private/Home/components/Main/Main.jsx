import React from "react";
import Tweet from "../../../../../components/common/Tweet";
import { MainContainerStyle } from "../../home.style";

const twitts = [
  {
    user: {
      username: "jerson",
      gmail: "@jerson100",
      _id: "1515",
      img: "https://pbs.twimg.com/profile_images/1456456434187636736/bYB38_bW_bigger.jpg",
    },
    date: "1h",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet voluptate deserunt inventore aperiam magnam, ullam odio.Ex dolores qui nisi, tempore, velit aliquid dolorum sint eum esse fugiat aspernatur!",
    comments: 150,
    retwitts: 20,
    likes: 300,
    _id: 1,
  },
  {
    user: {
      username: "mateo1503",
      gmail: "@matep54",
      _id: "155",
      img: "https://pbs.twimg.com/profile_images/1322660411225874435/R4xkBm3w_x96.jpg",
    },
    date: "11h",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet voluptate deserunt inventore aperiam",
    comments: 10,
    retwitts: 2,
    likes: 30,
    _id: 2,
  },
  {
    user: {
      username: "quispe",
      gmail: "@qyispe,",
      _id: "10",
      img: "https://pbs.twimg.com/profile_images/1408273472841789440/5sWHLRlx_x96.jpg",
    },
    date: "2h",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet voluptate deserunt inventore aperiam magnam, ullam odio.Ex dolores qui nisi, tempore",
    comments: 1,
    retwitts: 2,
    likes: 3,
  },
  {
    user: {
      username: "quispe",
      gmail: "@qyispe,",
      _id: "10",
      img: "https://pbs.twimg.com/profile_images/1408273472841789440/5sWHLRlx_x96.jpg",
    },
    date: "2h",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet voluptate deserunt inventore aperiam magnam, ullam odio.Ex dolores qui nisi, tempore",
    comments: 1,
    retwitts: 2,
    likes: 3,
  },
  {
    user: {
      username: "quispe",
      gmail: "@qyispe,",
      _id: "10",
      img: "https://pbs.twimg.com/profile_images/1408273472841789440/5sWHLRlx_x96.jpg",
    },
    date: "2h",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet voluptate deserunt inventore aperiam magnam, ullam odio.Ex dolores qui nisi, tempore",
    comments: 1,
    retwitts: 2,
    likes: 3,
  },
];

const Main = () => {
  return (
    <MainContainerStyle>
      {twitts.map((t, i) => (
        <Tweet {...t} key={i} />
      ))}
    </MainContainerStyle>
  );
};

export default Main;
