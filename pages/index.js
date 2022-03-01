import Link from 'next/link'

export default function Home() {

  return (
    <div className="container">
      <Link href="/kitchensink1">
          <a>Kitchensink 1</a>
        </Link>

        <Link href="/kitchensink2">
          <a>Kitchensink 2</a>
        </Link>
    </div>
  )
}
