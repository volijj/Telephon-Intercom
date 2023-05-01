import React , {useState} from 'react'
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import BuildingButton from "../components/BuildingButton";
import Search from '../components/Search'; 

function Buildings({}) 
{
    const buildingsData = [
        {
            title: "אתרוג 28",
            city: "שוהם",
            id: "b73303ab-ac2c-46d6-ad27-56417a8860ac"
        },
        {
            title: "אתרוג 40",
            city: "שוהם",
            id: "433f571d-7152-4ad4-bb68-8f9e56e85777"
        },
        {
            title: "אתרוג 10",
            city: "שוהם",
            id: "7b378fae-549c-4204-80f8-82a7c3680878"
        },
    ];

    const [buildings, setBuildings] = useState([]);
    
    // useEffect(() => {
    //     fetch("https://connect4udbservice.azurewebsites.net/api/getbuildings")
    //     .then(response => response.json())
    //     .then(buildingsData => {
    //         // extract title information from buildingsData
    //         buildingsData.forEach(building => {
    //         console.log(building.title);
    //         // do whatever you want with the title information here
    //         });
    //     })
    //     .catch(error => console.error(error));
    // }, []);

    const handleSearch = (e) => {
        const input = e.target.value;
        if (input === '') {
          setBuildings([]);
        } else {
          const filtered = filterBuildings(input);
          setBuildings(filtered);
        }
      };

    const filterBuildings = (input) => {
        const filtered = buildingsData.filter(building => {
          const regex = new RegExp(input, 'gi');
          return building.title.match(regex) || building.city.match(regex);
        });
        return filtered;
      }

    return (
        <div className='Buildings'>
            <h1>הבניינים שלך</h1>
        <form className="inputs">
        <button className='button-add'> הוספת בניין חדש +</button>
        <Search onChange={handleSearch} />
        
        </form>
      <div className="show-buildings">
        <h2 >יש לך {buildingsData.length} בניינים פעילים</h2>

      {/* {buildings.length > 0
          ? buildings.map((building) => (
              <div className="building" key={building.id}>
                <BuildingButton title={building.title} city={building.city} />
              </div>
            ))
          : null} */}
          <div className='buildings-name'>
            
          
        {buildings.length > 0
          ? buildings.map((building) => (
              <div className="building" key={building.id}>
                <BuildingButton title={building.title} city={building.city} />
              </div>
            ))
          : buildingsData.map((building) => (
              <div className="building" key={building.id}>
                <BuildingButton title={building.title} city={building.city} />
              </div>
            ))}
            </div>
      </div>
    </div>
  );
}

export default Buildings;



// const buildingsData = [
//     {
//         title: "אתרוג 28",
//         city: "שוהם",
//         id: "b73303ab-ac2c-46d6-ad27-56417a8860ac"
//     },
//     {
//         title: "אתרוג 40",
//         city: "שוהם",
//         id: "433f571d-7152-4ad4-bb68-8f9e56e85777"
//     },
//     {
//         title: "אתרוג 10",
//         city: "שוהם",
//         id: "7b378fae-549c-4204-80f8-82a7c3680878"
//     },
//     {
//         title: "אתרוג 15",
//         city: "שוהם",
//         id: "b514b318-5a24-40e1-b953-8e451e2f1553"
//     },
//     {
//         title: "שער ציון 13",
//         city: "חולון",
//         id: "98d5e153-ca16-45c9-8fa4-d24c300ff854"
//     },
//     {
//         title: "שער ציון 11",
//         city: "חולון",
//         id: "ed90a9a2-f292-450c-a189-55e24627e9d0"
//     },
//     {
//         title: "הקנאים 16",
//         city: "מיתר",
//         id: "f951e410-81a7-40be-97b4-b6fffa4fd572"
//     },
//     {
//         title: "מפרץ שלמה 23",
//         city: "חולון",
//         id: "2049a1b5-fbf2-4869-aed9-0e608c18570d"
//     },
//     {
//         title: "האתרוג 24",
//         city: "שוהם",
//         id: "3e18f2ea-1f44-43b5-981e-52f9b0956cc8"
//     },
//     {
//         title: "מפרץ שלמה 21",
//         city: "חולון",
//         id: "79202cb9-babe-42f8-8d9b-894dd5f8eade"
//     },
// ];