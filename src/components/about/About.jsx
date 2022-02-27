import "./about.scss";

export default function About() {
    const data = [
        {
        id: 1,
        name: "Jay Abella",
        title: "Programmer and Digital Artist",
        img:
        "https://cdn.discordapp.com/attachments/402618602127228938/945101245851512932/unknown.png",
        icon: "assets/twitter.png",
        desc:
        "Hello! I'm an SF Bay native and I love tea, art, video games, and programming. In my free time, I like to draw digital illustrations. I enjoy finding ways to combine nice visuals with programming. Thanks for visiting my website!",
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