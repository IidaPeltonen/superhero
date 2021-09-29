import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './details.js';
import Detail from './details.js';

function getRandom() {
  return Math.floor(Math.random() * 100) + 1;
}

const URL = 'https://superheroapi.com/api/10159910119890854/';
const loppu = getRandom();

function App() {
  const [name, setName] = useState('');
  const [realName, setRealName] = useState('');
  const [birth, setBirth] = useState('');
  const [publisher, setPublisher] = useState(''); 
  const [puoli, setPuoli] = useState('');
  const [kuva, setKuva] = useState('');
  let kumpi = "";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const address = URL + loppu;

    axios.get(address)
      .then((response) => { 
        setError(null);
        setIsLoaded(true);
        setItems(response.data);
      }).catch(error => {
        alert(error);
      });  }
      , [])

      function close() {
        setSelectedItem(null);
      }

      if (selectedItem != null) {
        return <Detail
          name={selectedItem.name}
          realName={selectedItem.biography['full-name']}
          birth={selectedItem.biography['place-of-birth']}
          publisher={selectedItem.biography.publisher}
          puoli={selectedItem.kumpi}
          kuva={selectedItem.image}
          close={close}
          />
      }
    
       else if (error) {
          return <p>{error.message}</p>;
        }
        else if (!isLoaded) {
          return <p>Loading...</p>;
        }
        else {
          return (
            <div>

              
              {items.map(item => (
                <div key={item.name} onClick={e => setSelectedItem(item)}>
                  <h1>{item.name}</h1>
                  <img src={item.urlToImage}></img>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          );
        }
    } 
    export default App;












/* 



      const hero = response.data; 
      setName(hero.name);
      setRealName(hero.biography['full-name']);
      setBirth(hero.biography['place-of-birth']);
      setPublisher(hero.biography.publisher);  
      setPuoli(hero.biography.alignment);
      setKuva(hero.image.url);
    }) .catch (error => {
      alert(error);
    });
  }, [])

    if (puoli === 'bad') {
        kumpi = "Pahis";
    }
    else {
      kumpi = "Hyvis";
    }

  return (
    <div>
      <h1>Random Supersankari (tai pahis)</h1>
      <h3>Nimi : {name}</h3> 
      <h3>Oikea nimi : {realName}</h3>
      <h3>Syntymäpaikka : {birth}</h3>
      <h3>Julkaisija : {publisher}</h3> 
      <h3>Hyvis vai pahis : {kumpi}</h3> 
      <img src={kuva}></img>
    </div>
  )

}

  export default App;

 */