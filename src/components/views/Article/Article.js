import styles from './Article.module.scss';

const Article = () => {
    return (
        <div className={styles.wrapper}>
            <p>Sourcing the world’s best coffees. Roasting them locally—and uniquely.
                We’re New York’s original specialty roaster.
                No gimmicks. No fancy marketing.

                We’ve just quietly been doing what we’ve done best since 1986: sourcing the best coffee beans from all over the world and
                roasting them locally, fresh, and in our own unique way—every day.

                We work closely with our partners to inspect and taste every batch to ensure we only give you the best coffee possible.

                It’s why we have our Freshness 24 Guarantee, ensuring the beans you purchase have left our special roaster within a day —
                not days, weeks or even months ago.

                We think it’s the right way to do it.
                You’ll think it’s the best tasting coffee.
            </p>
        </div>
      );
}
 
export default Article;