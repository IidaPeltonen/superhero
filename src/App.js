import './App.css';
import { useState } from 'react';
//import axios from 'axios';

/* function getRandom() {
  return Math.floor(Math.random() * 100) + 1;
} */

const URL = 'https://superheroapi.com/api/10159910119890854/';
//const loppu = getRandom();

function Superhero() {

    const [kysely, setKysely] = useState('');
    const [name, setName] = useState('');
    const [realName, setRealName] = useState('');
    const [birth, setBirth] = useState('');
    const [publisher, setPublisher] = useState(''); 
    const [puoli, setPuoli] = useState('');
    const [aly, setAly] = useState('');
    const [voima, setVoima] = useState('');
    const [teho, setTeho] = useState('');
    const [taistelu, setTaistelu] = useState('');
    const [egot, setEgot] = useState('');
    const [alias, setAlias] = useState('');
    const [nahty, setNahty] = useState('');
    const [nopeus, setNopeus] = useState('');
    const [kesto, setKesto] = useState('');
    const [kuva, setKuva] = useState('');
    const [gender, setGender] = useState('');
    const [race, setRace] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [eyes, setEyes] = useState('');
    const [hair, setHair] = useState('');
    const [tyo, setTyo] = useState('');
    const [base, setBase] = useState('');
    const [ryhma, setRyhma] = useState('');
    const [suku, setSuku] = useState('');

    async function etsi(e) {
      e.preventDefault()
      try {
        const address = URL;
        const vastaus = await fetch(address + kysely)
        console.log(vastaus)

        if (vastaus.ok) {
          const json = await vastaus.json();
          const hero = json; 
          setName(hero.name);
          setAly(hero.powerstats.intelligence);
          setVoima(hero.powerstats.strength);
          setNopeus(hero.powerstats.speed);
          setKesto(hero.powerstats.durability);
          setTeho(hero.powerstats.power);
          setTaistelu(hero.powerstats.combat);
          setEgot(hero.biography['alter-egos']);
          setAlias(hero.biography.aliases);
          setNahty(hero.biography['first-appearance']);
          setRealName(hero.biography['full-name']);
          setBirth(hero.biography['place-of-birth']);
          setPublisher(hero.biography.publisher);  
          setPuoli(hero.biography.alignment);
          setKuva(hero.image.url);
          setGender(hero.appearance.gender);
          setRace(hero.appearance.race);
          setHeight(hero.appearance.height);
          setWeight(hero.appearance.weight);
          setEyes(hero.appearance['eye-color']);
          setHair(hero.appearance['hair-color']);
          setTyo(hero.work.occupation);
          setBase(hero.work.base);
          setRyhma(hero.connections['group-affiliation']);
          setSuku(hero.connections.relatives);
        } else {
          alert('Error retrieving hero!')
        }
      } catch (err) {
        alert(err)
      }
    }
    
  return (
    <div id="center">
      <form onSubmit={etsi}>
        <div>
          <h3>Find Your Superhero (or SuperVillain!)</h3>
          <label className="form-label">ID-number :</label>
          <input type="number" value={kysely} onChange={e => setKysely(e.target.value)} />
        </div>
        <div>
            <button>Search my hero!</button>
        </div>
        <div id="esiin">
          <p>Name : {name}</p>
          <img src={kuva} alt='hero or villain' />
          <p>Intelligense : {aly}     Strength : {voima}    Speed : {nopeus}</p>
          <p>Durability : {kesto}     Power : {teho}       Combat : {taistelu}</p>  
          ----------------------------------------------------------------
          <p>Gender : {gender}        Race : {race}         Height : {height}</p>
          <p>Weight : {weight}        Eye color : {eyes}    Hair color : {hair}</p>
          ----------------------------------------------------------------
          <p>Real Name : {realName}</p>
          <p>Alter egos : {egot}</p>
          <p>Aliases : {alias}</p>
          <p>Place of birth : {birth}</p>
          <p>First seen : {nahty}</p>
          <p>Publisher : {publisher}</p> 
          <p>Good or Bad : {puoli}</p>
          ----------------------------------------------------------------
          <p>Occupation : {tyo}</p>
          <p>Base : {base}</p>
          ----------------------------------------------------------------
          <p>Group Affiliation : {ryhma}</p>
          <p>Relatives : {suku}</p>
        </div>
        <p></p>
        <p></p>
      </form>
    </div>
  )
}

export default Superhero;
