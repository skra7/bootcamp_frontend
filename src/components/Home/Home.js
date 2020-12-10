import React from "react";
import "./Home.css";
import Product from "../Product/Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        alt=""
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/V/launch/1500x600_Hero-Tall_p._CB404989176_.jpg"
      />
      {/* Product : id Title, Price, rating, image */}
      <div className="home__row">
        <Product
          id="1212112"
          name="Product Name"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Kmm4lKiFL._AA210_.jpg"
        />
        <Product
          id="12121234"
          name="Product Name"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Kmm4lKiFL._AA210_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1212122"
          name="Product Name"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Kmm4lKiFL._AA210_.jpg"
        />
        <Product
          id="121232"
          name="Product Name"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Kmm4lKiFL._AA210_.jpg"
        />
        <Product
          id="1212121212121"
          name="Product Name"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Kmm4lKiFL._AA210_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="121"
          name="Product Name"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Kmm4lKiFL._AA210_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
