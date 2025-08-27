import EventsImgDetails from '@/components/common/lastest-events-table/EventsImgDetails';
import LatestEventsTable from '@/components/common/lastest-events-table/LatestEventsTable';
import LeftHeading from '@/components/common/left-heading/LeftHeading'
import { EventProvider } from '@/context/eventContext';
import { FaArrowRight } from "react-icons/fa";


export default function LatestEvents() {
  return (
    <EventProvider>
      <div className='w-full flex flex-col items-center'>
        <LeftHeading title='Latest Events'
          desc={
            <>
              Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque
              <br />
              elementum congue interdum cras. At nisl in quisque erat ut.'
            </>
          } icon={
            <FaArrowRight />

          } />
        <div className="flex justify-between w-[95%] items-center">
          <LatestEventsTable internal='false' />
          <EventsImgDetails limit={0} />
        </div>

      </div>
    </EventProvider>

  )
}
