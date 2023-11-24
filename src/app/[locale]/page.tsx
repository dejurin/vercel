export default function Home({params}: { params: any }) {
  return (
    <main>
      <div>
          <p>
            locale: {params.locale}
          </p>
      </div>
    </main>
  )
}
