export interface Event {
  _id: string;
  name: string;
  description: string;
  image: string;
  startTime: string;
  endTime: string;
  attendance: string;
  invitationLink: string;
  eventType: string;
  date: Date;
}

export interface EventContextType {
  events: Event[];
  page: number;
  totalPages: number;
  loading: boolean;
  error: string | null;

  setPage: (page: number) => void;
  setFilters: (filters: {
    search?: string;
    location?: string;
    date?: string;
  }) => void;
}
