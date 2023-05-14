
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { useEffect } from 'react';
import {mapData} from '../../api/map-data'
import { useState } from 'react';

function Home() {
  // const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetch('http://localhost:1337/api/pages/?slug=landing-page',);
        const json = await data.json();
          const pageData = mapData(json);
            console.log(pageData);
      // setData(pageData[0]);

      console.log(json);
    };
    load();
  }, []);

  // if (data === undefined){
  //   return <h1>Pagina não encontrada</h1>
  // }
  // if (data && !data.slug){
  //   return <h1>Carregando...</h1>
  // }


  return <Base {...mockBase} />;
  
};

export default Home;
