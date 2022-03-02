import Link from 'next/link';

import LyneAccordion from '../components/LyneAccordion';
import LyneAutocomplete from '../components/LyneAutocomplete';
import LyneButton from '../components/LyneButton';
import LyneCardBadge from '../components/LyneCardBadge';
import LyneCardProduct from '../components/LyneCardProduct';
import LyneImage from '../components/LyneImage';
import LyneInputError from '../components/LyneInputError';
import LyneJourneyHeader from '../components/LyneJourneyHeader';
import LyneLink from '../components/LyneLink';
import LyneLinkList from '../components/LyneLinkList';
import LynePanel from '../components/LynePanel';
import LynePearlChain from '../components/LynePearlChain';
import LyneSbbClock from '../components/LyneSbbClock';
import LyneSbbLogo from '../components/LyneSbbLogo';
import LyneSbbSignet from '../components/LyneSbbSignet';
import LyneTeaserHero from '../components/LyneTeaserHero';
import LyneTextInput from '../components/LyneTextInput';
import LyneTimetable from '../components/LyneTimetable';
import LyneTimetableRow from '../components/LyneTimetableRow';
import LyneTitle from '../components/LyneTitle';

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
        <LyneButton />
      </div>

      <h2 className={styles.componentTitle}>LyneAccordion</h2>
      <div className={styles.componentContainer}>
        <LyneAccordion />
      </div>

      <h2 className={styles.componentTitle}>LyneAutocomplete</h2>
      <div className={`${styles.componentContainer} ${styles.autocomplete}`}>
        <LyneAutocomplete />
      </div>

      <h2 className={styles.componentTitle}>LyneCardBadge</h2>
      <div className={styles.componentContainer}>
        <LyneCardBadge />
      </div>

      <h2 className={styles.componentTitle}>LyneCardProduct</h2>
      <div className={styles.componentContainer}>
        <LyneCardProduct />
      </div>

      <h2 className={styles.componentTitle}>LyneImage</h2>
      <div className={styles.componentContainer}>
        <LyneImage />
      </div>

      <h2 className={styles.componentTitle}>LyneInputError</h2>
      <div className={styles.componentContainer}>
        <LyneInputError />
      </div>

      <h2 className={styles.componentTitle}>LyneJourneyHeader</h2>
      <div className={styles.componentContainer}>
        <LyneJourneyHeader />
      </div>

      <h2 className={styles.componentTitle}>LyneLink</h2>
      <div className={styles.componentContainer}>
        <LyneLink />
      </div>

      <h2 className={styles.componentTitle}>LyneLinkList</h2>
      <div className={styles.componentContainer}>
        <LyneLinkList />
      </div>

      <h2 className={styles.componentTitle}>LynePanel</h2>
      <div className={styles.componentContainer}>
        <LynePanel />
      </div>

      <h2 className={styles.componentTitle}>LynePearlChain</h2>
      <div className={styles.componentContainer}>
        <LynePearlChain />
      </div>

      <h2 className={styles.componentTitle}>LyneSbbClock</h2>
      <div className={styles.componentContainer}>
        <LyneSbbClock />
      </div>

      <h2 className={styles.componentTitle}>LyneSbbLogo</h2>
      <div className={styles.componentContainer}>
        <LyneSbbLogo />
      </div>

      <h2 className={styles.componentTitle}>LyneSbbSignet</h2>
      <div className={styles.componentContainer}>
        <LyneSbbSignet />
      </div>

      <h2 className={styles.componentTitle}>LyneTeaserHero</h2>
      <div className={styles.componentContainer}>
        <LyneTeaserHero />
      </div>

      <h2 className={styles.componentTitle}>LyneTextInput</h2>
      <div className={styles.componentContainer}>
        <LyneTextInput />
      </div>

      <h2 className={styles.componentTitle}>LyneTimetable</h2>
      <div className={styles.componentContainer}>
        <LyneTimetable />
      </div>

      <h2 className={styles.componentTitle}>LyneTimetableRow</h2>
      <div className={styles.componentContainer}>
        <LyneTimetableRow />
      </div>

      <h2 className={styles.componentTitle}>LyneTitle</h2>
      <div className={styles.componentContainer}>
        <LyneTitle />
      </div>
    </div>
  )
}
