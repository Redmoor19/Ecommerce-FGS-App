import Header from "./Header"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen flex-col">
      <Header />
      <div className="flex-1">{children}</div>
    </main>
  )
}

export default AppLayout
