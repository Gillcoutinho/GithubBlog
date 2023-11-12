import { Header } from "../../componentes/Header";
import { Profile } from "../../componentes/Profile";
import { Publication } from "../../componentes/Publication";
import { getUserInfo } from '../../services/get';
import { useState, useEffect } from "react";

export function Home() {
  const [userInfo, setUserInfo] = useState();


async function getUserInfoByApi() {
  const response = await getUserInfo('gillcoutinho');

  if(response) {
    setUserInfo(response)
  }
 }

 useEffect(() => {
  getUserInfoByApi();
 }, [])

  return (
    <div>
      <Header />
      <Profile userInfo={userInfo}/>
      <Publication />
    </div>
  );
}
