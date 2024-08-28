import Cart from "@/features/cart/components/Cart"
import Header from "./Header"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen flex-col">
      <Header />
      <div className="flex-1 h-[calc(100vh-70px)] md:h-[calc(100vh-60px)] overflow-y-auto relative">
        <Cart />
        {children}
      </div>
    </main>
  )
}

export default AppLayout
