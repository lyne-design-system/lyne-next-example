import LyneButton from '../components/LyneButton';
import LyneAccordion from '../components/LyneAccordion';
import Link from 'next/link';

export default function Kitchensink1() {

  return (
    <div className="container">
      <Link href="/">
        <a>Back to home</a>
      </Link>
      
      <h1>Kitchensink 1</h1>

      <LyneButton />
      <LyneAccordion />
    </div>
  )
}
