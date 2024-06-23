import { useNavigate } from "react-router-dom"

const Category = () => {
  const navigate = useNavigate();

  const handleSubmit = async (category) => {
     navigate(`${category}`)
  }
  
    return (
      <div className="Category-container">
           <h1>Business List</h1>         
          <section className="cateButton">
          <button className= "categoryBu" onClick={() => handleSubmit("restaurant")}>Restaurants</button>
          <img className="category" src="https://cdn.pixabay.com/photo/2023/07/04/06/28/ai-generated-8105505_1280.jpg"></img>
          </section> 
          <section className="cateButton2">
          <button className= "categoryBu" onClick={() => handleSubmit("cinema")}>Cinema</button>
          <img className="category" src="https://investomation.com/images/ai_films/movie_theater.jpg"></img>
          </section>
          <section className="cateButton3">
          <button className= "categoryBu" onClick={() => handleSubmit("shop")}>Shopping Malls</button>
          <img className="category" src ="https://img.freepik.com/premium-photo/shopping-mall-hustle-ai-generate_250484-12334.jpg"></img>
          </section>
          <section className=""> </section>
        </div>
        
    )
  }
  
  export default Category