import "./Productscards.css";
import Productscard from "./Productscard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Melumat {
  id: string;
  product_image: string;
  product_context: string;
  product_price: string;
  product_category: string;
  product_type: string;
  products_brand: string;
}

const Productscards: React.FC = () => {
  const [data, setData] = useState<Melumat[]>([]);
  const [filteredData, setFilteredData] = useState<Melumat[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,      
      mirror: true      
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Melumat[]>("/product.json"); 
        const products = response.data;

        const uniqueCategories = [
          ...new Set(products.map((item) => item.product_category)),
        ];
        const uniqueTypes = [
          ...new Set(products.map((item) => item.product_type)),
        ];
        const uniqueBrands = [
          ...new Set(products.map((item) => item.products_brand)),
        ];

        setData(products);
        setFilteredData(products);
        setCategories(uniqueCategories);
        setTypes(uniqueTypes);
        setBrands(uniqueBrands);
      } catch (error) {
        console.error("Data fetch error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = data;

    if (selectedCategory) {
      filtered = filtered.filter(
        (item) => item.product_category === selectedCategory
      );
    }
    if (selectedType) {
      filtered = filtered.filter((item) => item.product_type === selectedType);
    }
    if (selectedBrand) {
      filtered = filtered.filter(
        (item) => item.products_brand === selectedBrand
      );
    }

    setFilteredData(filtered);
  }, [selectedCategory, selectedType, selectedBrand, data]);

  return (
    <div className="Productscard-container" data-aos="fade-up">
      <div className="filter-container" data-aos="zoom-in">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setSelectedType(e.target.value)}
          value={selectedType}
        >
          <option value="">Product type</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setSelectedBrand(e.target.value)}
          value={selectedBrand}
        >
          <option value="">Brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="Productscards-container">
        {filteredData.length > 0 ? (
          filteredData.map((birMelumat, index) => (
            <div 
              className="Productscard" 
              key={birMelumat.id}  
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <Productscard
                imageProps={birMelumat.product_image}
                contextProps={birMelumat.product_context}
                priceProps={birMelumat.product_price}
                idProps={birMelumat.id}
              />
            </div>
          ))
        ) : (
          <p data-aos="fade-in">No products found.</p>
        )}
      </div>

      <Link 
        to="/products" 
        className='popular-button'  
        style={{ textDecoration:"none" }}
        data-aos="zoom-in"
      >
        <button className="view-collectt">
          <FormattedMessage id='view'/>
        </button>
      </Link> 
    </div>
  );
};

export default Productscards;
