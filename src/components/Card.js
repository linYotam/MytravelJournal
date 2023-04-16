import styles from "../styles/Card.module.css";

function Card(props) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          className={styles.image}
          src={props.data.imageUrl}
          alt="location"
        />
        <div className={styles.header}>
          <i className={`map pin icon red ${styles.icon}`} />
          <div className={styles.location}>
            {props.data.location.toUpperCase()}
          </div>
          <a className={styles.google} href={props.data.googleMapUrl}>
            View on Goolge Maps
          </a>
        </div>
        <div className={styles.title}>{props.data.title}</div>
        <div className={styles.date}>
          {props.data.startDate} - {props.data.endDate}
        </div>
        <div className={styles.info}>{props.data.description}</div>
      </div>
    </div>
  );
}

export default Card;
