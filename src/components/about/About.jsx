import "./about.scss";

export default function About() {
    const data = [
        {
        id: 1,
        name: "Jay Abella",
        title: "Developer / Designer",
        img:
        "https://cdn.discordapp.com/attachments/290307359757172747/948496456258584586/riensquished.png",
        icon: "assets/twitter.png",
        desc:
        "Hello! I'm an SF Bay native and I love tea, art, video games, and programming. In my free time, I like making illustrations and designing websites. I enjoy finding ways to combine nice visuals with programming. Thanks for visiting my website!",
        }
    ];
    return (
        <div className="about" id="about">
            <h1>About</h1>
            <div className="container">
                {data.map((d) => (
                <div className={d.featured ? "card featured" : "card" }>
                    <div className="title">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                    <div className="top">
                        <img className="user" src={d.img} alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}