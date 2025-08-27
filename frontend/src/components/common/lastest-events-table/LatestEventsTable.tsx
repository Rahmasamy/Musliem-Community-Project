// LatestEventsTable.tsx
import { useEvents } from "@/context/eventContext";

export default function LatestEventsTable({ internal }: { internal?: string }) {
  const { events } = useEvents();
  const className = internal === 'true' ? 'w-full' : 'w-[50%]'
  return (
    <div className={`${className} flex flex-col gap-6 p-6 bg-white`}>
      <h2 className="text-sm font-semibold bg-orange-100 py-1 px-2 mb-4">Oct 2025</h2>

      {events.map((ev, idx) => {
        // 👉 show a "See more" card at index 3
        if (idx === 3) {
          return (
            <div
              key={ev._id}
              className="mb-6 border-b pb-4 text-center text-sm font-semibold text-cyan-600 cursor-pointer"
            >
              See more events →
            </div>
          );
        }

        // default render
        return (
          <div key={ev._id} className="mb-6 border-b pb-4">
            <div className="flex gap-6">
              <div className="text-lg text-gray-500">{ev.startTime} || </div>
              <div className="text-lg text-gray-500 mb-1">{ev.endTime}</div>
            </div>

            <div className="font-semibold text-base">{ev.name}</div>
            <div className="text-lg font-medium text-cyan-600">{ev.attendance}</div>
            <p className="text-lg text-gray-600 mt-1">{ev.description}</p>
          </div>
        );
      })}
    </div>
  );
}
