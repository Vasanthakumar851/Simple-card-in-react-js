import { Fragment } from "react";
import UserCard from "./UserCard";

const App = () => {
  const UserData = [
    {
      name: "vasanth",
      address: "Pondy",
      description: "Front-End Developer",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      online: false,
      images: "images/graduated.png",
    },
    {
      name: "Vijay",
      address: "Chennai",
      description: "Full Stack Developer",
      skills: ["HTML", "JAVASCRIPT", "PHP"],
      online: true,
      images: "images/2.jpg",
    },
    {
      name: "BalaMani",
      address: "Pondy",
      description: "SQL Developer",
      skills: ["SQL", "MYSQL"],
      online: true,
      images: "images/3.jpg",
    },
    {
      name: "Balamurugan",
      address: "Pondy",
      description: "Full Stack Developer",
      skills: ["HTML", "CSS", "JAVASCRIPT", "PHP", "SQL", "LARAVAL"],
      online: true,
      images: "images/1.png",
    },
    {
      name: "Janagan",
      address: "Cuddalore",
      description: "Full Stack Developer",
      skills: ["HTML", "CSS", "JAVASCRIPT", "PHP", "SQL", "LARAVAL"],
      online: true,
      images: "images/3.jpg",
    },
    {
      name: "Guna",
      address: "Thavalakuppam",
      description: "Full Stack Developer",
      skills: ["HTML", "CSS", "JAVASCRIPT", "PHP", "SQL", "LARAVAL"],
      online: true,
      images: "images/4.jpg",
    },
  ];
  return (
    <Fragment>
      {UserData.map((data, indes) => (
        <UserCard
          key={indes}
          name={data.name}
          address={data.address}
          description={data.description}
          skills={data.skills}
          online={data.online}
          images={data.images}
        />
      ))}
    </Fragment>
  );
};

export default App;
