import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style";
import { apiClient } from "../../apiClient";

const search = (searchStr, setSiteArr) => {
  apiClient
    .get("/sites", {
      params: {
        searchStr,
      },
    })
    .then((res) => {
      console.log("RES", res);
    });
  // db.collection("sites")
  //   .where("name", ">=", searchStr)
  //   .get()
  //   .then(function (querySnapshot) {
  //     var arrayOfSites = [];
  //     querySnapshot.forEach(function (doc) {
  //       // doc.data() is never undefined for query doc snapshots
  //       console.log(doc.id, " => ", doc.data());
  //       arrayOfSites.push(doc.data());
  //     });
  //     setSiteArr(arrayOfSites);
  //   })
  //   .catch(function (error) {
  //     console.log("Error getting documents: ", error);
  //   });
};

const Home = () => {
  const [site, changeSite] = useState("");
  const [sitesArr, setSiteArr] = useState([]);
  return (
    <div class={style.home}>
      <h1>Search for a site</h1>
      <div>
        <input value={site} onChange={(e) => changeSite(e.target.value)} />
        <button onClick={() => search(site, setSiteArr)}>Search</button>
      </div>
      {sitesArr.map((site, idx) => (
        <div key={idx}>{site.url}</div>
      ))}
    </div>
  );
};

export default Home;
