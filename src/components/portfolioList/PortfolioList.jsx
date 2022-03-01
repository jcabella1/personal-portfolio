import "./portfoliolist.scss";

export default function PortfolioList({title, imageSrc, body, url}) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageSrc} alt=''/>
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
          </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
      <div className="btn">
        <button>
          <a href={url}>Source code</a>
        </button>
      </div>
    </div>
  )
}
