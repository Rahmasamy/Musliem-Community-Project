import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import babysitter from '@/assets/imgs/babysitter.png';
import qurantTutor from '@/assets/imgs/quran-tutor.png';
import Events  from '@/assets/imgs/EventImg.png';
import programming from '@/assets/imgs/programming.jpg';
import advertisment from '@/assets/imgs/advertisment.png'
import markting from '@/assets/imgs/markting.jpg';
import { useNavigate } from 'react-router-dom';
const staticServices = [
  {
    id: 1,
    image: babysitter,
    title: "Professional Babysitter",
    description: "Experienced babysitter available for part-time and full-time care.",
    url : "/ServicesPage/services"
  },
  {
    id: 2,
    image: Events,
    title: "Events",
    description: "Support local communities by Creating Events",
    url : "/events/all-events"
  },
  {
    id: 3,
    image: qurantTutor,
    title: "Quran Tutor Online",
    description: "Learn Quran with Tajweed from expert tutors.",
    url : "/ServicesPage/services"
  },
  {
    id: 4,
    image: advertisment,
    title: "Promote Your Business",
    description: "Reach thousands of users with our advertising services.",
    url : "/ServicesPage/services"
  },
  {
    id: 5,
    image: programming,
    title: "Programming And Development",
    description: "Reach thousands of developers by searching in our services.",
    url : "/ServicesPage/services"
  },
  {
    id: 6,
    image: markting,
    title: "Marketing And Sales",
    description: "Reach thousands of users with our markting services.",
    url : "/ServicesPage/services"
  }
];

export default function SpecialServiceCard() {
  const services = staticServices;
  const navigate = useNavigate()
  return (
    <>
      {services.map((service, index) => (
        <Card key={service.id || index} className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(50%-0.75rem)] lg:w-[370px] shadow-md mt-4 sm:mt-8 max-w-[370px]">
          <CardHeader className="p-0 group overflow-hidden ">
            <img src={service.image} alt={service.title}
             style={{ height: "220px" ,objectFit:"cover" }}
             className='h-48 sm:h-56 object-cover w-full transition transform duration-500 ease-in-out group-hover:scale-110'
             />
          </CardHeader>
          <CardContent className="p-3 sm:p-4">
            <h3 className="font-bold text-base sm:text-lg">{service.title}</h3>
            <p className="py-2 sm:py-3 text-sm sm:text-base">{service.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between cursor-pointer p-3 sm:p-4" onClick={() => navigate(service.url) }>
            <p className="text-xs sm:text-sm" style={{ color: "#00ABB6" }}>More Info</p>
            <span className="text-lg sm:text-xl">→</span>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
