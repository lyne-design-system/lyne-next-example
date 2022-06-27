import Link from 'next/link';

import SbbAccordion from '../components/SbbAccordion';
import SbbAutocomplete from '../components/SbbAutocomplete';
import SbbButton from '../components/SbbButton';
import SbbCardBadge from '../components/SbbCardBadge';
import SbbCardProduct from '../components/SbbCardProduct';
import SbbImage from '../components/SbbImage';
import SbbInputError from '../components/SbbInputError';
import SbbJourneyHeader from '../components/SbbJourneyHeader';
import SbbLink from '../components/SbbLink';
import SbbLinkList from '../components/SbbLinkList';
import SbbPanel from '../components/SbbPanel';
import SbbPearlChain from '../components/SbbPearlChain';
import SbbClock from '../components/SbbClock';
import SbbLogo from '../components/SbbLogo';
import SbbSignet from '../components/SbbSignet';
import SbbTeaserHero from '../components/SbbTeaserHero';
import SbbTextInput from '../components/SbbTextInput';
import SbbTimetable from '../components/SbbTimetable';
import SbbTimetableRow from '../components/SbbTimetableRow';
import SbbTitle from '../components/SbbTitle';

import styles from './kitchensink.module.css'

export default function Kitchensink1() {

  return (
    <div className={styles.container}>
      <Link href="/">
        <a>Back to home</a>
      </Link>

      <h1>Kitchensink 1</h1>

      <h2 className={styles.componentTitle}>LyneButton</h2>
      <div className={styles.componentContainer}>
        <SbbButton />
      </div>

      <h2 className={styles.componentTitle}>LyneAccordion</h2>
      <div className={styles.componentContainer}>
        <SbbAccordion />
      </div>

      <h2 className={styles.componentTitle}>LyneAutocomplete</h2>
      <div className={`${styles.componentContainer} ${styles.autocomplete}`}>
        <SbbAutocomplete />
      </div>

      <h2 className={styles.componentTitle}>LyneCardBadge</h2>
      <div className={styles.componentContainer}>
        <SbbCardBadge />
      </div>

      <h2 className={styles.componentTitle}>LyneCardProduct</h2>
      <div className={styles.componentContainer}>
        <SbbCardProduct />
      </div>

      <h2 className={styles.componentTitle}>LyneImage</h2>
      <div className={styles.componentContainer}>
        <SbbImage />
      </div>

      <h2 className={styles.componentTitle}>LyneInputError</h2>
      <div className={styles.componentContainer}>
        <SbbInputError />
      </div>

      <h2 className={styles.componentTitle}>LyneJourneyHeader</h2>
      <div className={styles.componentContainer}>
        <SbbJourneyHeader />
      </div>

      <h2 className={styles.componentTitle}>LyneLink</h2>
      <div className={styles.componentContainer}>
        <SbbLink />
      </div>

      <h2 className={styles.componentTitle}>LyneLinkList</h2>
      <div className={styles.componentContainer}>
        <SbbLinkList />
      </div>

      <h2 className={styles.componentTitle}>LynePanel</h2>
      <div className={styles.componentContainer}>
        <SbbPanel />
      </div>

      <h2 className={styles.componentTitle}>LynePearlChain</h2>
      <div className={styles.componentContainer}>
        <SbbPearlChain />
      </div>

      <h2 className={styles.componentTitle}>LyneSbbClock</h2>
      <div className={styles.componentContainer}>
        <SbbClock />
      </div>

      <h2 className={styles.componentTitle}>LyneSbbLogo</h2>
      <div className={styles.componentContainer}>
        <SbbLogo />
      </div>

      <h2 className={styles.componentTitle}>LyneSbbSignet</h2>
      <div className={styles.componentContainer}>
        <SbbSignet />
      </div>

      <h2 className={styles.componentTitle}>LyneTeaserHero</h2>
      <div className={styles.componentContainer}>
        <SbbTeaserHero />
      </div>

      <h2 className={styles.componentTitle}>LyneTextInput</h2>
      <div className={styles.componentContainer}>
        <SbbTextInput />
      </div>

      <h2 className={styles.componentTitle}>LyneTimetable</h2>
      <div className={styles.componentContainer}>
        <SbbTimetable />
      </div>

      <h2 className={styles.componentTitle}>LyneTimetableRow</h2>
      <div className={styles.componentContainer}>
        <SbbTimetableRow />
      </div>

      <h2 className={styles.componentTitle}>LyneTitle</h2>
      <div className={styles.componentContainer}>
        <SbbTitle />
      </div>
    </div>
  )
}
