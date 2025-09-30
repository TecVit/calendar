import './style.css';

export default function Landing() {
  const months = [
    {
      name: "Setembro",
      days: [
        {
          date: "08",
          weekday: "Friday",
          events: [
            {
              title: "Team Meeting",
              time: "10:30am - 11:00am"
            },
            {
              title: "School",
              time: "12:30am - 14:00am"
            }
          ]
        },
      ],
    },
  ];

  return (
    <main className="container-landing">
      <section className="content-landing">

        <div className="timelines">
          {months.map((month, i) => (
            <div key={i} className='timeline'>
              <div className="timeline-month">
                {month.name}
                <span>{month.days.length} Evento(s)</span>
              </div>
              <div className="timeline-section">
                {month.days.length > 0 ? (
                  month.days.map((day, j) => (
                    <div key={j} className='timeline-day'>
                      <div className="timeline-date">
                        {day.date}, {day.weekday}
                      </div>
                      <div className="timeline-events">
                        {day.events && day.events.length > 0 ? (
                          day.events.map((event, k) => (
                            <div key={k} className="timeline-event">
                              <h1>{event.title}</h1>
                              <p>{event.time}</p>
                            </div>
                          ))
                        ) : (
                          <p>Nenhum evento encontrado</p>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Nenhum dia cadastrado</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}