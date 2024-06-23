import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  const handleSubmit = async (category) => {
    navigate(`${category}`)
  }

  return (
    <>
      <div className="About">
        <h2>About page</h2>
      </div>

      <div id="container">
        <div class="scroll">
          <div class="item">10% OFF</div>
          <div class="item">20% OFF</div>
          <div class="item">30% OFF</div>
          <div class="item">40% OFF</div>
          <div class="item">50% OFF</div>
          <div class="item">60% OFF</div>
          <div class="item">70% OFF</div>
        </div>
        <div class="fade"></div>
      </div>
      <div className="Aboutus">
        <p>
          Welcome to Save and Smile, your ultimate destination for saving money
          on a wide variety of products! Whether you're shopping online or
          in-store, we are here to help you find the best deals, discounts, and
          coupons across multiple categories.
        </p>
        <p>
          At Save and Smile, we understand the joy of getting a great deal. For
          this reason, our specialized team provides you with the latest and
          most important coupons available. Our wide range of categories ensures
          that no matter what you're looking for — whether it's fashion, movies
          or restaurants — you'll find coupons to help you save.
        </p>
      </div>

      <div class="article-list">
        <div class="article-box">
          <button onClick={() => handleSubmit('/categories/restaurant')}>
            <img
              class="article-image"
              src="https://raw.githubusercontent.com/ZainabHussain20/Save-Smile-FrontEnd/a27066560998ef757f4178651bd1f9bc7e24690e/Save-and-Smile/public/restaurant.png"
              alt=""
              width="20"
              height="20"
            />
          </button>
          <button onClick={() => handleSubmit('/categories/cinema')}>
            <img
              class="article-image"
              src="https://raw.githubusercontent.com/ZainabHussain20/Save-Smile-FrontEnd/a27066560998ef757f4178651bd1f9bc7e24690e/Save-and-Smile/public/movies.png"
              alt=""
              width="20"
              height="20"
            />
          </button>
          <button onClick={() => handleSubmit('/categories/shop')}>
            <img
              class="article-image"
              src="https://raw.githubusercontent.com/ZainabHussain20/Save-Smile-FrontEnd/a27066560998ef757f4178651bd1f9bc7e24690e/Save-and-Smile/public/shops.png"
              alt=""
              width="20"
              height="20"
            />
          </button>

          <div class="article-box-text"></div>
        </div>
      </div>
    </>
  )
}

export default About
