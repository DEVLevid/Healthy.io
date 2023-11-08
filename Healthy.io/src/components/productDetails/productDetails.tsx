import { Button } from '@chakra-ui/react'
import './productDetails.css'

export default function ProductDetails (){
    return(
        <div className="productDetail">
        <div className="productDescription">
          <h2>Assinatura Mensal</h2>
          <p>Você irá pagar :</p>
          <span>R$ 250,00</span>
          <Button colorScheme="teal" variant="solid">
            Pagar
          </Button>
        </div>
        <div className="imageContainer">
          <img
            src="\src\assets\Healthy lifestyle-amico.svg"
            alt="imageHealthy"
          />
        </div>
      </div>
    )
}