import "./App.css";
import Axios from "axios";

function App(){
  var url= "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=c5a4a912&app_key=%20b2e1fea9c5c413dd25353996f5fa6cb4"

 async function getRecipes(){
    var result = await Axios.get(url);
    console.log(result.data);
  }





  return (
    <div className= "App">
      <h1 onClick={getRecipes}> Food Recipe</h1>
    </div>
  );

}

export default App;