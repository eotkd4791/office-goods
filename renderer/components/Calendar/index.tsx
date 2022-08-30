import FullCalender, { DateSelectArg, EventDropArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg, EventResizeStopArg } from '@fullcalendar/interaction';
import { FC, useCallback } from 'react';
import useMemoStore from 'renderer/store/memo';
import { Memo } from 'renderer/types/memo';

interface Props {
  events: { id: string; title: string; start: string; end: string }[];
}

const Calendar: FC<Props> = ({ events }) => {
  const { memos, setMemoDate, updateMemo } = useMemoStore();

  const setRange = useCallback(
    ({ startStr, endStr }: DateSelectArg) => {
      setMemoDate(startStr, endStr);
    },
    [setMemoDate]
  );

  const setDate = useCallback((args: DateClickArg) => {
    setMemoDate(args.dateStr);
  }, []);

  const updateMemoRange = (args: EventResizeStopArg | EventDropArg) => {
    const memoId = args.event._def.publicId;
    const oldMemo = memos.find((memo) => memo.id === memoId);
    const newMemo = { ...oldMemo, startDate: args.event.startStr, endDate: args.event.endStr };
    updateMemo(newMemo as Memo);
  };

  return (
    <FullCalender
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      weekends
      editable
      selectable
      droppable
      eventStartEditable
      eventResizableFromStart
      eventDurationEditable
      height="auto"
      locale="ko-KR"
      events={events}
      themeSystem="Darkly"
      dayMaxEventRows={3}
      eventResize={updateMemoRange}
      eventDrop={updateMemoRange}
      select={setRange}
      dateClick={setDate}
    />
  );
};

export default Calendar;
