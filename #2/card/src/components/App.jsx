import React, {useState} from "react";
import Card from "./Card"
function data(foundData){
    return <Card 
            key={foundData.id}
            email={foundData.email}
            first_name={foundData.first_name}
            last_name={foundData.last_name} 
            avatar={foundData.avatar}/>
}




function App() {
    var url = 'https://reqres.in/api/users?page=';
    
    const [dataApi, set] = useState([0]);
    var [pageno, setnext] = useState(1);
    var [isloading, setload] = useState(false);
    function newstate(){
        setload(true);
        fetch(url + pageno)
        .then(response => response.json())
        .then(data => {
            setTimeout(()=>{
                set(data.data);
                setload(false);
            }, 3000)
            
        })
        
    }
    function next(){
        pageno = pageno + 1;
        if(pageno > 2){
            pageno = pageno - 1;
        }
        setnext(pageno);
        newstate();
    }
    function prev(){
        pageno = pageno - 1;
        setnext(pageno);
        newstate();
    }
    console.log(dataApi);

    function available(dataa){
        if(dataa[0] !== 0)
            return dataa.map(data)
        else{
            return ("Nothing Present Now")
        }
    }
    function loading(){
        if(isloading === true){
            return (<div>
                <div class="loading">Loading...</div>
                <div class="loader"></div>
            </div>)
        }
    }
  return (
    <div>
        <nav>Top Company</nav>
        <h1>
            <span>Users</span>
        </h1>
        <div className="top">
            <button className="btn btn-primary" onClick={newstate} >Get Users</button>
            <button className="btn btn-primary" onClick={prev}>Prev Page</button>
            <button className="btn btn-primary" onClick={next}>Next Page</button>
        </div>
        {loading()}
        <dl className="dictionary">
            {available(dataApi)}
        </dl>
        <div className="bottom">
            <button className="btn btn-primary" onClick={prev}>Prev Page</button>
            <button className="btn btn-primary" onClick={next}>Next Page</button>
        </div>
    </div>
      
      );
    }
    
     
export default App;
