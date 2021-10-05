import './App.css';
import { useState, useEffect } from 'react';
import male from './male.PNG';
import female from './female.PNG';
import musta from './musta.jpg';
import sininen from './sininen.jpg';
import vihrea from './vihrea.jpg';
import ruskea from './ruskea.jpg';
import keltsi from './keltsi.jpg';
import kalju from './kalju.jpg';
import blond from './blond.jpg';
import kysymys from './kysymys.jpg';
import white from './white.jpg';
import red from './red.jpg';
import StrawberryBlond from './StrawberryBlond.jpg';
import Auburn from './Auburn.jpg';
import Amber from './Amber.jpg';
import gold from './gold.jpg';
import Violet from './Violet.jpg';
import Silver from './Silver.jpg';
import Hazel from './Hazel.jpg';
import Purple from './Purple.jpg';
import Grey from './Grey.jpg';
import bb from './bb.jpg';
import rw from './rw.jpg';
import indigo from './indigo.jpg';
import bw from './bw.jpg';
import suomi from './suomi.jpg';

function getRandom() {
  return Math.floor(Math.random() * 731) + 1;
} 

const URL = 'https://superheroapi.com/api/';
const APIKEY = 'APIKOODI TÄHÄN';

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
    const [genderKuva, setGenderKuva] = useState('');
    const [race, setRace] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [varisilma, setVariSilma] =  useState('');
    const [variHius, setVariHius] = useState('');
    const [tyo, setTyo] = useState('');
    const [base, setBase] = useState('');
    const [ryhma, setRyhma] = useState('');
    const [suku, setSuku] = useState('');

    useEffect(() => {
      hae();
    }, [])

    async function etsi(e) {
      e.preventdefault()
      hae();
    }

    async function hae() {
      try {
        let loppu = kysely;
        const address = URL + APIKEY;
        if (kysely.length === 0) {
          loppu = getRandom();
        }
        const vastaus = await fetch(address + loppu)

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
          if (hero.appearance.gender === 'Male') {
              setGenderKuva(male);
          }
          if (hero.appearance.gender === 'Female') {
            setGenderKuva(female);
          }
          setRace(hero.appearance.race);
          setHeight(hero.appearance.height[1]);
          setWeight(hero.appearance.weight[1]);
            if (hero.appearance['eye-color'] === 'Yellow') {
              setVariSilma(keltsi);
            }
            if (hero.appearance['eye-color'] === 'Brown') {
              setVariSilma(ruskea);
            }
            if (hero.appearance['eye-color'] === 'brown') {
              setVariSilma(ruskea);
            }
            if (hero.appearance['eye-color'] === 'Bown') {
              setVariSilma(ruskea);
            }
            if (hero.appearance['eye-color'] === 'Silver') {
              setVariSilma(Silver);
            } 
            if (hero.appearance['eye-color'] === 'Gold') {
              setVariSilma(gold);
            }
            if (hero.appearance['eye-color'] === 'Black') {
              setVariSilma(musta);
            }
            if (hero.appearance['eye-color'] === 'black') {
              setVariSilma(musta);
            }
            if (hero.appearance['eye-color'] === 'Blue / White') {
              setVariSilma(suomi);
            }
            if (hero.appearance['eye-color'] === 'Blue') {
              setVariSilma(sininen);
            }
            if (hero.appearance['eye-color'] === 'blue') {
              setVariSilma(sininen);
            }
            if (hero.appearance['eye-color'] === 'Green') {
              setVariSilma(vihrea);
            }
            if (hero.appearance['eye-color'] === 'Grey') {
              setVariSilma(Grey);
            }
            if (hero.appearance['eye-color'] === '-') {
              setVariSilma(kysymys);
            }
            if (hero.appearance['eye-color'] === 'Violet') {
              setVariSilma(Violet);
            } 
            if (hero.appearance['eye-color'] === 'Red') {
              setVariSilma(red);
            } 
            if (hero.appearance['eye-color'] === 'White') {
              setVariSilma(white);
            }
            if (hero.appearance['eye-color'] === 'Purple') {
              setVariSilma(Purple);
            } 
            if (hero.appearance['eye-color'] === 'Amber') {
              setVariSilma(Amber);
            }
            if (hero.appearance['eye-color'] === 'Hazel') {
              setVariSilma(Hazel);
            } 
            if (hero.appearance['hair-color'] === 'No Hair') {
              setVariHius(kalju);
            }
            if (hero.appearance['hair-color'] === 'Black') {
              setVariHius(musta);
            }
            if (hero.appearance['hair-color'] === 'black') {
              setVariHius(musta);
            }
            if (hero.appearance['hair-color'] === 'Red / White') {
              setVariHius(rw);
            } 
            if (hero.appearance['hair-color'] === 'Indigo') {
              setVariHius(indigo);
            } 
            if (hero.appearance['hair-color'] === 'Black / Blue') {
              setVariHius(bb);
            }
            if (hero.appearance['hair-color'] === 'Purple') {
              setVariHius(Purple);
            }
            if (hero.appearance['hair-color'] === 'Silver') {
              setVariHius(Silver);
            } 
            if (hero.appearance['hair-color'] === 'Strawberry Blond') {
              setVariHius(StrawberryBlond);
            }
            if (hero.appearance['hair-color'] === 'Grey') {
              setVariHius(Grey);
            }
            if (hero.appearance['hair-color'] === 'Green') {
              setVariHius(vihrea);
            }
            if (hero.appearance['hair-color'] === 'Blond') {
              setVariHius(blond);
            }
            if (hero.appearance['hair-color'] === 'Brown') {
              setVariHius(ruskea);
            }
            if (hero.appearance['hair-color'] === '-') {
              setVariHius(kysymys);
            } 
            if (hero.appearance['hair-color'] === 'Brown / White') {
              setVariHius(bw);
            } 
            if (hero.appearance['hair-color'] === 'White') {
              setVariHius(white);
            }
            if (hero.appearance['hair-color'] === 'Red') {
              setVariHius(red);
            }
            if (hero.appearance['hair-color'] === 'Auburn') {
              setVariHius(Auburn);
            } 
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
          <h1>Find Your Superhero (or SuperVillain!)</h1>
          <br />
          <br />
          <label className="form-label">ID-number </label>
          <input type="number" value={kysely} onChange={e => setKysely(e.target.value)} />
          <br />
        </div>
        <div>
            <button>Search my hero!</button>
        </div>
        <div>
          <br />
          <br />
          <h1 id='gold'>{name}</h1>
          <br />
          <img src={kuva} alt='hero or villain' id='kehys'/>
          <br />
          <br />
          <p>Gender : <img src={genderKuva} alt='sukupuoli' />  Eye color : <img src={varisilma} alt='silmienväri' />   Hair color : <img src={variHius} alt='hiustenväri' /> </p>
          <p>Weight : {weight}  Height : {height} Race : {race} </p>
          <p id='gold'>----------------------------------------------------------------</p>
          <p>Intelligense : {aly}     Strength : {voima}    Speed : {nopeus}</p>
          <p>Durability : {kesto}     Power : {teho}       Combat : {taistelu}</p>  
          <p id='gold'>----------------------------------------------------------------</p>
          <p>Real Name : {realName}</p>
          <p>Alter egos : {egot}</p>
          <p>Aliases : {alias}</p>
          <p>Place of birth : {birth}</p>
          <p>First seen : {nahty}</p>
          <p>Publisher : {publisher}</p> 
          <p>Good or Bad : {puoli}</p>
          <p id='gold'>----------------------------------------------------------------</p>
          <p>Occupation : {tyo}</p>
          <p>Base : {base}</p>
          <p id='gold'>----------------------------------------------------------------</p>
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
