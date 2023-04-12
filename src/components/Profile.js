import { useState, useEffect } from "react";
const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Dummy Name",
    loaction: "dummy location",
  });

  useEffect(() => {
    fetchGithub();
  }, []);

  const fetchGithub = async () => {
    const data = await fetch("https://api.github.com/users/tautik");
    const json = await data.json();
    setUserData(json);
  };

  return (
    <div className="flex-1 bg-fuchsia-100">
      <h1>Profile comnponent</h1>
      <img src={userData.url} alt="" />
      <h2>Name: {userData.name}</h2>
    </div>
  );
};

export default Profile;
