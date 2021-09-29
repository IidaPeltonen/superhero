import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function getRandom() {
  return Math.floor(Math.random() * 100) + 1;
}

const URL = 'https://superheroapi.com/api/10159910119890854/';
const loppu = getRandom();

/* https://www.superheroapi.com/api.php/10159910119890854/1 hakee tyypin kaikki tiedot, jos tuohon vikaan tekisi random-numero generaattorin, 
jolla tuon arpoisi? haussa taas käyttäjä voisi antaa numeron, jolla kanta hakee. tai sitten alasvetovalikko. */

function App() {
  const [name, setName] = useState('');
  const [realName, setRealName] = useState('');
  const [birth, setBirth] = useState('');
  const [publisher, setPublisher] = useState(''); 
  const [puoli, setPuoli] = useState('');
  const [kuva, setKuva] = useState('');
  let kumpi = "";

  useEffect(() => {
    const address = URL + loppu;

    axios.get(address)
      .then((response) => { 
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

