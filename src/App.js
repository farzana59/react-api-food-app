import "./App.css";
import Axios from "axios";
import {useState} from "react";
import RecipeTile from "./RecipeTile";

function App(){
  const [query, setQuery] = useState("");
  const [recipes,setRecipes] = useState ([])

  var url= `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id={Your_APP_ID}&app_key={Your_APP_KEY}`;

 async function getRecipes(){
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }


  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }



  return (
    <div className= "app">
      <h1 onClick={getRecipes}> Food Recipe</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input className="app_input"  type="text" placeholder="enter recipe name"
        value={query} onChange={(e) => setQuery (e.target.value)} />

        <input className="app_submit" type="submit" value="Search"/>
      </form>
      <div className="app_recipes">
        {recipes.map((recipe, i) => {
         return <RecipeTile key={i} recipe={recipe}/>;
        
        })}
      </div>
    </div>
  );

}

export default App;