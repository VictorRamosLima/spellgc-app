import { useState } from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import { CartItem } from './CartItem'

interface Product {
  id: number
  price: number
  title: string
  image: string
}

export const Cart = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: 'TRISHULA',
      price: 33.9,
      image: 'https://ms.yugipedia.com/0/07/TrishulaZeroDragonoftheIceBarrier-SDFC-EN-UR-1E.png'
    },
    {
      id: 2,
      title: 'GEARGIAGEAR GIANT XGL',
      price: 1.3,
      image: 'https://cdna.artstation.com/p/assets/images/images/017/015/360/large/shapt-g-geargiagear-gigant-xgl.jpg'
    },
    {
      id: 3,
      title: 'SUPREME KING DRAGON ZARC',
      price: 57.99,
      image: 'https://i.pinimg.com/originals/29/93/11/29931198f579341f7616a00c11d5751a.png'
    },
    {
      id: 5,
      title: 'EMPEROR OF LIGHTNING',
      price: 13.99,
      image: 'https://ygoprodeck.com/pics/501000007.jpg'
    },
    {
      id: 6,
      title: 'NEO BLUE EYES ULTIMATE DRAGON',
      price: 5.2,
      image: 'https://ms.yugipedia.com//b/bd/NeoBlueEyesUltimateDragon-MVP1-EN-ScR-1E.png'
    },
    {
      id: 4,
      title: 'BLUE EYES CHAOS MAX DRAGON',
      price: 29.99,
      image: 'https://www.duelshop.com.br/5452/blue-eyes-chaos-max-dragon-mvp1-en004-ultra-rare.jpg'
    }
  ])

  return (
    <SimpleGrid as="ul" minChildWidth="300px" gridGap="20px">
      {products.map(product => (
        <CartItem
          key={product.id}
          price={product.price}
          title={product.title}
          image={product.image}
        />
      ))}
    </SimpleGrid>
  )
}
