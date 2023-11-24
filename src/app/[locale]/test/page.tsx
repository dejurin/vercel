export default function Home({params}: { params: any }) {
  return (
    <main>
      <div>
          <p>
            TEST PAGE: {params.locale}
          </p>
      </div>
    </main>
  )
}
