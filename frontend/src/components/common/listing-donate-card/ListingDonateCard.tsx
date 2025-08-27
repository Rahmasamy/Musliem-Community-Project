import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

import table from '@/assets/imgs/table.png';
import Donate from '@/assets/imgs/donate.png'

import { Link } from 'react-router-dom';
import OrangeButton from '../OrangeButton/OrangeButton';
import Services from '@/services/serviceService';
import { useEffect, useState } from 'react';
import { IService } from '@/types/Service';

export default function ListingDonateCard() {
    const [services, setServices] = useState<IService[]>([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const data = await Services.getServicesByType("advertisement");
                setServices(data);
            } catch (error) {
                console.error("Error fetching services", error);
            }
        };
        fetchServices();
    }, []);

    return (
        <div className="w-full flex justify-between items-center">
            <div className="listOfcards w-[90%] p-4 flex  items-center gap-5 mx-2 flex-wrap">
                {services.map((service) => (
                    <Card key={service._id} className="w-[330px] shadow-md">
                        <CardHeader className="p-0 w-full">
                            <img
                                src={service.image}
                                alt={service.name}
                                style={{ height: "180px" }}
                                className="object-cover w-full"
                            />
                        </CardHeader>
                        <CardContent className="p-4">
                            <h3 className="font-bold">
                                <Link to={`/services/${service._id}`}>
                                    {service.name}
                                </Link>
                            </h3>
                            <p>{service.description}</p>
                            {service.price > 0 && (
                                <h2 className="font-bold">${service.price}</h2>
                            )}
                        </CardContent>
                        <CardFooter>
                            <OrangeButton
                                title="Donate"
                                icon={
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path
                                            d="M16.086 10.6574L12.136 6.70741..."
                                            fill="white"
                                        />
                                    </svg>
                                }
                                parentClassName='w-full'
                            />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
