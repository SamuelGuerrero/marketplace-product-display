import { ProductCard } from "@/components/product-card"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Laptop Profesional XPS 15",
    price: 1299.99,
    image: "/modern-laptop-computer.jpg",
    category: "Electrónica",
    stock: 15,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Auriculares Bluetooth Premium",
    price: 199.99,
    image: "/premium-wireless-headphones.png",
    category: "Audio",
    stock: 28,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Teclado Mecánico RGB",
    price: 149.99,
    image: "/mechanical-keyboard-with-rgb-lights.jpg",
    category: "Accesorios",
    stock: 42,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Monitor 4K UltraWide",
    price: 599.99,
    image: "/ultrawide-4k-monitor.jpg",
    category: "Electrónica",
    stock: 8,
    rating: 4.9,
  },
  {
    id: 5,
    name: "Webcam HD 1080p",
    price: 89.99,
    image: "/hd-webcam-camera.jpg",
    category: "Accesorios",
    stock: 35,
    rating: 4.5,
  },
  {
    id: 6,
    name: "Mouse Inalámbrico Ergonómico",
    price: 59.99,
    image: "/ergonomic-wireless-mouse.jpg",
    category: "Accesorios",
    stock: 50,
    rating: 4.4,
  },
]

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <ShoppingCart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">DynamiCore Market</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Productos
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Encuentra los mejores productos tecnológicos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Descubre nuestra selección de productos premium con los mejores precios del mercado
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground">Productos Destacados</h2>
          <p className="mt-2 text-muted-foreground">Explora nuestra colección de productos más populares</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 DynamiCore Market. Todos los derechos reservados.</p>
        </div>
        <div className="flex w-full justify-center space-x-5 mt-5 text-blue-500 underline font-bold">
          
          <a href="https://dynamicore.io/terminos-y-condiciones">Términos y condiciones</a>
          <a href="https://dynamicore.io/aviso-de-privacidad">Aviso de privacidad</a>
        </div>
      </footer>
    </div>
  )
}
