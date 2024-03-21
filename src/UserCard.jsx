const UserCard = (props) => {
  const { name, address, description, skills, online, images } = props;
  return (
    <div className="container">
      <span className={online ? "note online" : "note offline"}>
        {online ? "Online" : "Offline"}
      </span>
      <img src={images} alt="" className="img" width="100px" />
      <h2>{name}</h2>
      <h3>
        <span className="location">Location: </span>
        {address}
      </h3>
      <p>{description}</p>
      <div className="buttons">
        <button className="primary">Messages</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
