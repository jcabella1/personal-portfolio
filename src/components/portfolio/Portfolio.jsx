import { useEffect, useState } from 'react'; 
import './portfolio.scss';
import PortfolioList from "../portfolioList/PortfolioList";
import { featuredPortfolio } from '../../data';

export default function Portfolio() {
    // Decides which is the active state (initially featured)
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
          id: "featured",
          title: "Featured",
        }
      ];

      useEffect(() => {
        switch(selected) {
          case "featured":
            setData(featuredPortfolio);
            break;
          default:
            setData(featuredPortfolio);
        }
      }, [selected])

    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                    id={item.id}
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected} />
                ))}
            </ul>
            <div className="container">
              {data.map((d) => (
                <div className="item">
                  <img 
                  src={d.img}
                  alt={d.title} />
                  <h3>{d.title}</h3>
                </div>
              ))}
            </div>
        </div>
    )
}