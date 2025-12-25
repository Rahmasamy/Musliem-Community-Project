import React, { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { useProducts } from '@/context/productContext'
import { Product } from '@/utils/context-interface/productInterface'
import DefaultProductImage from '@/assets/imgs/labtop.png'
import { ListingServicesLoading } from '@/components/common/loading/ListingServicesLoading'

const EmblaCarousel = () => {
  const { products, page, totalPages, setPage } = useProducts()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [, setPrevBtnDisabled] = useState(true)
  const [, setNextBtnDisabled] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (page > 1) {
      setPage(page - 1)
    }
  }, [page, setPage])

  const scrollNext = useCallback(() => {
    if (page < totalPages) {
      setPage(page + 1) 
    }
  }, [page, totalPages, setPage])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  if (!products || products.length === 0) {
    return (
      <div className="relative w-full overflow-hidden">
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-500">

            <ListingServicesLoading count={3} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full overflow-hidden px-8 sm:px-10 md:px-12">
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {products.map((product: Product) => (
            <div 
              className="min-w-full sm:min-w-[50%] lg:min-w-[33.3333%] p-2" 
              key={product._id}
            >
              <Card className="shadow-md rounded-lg overflow-hidden mx-auto h-[320px] sm:h-[340px] md:h-[360px] flex flex-col">
                <CardHeader className="p-0 flex-shrink-0">
                  <img
                    src={product.image || DefaultProductImage}
                    alt={product.name}
                    className="w-full h-[140px] sm:h-[150px] md:h-[160px] object-cover"
                    onError={(e) => {
                      e.currentTarget.src = DefaultProductImage
                    }}
                  />
                </CardHeader>

                <CardContent className="p-3 sm:p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-base sm:text-lg mb-1 line-clamp-2">
                    <Link 
                      to={`/ServicesPage/product-details/${product._id}`} 
                      className="hover:underline text-black"
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug line-clamp-3 flex-1">
                    {product.description}
                  </p>
                  <h2 className="font-bold mt-2 sm:mt-3 text-lg sm:text-xl">
                    ${product.price}
                  </h2>
                </CardContent>

                {/* <CardFooter className="flex items-center justify-between px-3 sm:px-4 pb-3 sm:pb-4 flex-shrink-0">
                  <span className="text-xs sm:text-sm text-gray-500">Available now</span>
                  <p className="text-xs sm:text-sm font-semibold text-[#00ABB6]">Send Message</p>
                </CardFooter> */}
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 hover:bg-gray-100 transition rounded-full p-1.5 sm:p-2 shadow disabled:opacity-30"
        onClick={scrollPrev}
        disabled={page === 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 hover:bg-gray-100 transition rounded-full p-1.5 sm:p-2 shadow disabled:opacity-30"
        onClick={scrollNext}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Pagination indicator */}
      <div className="text-center mt-3 text-xs sm:text-sm text-gray-600">
        Page {page} of {totalPages}
      </div>
    </div>
  )
}

export default EmblaCarousel