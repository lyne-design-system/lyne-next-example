import Link from 'next/link';

export default function Home() {

  return (
    <div className="container">
      <Link href="/kitchensink">
        <a>Kitchensink</a>
      </Link>
    </div>
  )
}
