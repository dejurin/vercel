import Link from "next/link";

export default function Home({params}: { params: any }) {
  return (
    <main>
      <div>
          <p>
            TEST PAGE: <Link prefetch={false} href="/">{params.locale}</Link>
          </p>
      </div>
    </main>
  )
}
