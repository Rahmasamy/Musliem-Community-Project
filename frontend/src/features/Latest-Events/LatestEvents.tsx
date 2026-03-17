import EventsImgDetails from '@/components/common/lastest-events-table/EventsImgDetails';
import LatestEventsTable from '@/components/common/lastest-events-table/LatestEventsTable';
import LeftHeading from '@/components/common/left-heading/LeftHeading'
import EventsSection from '@/components/common/wrapper-section/EventsSection';
import { EventProvider } from '@/context/eventContext';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export default function LatestEvents() {
  const navigate = useNavigate()
  return (
    <EventProvider>
      <div className='w-full flex flex-col items-center'>
        <LeftHeading title='Latest Events'
          desc={
            <>
Keep track of the events you’re attending and explore what’s coming next. Connect with others, participate actively, and enjoy every moment.            </>
          } icon={
            <FaArrowRight  onClick={ () =>navigate("/Events")}/>

          } />
        <div className="flex flex-col lg:flex-row justify-between w-full sm:w-[95%] items-center gap-4 lg:gap-0 px-2 sm:px-0">
         <EventsSection internal='false' />

        </div>

      </div>
    
    </EventProvider>
          
  )
}
