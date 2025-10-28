import styles from "../components/page.module.css";

const imgBackgroundImageHero = "https://www.figma.com/api/mcp/asset/62fcd32c-169b-40ae-8433-b28e02229838";
const imgImage3 = "https://www.figma.com/api/mcp/asset/9f81348a-94de-43df-8f55-b7bf0852b3c3";
const imgImage7 = "https://www.figma.com/api/mcp/asset/3fc152dc-7eef-4659-80bb-3ea0cc09403f";
const imgImage9 = "https://www.figma.com/api/mcp/asset/09c88bf1-88e7-476a-8e1b-798ce94b2a42";
const imgImage10 = "https://www.figma.com/api/mcp/asset/0afde965-04f1-418e-ace3-8a087a555521";

export default function Home() {
  return (
    <div className={styles.container} data-node-id="1:6">
      {/* Header is provided by the site layout (`Navbar` in app/layout.tsx) */}

      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${imgBackgroundImageHero})` }}
        aria-label="Hero"
      >
        <div className={styles.heroInner}>
          <h1 className={styles.h1}>
            Connect. Act.
            <br />
            <span className={styles.h1Accent}>Bloom.</span>
          </h1>
          <p className={styles.lead}>
            Bloom is your space for local environmental action—meet like-minded change makers, join green
            initiatives, and help your community thrive sustainably.
          </p>
        </div>
      </section>

      <section className={styles.spotlight}>
        <div className={styles.spotlightText}>
          <div className={styles.kicker}>City Spotlight</div>
          <h2 className={styles.cityTitle}>New York City</h2>
          <p className={styles.description}>
            Since launching in NYC, Bloom has brought together over 25,000 people—uniting neighbors, students, and
            activists in local environmental action. Through the platform, New Yorkers have organized 300+ cleanups and
            150+ tree-planting events.
          </p>
          <button className={styles.cta}>LEARN MORE</button>
        </div>
        <div className={styles.spotlightMedia}>
          <img src={imgImage3} alt="City spotlight" className={styles.mapImage} />
        </div>
      </section>

      <section className={styles.statsAndCards}>
        <div className={styles.stats}>
          <div>
            <div className={styles.statNumber}>8.5M</div>
            <div className={styles.statLabel}>Total Population</div>
          </div>
          <div>
            <div className={styles.statNumber}>12k</div>
            <div className={styles.statLabel}>Active Members</div>
          </div>
          <div>
            <div className={styles.statNumber}>17%</div>
            <div className={styles.statLabel}>Recycling Rate</div>
          </div>
        </div>

        <div className={styles.cards}>
          <article className={styles.card}>
            <img src={imgImage7} alt="Bike lanes" className={styles.cardImg} />
            <h3>30+</h3>
            <p>Miles of Bike Lanes</p>
          </article>
          <article className={styles.card}>
            <img src={imgImage9} alt="City skyline" className={styles.cardImg} />
            <h3>30%</h3>
            <p>Energy Usage Cut</p>
          </article>
          <article className={styles.card}>
            <img src={imgImage10} alt="Rooftop garden" className={styles.cardImg} />
            <h3>200+</h3>
            <p>Rooftop Gardens</p>
          </article>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>© Bloom</div>
      </footer>
    </div>
  );
}


