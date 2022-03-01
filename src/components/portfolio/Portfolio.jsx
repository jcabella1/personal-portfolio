import './portfolio.scss';
import PortfolioList from "../portfolioList/PortfolioList";
import { portfolioData } from '../../data';

export default function Portfolio() {
    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {portfolioData.map((item) => (
                    <PortfolioList 
                    title={item.title}
                    imageSrc={item.img}
                    body={item.description} 
                    url={item.url} />
                ))}
            </ul>
        </div>
    )
}