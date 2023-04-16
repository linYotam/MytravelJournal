import data from "../data";
import Card from "./Card";
import Header from "./Header";
import styles from "../styles/Travel.module.css";

function Travel() {
  const travelCards = data.map((data, index, d) => {
    if (index + 1 === d.length) {
      return <Card key={index} data={data} border="none" />;
    }
    return <Card key={index} data={data} />;
  });

  return (
    <div className={styles.travel}>
      <Header />
      {travelCards}
    </div>
  );
}

export default Travel;
