import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

import table from '@/assets/imgs/table.png';
import labtop from '@/assets/imgs/labtop.png'
import macrame from '@/assets/imgs/macrame.png'
import mirror from '@/assets/imgs/mirror.png'
import { Link } from 'react-router-dom';
import { useProducts } from '@/context/productContext';
import { Product } from '@/utils/context-interface/productInterface';

export default function () {
    const { products } = useProducts()
    return (
        <div className='w-[100%] flex justify-center items-center'>
            <div className='listOfcards w-[90%] p-4 flex  items-center gap-5 flex-wrap'>

                {
                    products.map((product: Product, index: number) => (

                        <Card className="w-[330px] shadow-md">
                            <CardHeader className='p-0  w-full'>
                                <img src={product.image} alt="card1 img" style={{ height: "150px" }} />
                            </CardHeader>
                            <CardContent className='p-4'>
                                <h3 className='font-bold'>
                                    <Link to="/ServicesPage/product-details">
                                        {product.name}
                                    </Link>

                                </h3>
                                <p>
                                    {product.description.length > 50 ? product.description.slice(0, 50) + '....' : product.description}
                                </p>
                                <h2 className='font-bold'>$ {product.price}</h2>
                            </CardContent>
                            <CardFooter>
                                <span>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.454 16.671C6.30341 14.5163 4.64952 11.9177 3.608 9.05702C3.035 7.49302 3.56 5.77502 4.738 4.59702L5.467 3.86902C5.66299 3.67264 5.89578 3.51684 6.15205 3.41053C6.40833 3.30423 6.68305 3.24951 6.9605 3.24951C7.23795 3.24951 7.51267 3.30423 7.76894 3.41053C8.02522 3.51684 8.25801 3.67264 8.454 3.86902L10.161 5.57602C10.3574 5.77201 10.5132 6.0048 10.6195 6.26108C10.7258 6.51735 10.7805 6.79208 10.7805 7.06952C10.7805 7.34697 10.7258 7.62169 10.6195 7.87797C10.5132 8.13424 10.3574 8.36704 10.161 8.56302L9.741 8.98302C9.57288 9.1511 9.43953 9.35065 9.34854 9.57028C9.25755 9.7899 9.21073 10.0253 9.21073 10.263C9.21073 10.5007 9.25755 10.7361 9.34854 10.9558C9.43953 11.1754 9.57288 11.3749 9.741 11.543L13.581 15.384C13.7491 15.5521 13.9486 15.6855 14.1683 15.7765C14.3879 15.8675 14.6233 15.9143 14.861 15.9143C15.0987 15.9143 15.3341 15.8675 15.5537 15.7765C15.7734 15.6855 15.9729 15.5521 16.141 15.384L16.562 14.964C16.758 14.7676 16.9908 14.6118 17.2471 14.5055C17.5033 14.3992 17.7781 14.3445 18.0555 14.3445C18.3329 14.3445 18.6077 14.3992 18.8639 14.5055C19.1202 14.6118 19.353 14.7676 19.549 14.964L21.256 16.671C21.4524 16.867 21.6082 17.0998 21.7145 17.3561C21.8208 17.6124 21.8755 17.8871 21.8755 18.1645C21.8755 18.442 21.8208 18.7167 21.7145 18.973C21.6082 19.2292 21.4524 19.462 21.256 19.658L20.528 20.386C19.35 21.565 17.632 22.09 16.068 21.517C13.2073 20.4755 10.6088 18.8216 8.454 16.671Z" stroke="#0D929A" stroke-width="1.5" stroke-linejoin="round" />
                                    </svg>


                                </span>
                                <p className="text-sm text-muted-foreground p-1" style={{ color: '#00ABB6' }}>(480) 555-0103
                                </p>

                            </CardFooter>
                        </Card>
                    ))
                }


            </div>
        </div>
    )
}
