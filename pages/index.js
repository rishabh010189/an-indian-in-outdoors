
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { getFeaturedEvents } from "../dummy-data";
import Card from '../components/events/Card';

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <div className={styles.window}>
        <section className={styles.cover}>
          <h2 className={styles.text}>
            <span>Its time for a new</span>
            <br />
            Adventure
          </h2>
          <Image
            className={styles.bgImage}
            src="/images/bg.jpg"
            alt="cover"
            layout="fill"
          />
        </section>

        <div className="container mt-5 pb-3">
          <h3>Featured Events</h3>

          <div className={styles.featured}>
            {featuredEvents.map((item) => (
              <Card key={item.id} data={item}></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
  