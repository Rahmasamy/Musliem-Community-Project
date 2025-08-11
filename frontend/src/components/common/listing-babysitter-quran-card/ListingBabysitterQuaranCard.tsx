import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Donate from '@/assets/imgs/donate.png'
const babysitters = [
    {
        name: 'Emmy Watson',
        price: 299,
        location: 'Dearborn, Michigan',
        phone: '(480) 555-0103',
        image: Donate,
    },
    {
        name: 'Sara Ali',
        price: 250,
        location: 'Detroit, Michigan',
        phone: '(313) 555-1122',
        image: Donate,
    },
     {
        name: 'Sara Ali',
        price: 250,
        location: 'Detroit, Michigan',
        phone: '(313) 555-1122',
        image: Donate,
    },

];

export default function ListingBabysitterQuaranCard
    () {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[90%] p-4 flex justify-between items-center gap-4 flex-wrap'>
                {babysitters.map((babysitter, index) => (
                    <Card key={index} className="w-[300px] shadow-md">
                        <CardHeader className='p-0'>
                            <img
                                src={babysitter.image}
                                alt={babysitter.name}
                                style={{ height: "180px" }}
                                className='w-full object-cover rounded-t-md'
                            />
                        </CardHeader>
                        <CardContent className='p-4 space-y-2'>
                            <h3 className='text-lg font-bold'>{babysitter.name}</h3>
                            <h2 className='text-xl font-bold text-gray-800'>$
                                <span className='font-bold'>
                                    {babysitter.price}
                                </span>
                            </h2>
                            <p className='text-sm text-gray-600'>
                                <span>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.80207 4.07062C6.91981 2.97524 8.42467 2.36522 9.98964 2.37312C11.5546 2.38103 13.0532 3.00622 14.1599 4.11283C15.2665 5.21945 15.8917 6.71807 15.8996 8.28305C15.9075 9.84802 15.2975 11.3529 14.2021 12.4706L11.0626 15.6101C10.7813 15.8913 10.3998 16.0493 10.0021 16.0493C9.60432 16.0493 9.22286 15.8913 8.94157 15.6101L5.80207 12.4706C4.68824 11.3567 4.0625 9.8459 4.0625 8.27062C4.0625 6.69534 4.68824 5.18457 5.80207 4.07062Z" stroke="#5F5F5F" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M10.0039 10.5205C11.2465 10.5205 12.2539 9.51315 12.2539 8.27051C12.2539 7.02787 11.2465 6.02051 10.0039 6.02051C8.76127 6.02051 7.75391 7.02787 7.75391 8.27051C7.75391 9.51315 8.76127 10.5205 10.0039 10.5205Z" stroke="#5F5F5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </span>
                                {babysitter.location}</p>
                            <p className='font-bold cursor-pointer'>
                                Book Now!
                            </p>
                        </CardContent>
                        <CardFooter>
                            <a href={`tel:${babysitter.phone}`} className="text-teal-500 font-semibold flex items-center gap-1">
                                <span>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.82888 16.6705C5.67828 14.5158 4.02439 11.9172 2.98288 9.05653C2.40988 7.49253 2.93488 5.77453 4.11288 4.59653L4.84188 3.86853C5.03786 3.67215 5.27066 3.51635 5.52693 3.41005C5.78321 3.30374 6.05793 3.24902 6.33538 3.24902C6.61282 3.24902 6.88755 3.30374 7.14382 3.41005C7.4001 3.51635 7.63289 3.67215 7.82888 3.86853L9.53588 5.57553C9.73226 5.77152 9.88806 6.00431 9.99437 6.26059C10.1007 6.51686 10.1554 6.79159 10.1554 7.06903C10.1554 7.34648 10.1007 7.62121 9.99437 7.87748C9.88806 8.13375 9.73226 8.36655 9.53588 8.56253L9.11588 8.98253C8.94776 9.15061 8.8144 9.35016 8.72342 9.56979C8.63243 9.78941 8.5856 10.0248 8.5856 10.2625C8.5856 10.5003 8.63243 10.7357 8.72342 10.9553C8.8144 11.1749 8.94776 11.3745 9.11588 11.5425L12.9559 15.3835C13.124 15.5516 13.3235 15.685 13.5431 15.776C13.7628 15.867 13.9982 15.9138 14.2359 15.9138C14.4736 15.9138 14.709 15.867 14.9286 15.776C15.1482 15.685 15.3478 15.5516 15.5159 15.3835L15.9369 14.9635C16.1329 14.7672 16.3657 14.6113 16.6219 14.505C16.8782 14.3987 17.1529 14.344 17.4304 14.344C17.7078 14.344 17.9825 14.3987 18.2388 14.505C18.4951 14.6113 18.7279 14.7672 18.9239 14.9635L20.6309 16.6705C20.8273 16.8665 20.9831 17.0993 21.0894 17.3556C21.1957 17.6119 21.2504 17.8866 21.2504 18.164C21.2504 18.4415 21.1957 18.7162 21.0894 18.9725C20.9831 19.2288 20.8273 19.4615 20.6309 19.6575L19.9029 20.3855C18.7249 21.5645 17.0069 22.0895 15.4429 21.5165C12.5822 20.475 9.98364 18.8211 7.82888 16.6705Z" stroke="#0D929A" stroke-width="1.5" stroke-linejoin="round" />
                                    </svg>

                                </span>
                                {babysitter.phone}
                            </a>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>

    )
}
