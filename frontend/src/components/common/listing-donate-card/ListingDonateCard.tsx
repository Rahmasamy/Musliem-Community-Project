import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

import table from '@/assets/imgs/table.png';
import Donate from '@/assets/imgs/donate.png'

import { Link } from 'react-router-dom';
import OrangeButton from '../OrangeButton/OrangeButton';

export default function ListingDonateCard
    () {
    return (
        <div className='w-[100%] flex justify-center items-center'>
            <div className='listOfcards w-[90%] p-4 flex justify-center items-center gap-2 mx-2 flex-wrap '>
                <Card className="w-[330px] shadow-md">
                    <CardHeader className='p-0  w-full'>
                        <img src={Donate} alt="card1 img" style={{ height: "180px" }} className='object-cover' />
                    </CardHeader>
                    <CardContent className='p-4'>
                        <h3 className='font-bold'>
                            <Link to="/ServicesPage/product-details">
                                Donation For our Charity
                            </Link>

                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Felis porttitor nunc volutpat ultricies quis leo.
                        </p>
                        <h2 className='font-bold'>$ 299</h2>
                    </CardContent>
                    <CardFooter>
                        <OrangeButton title='Donate' icon={
                            <>
                                <span>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.086 10.6574L12.136 6.70741C11.9538 6.5188 11.853 6.2662 11.8553 6.00401C11.8576 5.74181 11.9628 5.491 12.1482 5.30559C12.3336 5.12018 12.5844 5.01501 12.8466 5.01273C13.1088 5.01045 13.3614 5.11125 13.55 5.29341L19.207 10.9504C19.3002 11.0431 19.3741 11.1532 19.4246 11.2746C19.4751 11.3959 19.501 11.526 19.501 11.6574C19.501 11.7888 19.4751 11.9189 19.4246 12.0403C19.3741 12.1616 19.3002 12.2718 19.207 12.3644L13.55 18.0214C13.4578 18.1169 13.3474 18.1931 13.2254 18.2455C13.1034 18.2979 12.9722 18.3255 12.8394 18.3267C12.7066 18.3278 12.5749 18.3025 12.452 18.2522C12.3291 18.2019 12.2175 18.1277 12.1236 18.0338C12.0297 17.9399 11.9555 17.8283 11.9052 17.7054C11.8549 17.5825 11.8296 17.4508 11.8307 17.318C11.8319 17.1852 11.8595 17.054 11.9119 16.932C11.9643 16.81 12.0405 16.6997 12.136 16.6074L16.086 12.6574H6.5C6.23478 12.6574 5.98043 12.5521 5.79289 12.3645C5.60536 12.177 5.5 11.9226 5.5 11.6574C5.5 11.3922 5.60536 11.1378 5.79289 10.9503C5.98043 10.7628 6.23478 10.6574 6.5 10.6574H16.086Z" fill="white" />
                                    </svg>



                                </span>
                            </>
                        } />



                    </CardFooter>
                </Card>
                 <Card className="w-[300px] shadow-md">
                    <CardHeader className='p-0  w-full'>
                        <img src={Donate} alt="card1 img" style={{ height: "180px" }} className='object-cover'  />
                    </CardHeader>
                    <CardContent className='p-4'>
                        <h3 className='font-bold'>
                            <Link to="/ServicesPage/product-details">
                                Donation For our Charity
                            </Link>

                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Felis porttitor nunc volutpat ultricies quis leo.
                        </p>
                        <h2 className='font-bold'>$ 299</h2>
                    </CardContent>
                    <CardFooter>
                        <OrangeButton title='Donate' icon={
                            <>
                                <span>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.086 10.6574L12.136 6.70741C11.9538 6.5188 11.853 6.2662 11.8553 6.00401C11.8576 5.74181 11.9628 5.491 12.1482 5.30559C12.3336 5.12018 12.5844 5.01501 12.8466 5.01273C13.1088 5.01045 13.3614 5.11125 13.55 5.29341L19.207 10.9504C19.3002 11.0431 19.3741 11.1532 19.4246 11.2746C19.4751 11.3959 19.501 11.526 19.501 11.6574C19.501 11.7888 19.4751 11.9189 19.4246 12.0403C19.3741 12.1616 19.3002 12.2718 19.207 12.3644L13.55 18.0214C13.4578 18.1169 13.3474 18.1931 13.2254 18.2455C13.1034 18.2979 12.9722 18.3255 12.8394 18.3267C12.7066 18.3278 12.5749 18.3025 12.452 18.2522C12.3291 18.2019 12.2175 18.1277 12.1236 18.0338C12.0297 17.9399 11.9555 17.8283 11.9052 17.7054C11.8549 17.5825 11.8296 17.4508 11.8307 17.318C11.8319 17.1852 11.8595 17.054 11.9119 16.932C11.9643 16.81 12.0405 16.6997 12.136 16.6074L16.086 12.6574H6.5C6.23478 12.6574 5.98043 12.5521 5.79289 12.3645C5.60536 12.177 5.5 11.9226 5.5 11.6574C5.5 11.3922 5.60536 11.1378 5.79289 10.9503C5.98043 10.7628 6.23478 10.6574 6.5 10.6574H16.086Z" fill="white" />
                                    </svg>



                                </span>
                            </>
                        } />



                    </CardFooter>
                </Card>
                 <Card className="w-[300px] shadow-md">
                    <CardHeader className='p-0  w-full'>
                        <img src={Donate} alt="card1 img"style={{ height: "180px" }} className='object-cover' />
                    </CardHeader>
                    <CardContent className='p-4'>
                        <h3 className='font-bold'>
                            <Link to="/ServicesPage/product-details">
                                Donation For our Charity
                            </Link>

                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Felis porttitor nunc volutpat ultricies quis leo.
                        </p>
                        <h2 className='font-bold'>$ 299</h2>
                    </CardContent>
                    <CardFooter>
                        <OrangeButton title='Donate' icon={
                            <>
                                <span>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.086 10.6574L12.136 6.70741C11.9538 6.5188 11.853 6.2662 11.8553 6.00401C11.8576 5.74181 11.9628 5.491 12.1482 5.30559C12.3336 5.12018 12.5844 5.01501 12.8466 5.01273C13.1088 5.01045 13.3614 5.11125 13.55 5.29341L19.207 10.9504C19.3002 11.0431 19.3741 11.1532 19.4246 11.2746C19.4751 11.3959 19.501 11.526 19.501 11.6574C19.501 11.7888 19.4751 11.9189 19.4246 12.0403C19.3741 12.1616 19.3002 12.2718 19.207 12.3644L13.55 18.0214C13.4578 18.1169 13.3474 18.1931 13.2254 18.2455C13.1034 18.2979 12.9722 18.3255 12.8394 18.3267C12.7066 18.3278 12.5749 18.3025 12.452 18.2522C12.3291 18.2019 12.2175 18.1277 12.1236 18.0338C12.0297 17.9399 11.9555 17.8283 11.9052 17.7054C11.8549 17.5825 11.8296 17.4508 11.8307 17.318C11.8319 17.1852 11.8595 17.054 11.9119 16.932C11.9643 16.81 12.0405 16.6997 12.136 16.6074L16.086 12.6574H6.5C6.23478 12.6574 5.98043 12.5521 5.79289 12.3645C5.60536 12.177 5.5 11.9226 5.5 11.6574C5.5 11.3922 5.60536 11.1378 5.79289 10.9503C5.98043 10.7628 6.23478 10.6574 6.5 10.6574H16.086Z" fill="white" />
                                    </svg>



                                </span>
                            </>
                        } />



                    </CardFooter>
                </Card>
                 <Card className="w-[300px] shadow-md">
                    <CardHeader className='p-0  w-full'>
                        <img src={Donate} alt="card1 img" style={{ height: "180px" }} className='object-cover' />
                    </CardHeader>
                    <CardContent className='p-4'>
                        <h3 className='font-bold'>
                            <Link to="/ServicesPage/product-details">
                                Donation For our Charity
                            </Link>

                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Felis porttitor nunc volutpat ultricies quis leo.
                        </p>
                        <h2 className='font-bold'>$ 299</h2>
                    </CardContent>
                    <CardFooter>
                        <OrangeButton title='Donate' icon={
                            <>
                                <span>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.086 10.6574L12.136 6.70741C11.9538 6.5188 11.853 6.2662 11.8553 6.00401C11.8576 5.74181 11.9628 5.491 12.1482 5.30559C12.3336 5.12018 12.5844 5.01501 12.8466 5.01273C13.1088 5.01045 13.3614 5.11125 13.55 5.29341L19.207 10.9504C19.3002 11.0431 19.3741 11.1532 19.4246 11.2746C19.4751 11.3959 19.501 11.526 19.501 11.6574C19.501 11.7888 19.4751 11.9189 19.4246 12.0403C19.3741 12.1616 19.3002 12.2718 19.207 12.3644L13.55 18.0214C13.4578 18.1169 13.3474 18.1931 13.2254 18.2455C13.1034 18.2979 12.9722 18.3255 12.8394 18.3267C12.7066 18.3278 12.5749 18.3025 12.452 18.2522C12.3291 18.2019 12.2175 18.1277 12.1236 18.0338C12.0297 17.9399 11.9555 17.8283 11.9052 17.7054C11.8549 17.5825 11.8296 17.4508 11.8307 17.318C11.8319 17.1852 11.8595 17.054 11.9119 16.932C11.9643 16.81 12.0405 16.6997 12.136 16.6074L16.086 12.6574H6.5C6.23478 12.6574 5.98043 12.5521 5.79289 12.3645C5.60536 12.177 5.5 11.9226 5.5 11.6574C5.5 11.3922 5.60536 11.1378 5.79289 10.9503C5.98043 10.7628 6.23478 10.6574 6.5 10.6574H16.086Z" fill="white" />
                                    </svg>



                                </span>
                            </>
                        } />



                    </CardFooter>
                </Card>
                 <Card className="w-[300px] shadow-md">
                    <CardHeader className='p-0  w-full'>
                        <img src={Donate} alt="card1 img" style={{ height: "180px" }} className='object-cover'  />
                    </CardHeader>
                    <CardContent className='p-4'>
                        <h3 className='font-bold'>
                            <Link to="/ServicesPage/product-details">
                                Donation For our Charity
                            </Link>

                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Felis porttitor nunc volutpat ultricies quis leo.
                        </p>
                        <h2 className='font-bold'>$ 299</h2>
                    </CardContent>
                    <CardFooter>
                        <OrangeButton title='Donate' icon={
                            <>
                                <span>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.086 10.6574L12.136 6.70741C11.9538 6.5188 11.853 6.2662 11.8553 6.00401C11.8576 5.74181 11.9628 5.491 12.1482 5.30559C12.3336 5.12018 12.5844 5.01501 12.8466 5.01273C13.1088 5.01045 13.3614 5.11125 13.55 5.29341L19.207 10.9504C19.3002 11.0431 19.3741 11.1532 19.4246 11.2746C19.4751 11.3959 19.501 11.526 19.501 11.6574C19.501 11.7888 19.4751 11.9189 19.4246 12.0403C19.3741 12.1616 19.3002 12.2718 19.207 12.3644L13.55 18.0214C13.4578 18.1169 13.3474 18.1931 13.2254 18.2455C13.1034 18.2979 12.9722 18.3255 12.8394 18.3267C12.7066 18.3278 12.5749 18.3025 12.452 18.2522C12.3291 18.2019 12.2175 18.1277 12.1236 18.0338C12.0297 17.9399 11.9555 17.8283 11.9052 17.7054C11.8549 17.5825 11.8296 17.4508 11.8307 17.318C11.8319 17.1852 11.8595 17.054 11.9119 16.932C11.9643 16.81 12.0405 16.6997 12.136 16.6074L16.086 12.6574H6.5C6.23478 12.6574 5.98043 12.5521 5.79289 12.3645C5.60536 12.177 5.5 11.9226 5.5 11.6574C5.5 11.3922 5.60536 11.1378 5.79289 10.9503C5.98043 10.7628 6.23478 10.6574 6.5 10.6574H16.086Z" fill="white" />
                                    </svg>



                                </span>
                            </>
                        } />



                    </CardFooter>
                </Card>
                 <Card className="w-[300px] shadow-md">
                    <CardHeader className='p-0  w-full'>
                        <img src={Donate} alt="card1 img" style={{ height: "180px" }} className='object-cover' />
                    </CardHeader>
                    <CardContent className='p-4'>
                        <h3 className='font-bold'>
                            <Link to="/ServicesPage/product-details">
                                Donation For our Charity
                            </Link>

                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Felis porttitor nunc volutpat ultricies quis leo.
                        </p>
                        <h2 className='font-bold'>$ 299</h2>
                    </CardContent>
                    <CardFooter>
                        <OrangeButton title='Donate' icon={
                            <>
                                <span>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.086 10.6574L12.136 6.70741C11.9538 6.5188 11.853 6.2662 11.8553 6.00401C11.8576 5.74181 11.9628 5.491 12.1482 5.30559C12.3336 5.12018 12.5844 5.01501 12.8466 5.01273C13.1088 5.01045 13.3614 5.11125 13.55 5.29341L19.207 10.9504C19.3002 11.0431 19.3741 11.1532 19.4246 11.2746C19.4751 11.3959 19.501 11.526 19.501 11.6574C19.501 11.7888 19.4751 11.9189 19.4246 12.0403C19.3741 12.1616 19.3002 12.2718 19.207 12.3644L13.55 18.0214C13.4578 18.1169 13.3474 18.1931 13.2254 18.2455C13.1034 18.2979 12.9722 18.3255 12.8394 18.3267C12.7066 18.3278 12.5749 18.3025 12.452 18.2522C12.3291 18.2019 12.2175 18.1277 12.1236 18.0338C12.0297 17.9399 11.9555 17.8283 11.9052 17.7054C11.8549 17.5825 11.8296 17.4508 11.8307 17.318C11.8319 17.1852 11.8595 17.054 11.9119 16.932C11.9643 16.81 12.0405 16.6997 12.136 16.6074L16.086 12.6574H6.5C6.23478 12.6574 5.98043 12.5521 5.79289 12.3645C5.60536 12.177 5.5 11.9226 5.5 11.6574C5.5 11.3922 5.60536 11.1378 5.79289 10.9503C5.98043 10.7628 6.23478 10.6574 6.5 10.6574H16.086Z" fill="white" />
                                    </svg>



                                </span>
                            </>
                        } />



                    </CardFooter>
                </Card>
               
            </div>
        </div>
    )
}
