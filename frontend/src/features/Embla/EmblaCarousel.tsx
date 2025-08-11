import React, { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Labtop from '@/assets/imgs/labtop.png'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Link } from 'react-router-dom' // important if using React Router

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div className="min-w-[33.3333%] px-2" key={n}>
              <Card className="shadow-md rounded-lg overflow-hidden mx-auto">
                <CardHeader className="p-0">
                  <img
                    src={Labtop}
                    alt="Laptop"
                    className="w-full h-[150px] object-cover"
                  />
                </CardHeader>

                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">
                    <Link to="/ServicesPage/product-details" className="hover:underline text-black">
                      Laptop
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Lorem ipsum dolor sit amet consectetur. Felis porttitor nunc volutpat ultricies quis leo.
                  </p>
                  <h2 className="font-bold mt-3 text-xl">$299</h2>
                </CardContent>

                <CardFooter className="flex items-center justify-between px-4 pb-4">
                  <span className="text-sm text-gray-500">Available now</span>
                  <p className="text-sm font-semibold text-[#00ABB6]">(480) 555-0103</p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 hover:bg-gray-100 transition rounded-full p-2 shadow disabled:opacity-30"
        onClick={scrollPrev}
      
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 hover:bg-gray-100 transition rounded-full p-2 shadow disabled:opacity-30"
        onClick={scrollNext}
       
      >
        <ChevronRight />
      </button>
    </div>
  )
}

export default EmblaCarousel
