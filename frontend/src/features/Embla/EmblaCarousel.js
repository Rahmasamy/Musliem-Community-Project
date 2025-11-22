import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useProducts } from '@/context/productContext';
import DefaultProductImage from '@/assets/imgs/labtop.png';
const EmblaCarousel = () => {
    const { products, page, totalPages, setPage } = useProducts();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }); // خلي loop=false عشان نتحكم بالصفحات
    const [, setPrevBtnDisabled] = useState(true);
    const [, setNextBtnDisabled] = useState(true);
    const onSelect = useCallback(() => {
        if (!emblaApi)
            return;
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, [emblaApi]);
    const scrollPrev = useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page, setPage]);
    const scrollNext = useCallback(() => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    }, [page, totalPages, setPage]);
    useEffect(() => {
        if (!emblaApi)
            return;
        onSelect();
        emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);
    if (!products || products.length === 0) {
        return (_jsx("div", { className: "relative w-full overflow-hidden", children: _jsx("div", { className: "flex justify-center items-center h-64", children: _jsx("div", { className: "text-gray-500", children: "Loading products..." }) }) }));
    }
    return (_jsxs("div", { className: "relative w-full overflow-hidden", children: [_jsx("div", { className: "embla", ref: emblaRef, children: _jsx("div", { className: "flex", children: products.map((product) => (_jsx("div", { className: "min-w-[33.3333%] p-2", children: _jsxs(Card, { className: "shadow-md rounded-lg overflow-hidden mx-auto h-[320px] flex flex-col ", children: [_jsx(CardHeader, { className: "p-0 flex-shrink-0", children: _jsx("img", { src: product.image || DefaultProductImage, alt: product.name, className: "w-full h-[150px] object-cover", onError: (e) => {
                                            e.currentTarget.src = DefaultProductImage;
                                        } }) }), _jsxs(CardContent, { className: "p-4 flex-1 flex flex-col", children: [_jsx("h3", { className: "font-bold text-lg mb-1 line-clamp-2", children: _jsx(Link, { to: `/ServicesPage/product-details/${product._id}`, className: "hover:underline text-black", children: product.name }) }), _jsx("p", { className: "text-sm text-gray-600 leading-snug line-clamp-3 flex-1", children: product.description }), _jsxs("h2", { className: "font-bold mt-3 text-xl", children: ["$", product.price] })] }), _jsxs(CardFooter, { className: "flex items-center justify-between px-4 pb-4 flex-shrink-0", children: [_jsx("span", { className: "text-sm text-gray-500", children: "Available now" }), _jsx("p", { className: "text-sm font-semibold text-[#00ABB6]", children: "  Send Message" })] })] }) }, product._id))) }) }), _jsx("button", { className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 hover:bg-gray-100 transition rounded-full p-2 shadow disabled:opacity-30", onClick: scrollPrev, disabled: page === 1, children: _jsx(ChevronLeft, {}) }), _jsx("button", { className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 hover:bg-gray-100 transition rounded-full p-2 shadow disabled:opacity-30", onClick: scrollNext, disabled: page === totalPages, children: _jsx(ChevronRight, {}) }), _jsxs("div", { className: "text-center mt-3 text-sm text-gray-600", children: ["Page ", page, " of ", totalPages] })] }));
};
export default EmblaCarousel;
