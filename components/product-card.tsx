import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"
import Image from "next/image"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  stock: number
  rating: number
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const handleCreateLink = () => {
    const payload = {
      "amount": product.price,
      "properties": {
        "email": "dyanmicore@yopmail.com",
        "fullName": "DynamiCore",
        "phone": "+525592975307",
        "taxId": "XXXX",
        "concept": product.name,
      }
    }

    btoa
  }
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute right-2 top-2 bg-card text-card-foreground shadow-md">{product.category}</Badge>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>· {product.stock} disponibles</span>
        </div>

        <h3 className="text-balance text-lg font-semibold leading-tight text-foreground">{product.name}</h3>

        <div className="mt-auto">
          <div className="text-3xl font-bold text-foreground">${product.price.toFixed(2)}</div>
          <p className="text-sm text-muted-foreground">Envío gratis</p>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2" size="lg">
          <ShoppingCart className="h-4 w-4" />
          Proceder al Pago
        </Button>
      </CardFooter>
    </Card>
  )
}
