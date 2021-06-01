import styles from "../../styles/Card.module.scss";
import Link from 'next/link';

function Card({data}){
    let exploreLink = `/events/${data.id}`;
    return (
        <div className={styles.card} style={{ width: "25em" }}>
        {/* <img
          className={['card-img-top', styles.cardImgTop].join(" ")}
          src={data.image}
          alt={data.title}
        /> */}
        <div className={['card-body', styles.cardBody].join(" ")}>
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">
            {data.description}
          </p>
          <div>
          <Link href={exploreLink}>
            <a className="btn btn-primary">
              Explore
              <i className="fa fa-long-arrow-right pl-2" aria-hidden="true"></i>
            </a>
          </Link>
          </div>
        </div>
      </div>
    )
}

export default Card;