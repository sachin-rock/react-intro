
import './App.css';

function App() {
  
const op_systems = [
  { name: "Android", style: "os" },
  { name: "Blakberry", style: "os" },
  { name: "iPhone", style: "os" },
  { name: "Windows", style: "os" },
];
const manufractures = [
  { name: "Samsung", style: "squarestyle" },
  { name: "HTC", style: "squarestyle" },
  { name: "Micromax", style: "os" },
  { name: "Apple", style: "circleblankstyle" },
];

return (
  <div className="App">
    <h1>Mobile Operating System
      <ul>{op_systems.map((e)=>{ 
        return <li className={e.style}><Opsystems op_systems={e.name}/></li>
        })}</ul>
      </h1>
    <h1>Mobile Manufacturers
    <ul>{manufractures.map((e)=>{
          return <li className={e.style}><Manufractures manufractures={e.name}/></li>
      })}</ul>
    </h1>
  </div>
);
}

function Opsystems(pros1){
return <p>{pros1.op_systems}</p>
}
function Manufractures(pros2){
return <p>{pros2.manufractures}</p>
}




export default App;
