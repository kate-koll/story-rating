import CardGroup from "react-bootstrap/CardGroup";

import StoryCard from "../components/StoryCard";

const Rating = () => {
  //const [stories, setStories] = useState([]);
  //setStories(["Harry Potter", "Pán prstenů", "Hra o trůny"])

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <CardGroup>
        <StoryCard
          title="Harry Potter"
          text="Dobrodružství mladého kouzelníka, Harryho Pottera, a jeho přátel, Ronalda Weasleyho a Hermiony Grangerové, kteří všichni studují na Škole čar a kouzel v Bradavicích."
          img="https://blog.logomyway.com/wp-content/uploads/2021/09/hogwarts-logo-draco.jpg"
        ></StoryCard>

        <StoryCard        
          title="Hra o trůny"
          text="Děj Hry o trůny se odehrává v Sedmi královstvích kontinentu Západozemí, ve světě temného středověku, mezi statečnými a drsnými rytíři, mocnými čaroději, draky, zlovlky. V rozsáhlém příběhu plném zrady a ambicí, lásky, čar a kouzel bojuje sedm šlechtických rodů o vládu a moc."
          img = "https://freepngimg.com/download/logo/88970-stannis-area-text-renly-baratheon-daenerys-targaryen.png"
        ></StoryCard>
        
        <StoryCard
          title="Pán prstenů"
          text="Děj se odehrává ve Středozemi a vypráví o Temném pánu Sauronovi, který hledá Jeden prsten. Ten se dostane k mladému hobitu Frodu Pytlíkovi."
          img = "https://i.pinimg.com/originals/f5/06/4a/f5064aa08e5217acdceb7c0cfd7e647a.png"
        ></StoryCard>
      </CardGroup>
    </div>
  );
};

export default Rating;
