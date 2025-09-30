import './style.css';

export default function Landing() {
  const months = [
    // {
    //   name: "Setembro",
    //   days: [
    //     {
    //       date: "08",
    //       weekday: "Friday",
    //       events: [
    //         {
    //           title: "Team Meeting",
    //           time: "10:30am - 11:00am"
    //         },
    //         {
    //           title: "School",
    //           time: "12:30am - 14:00am"
    //         }
    //       ]
    //     },
    //     {
    //       date: "08",
    //       weekday: "Sunday",
    //       events: [
    //         {
    //           title: "Team Meeting",
    //           time: "10:30am - 11:00am"
    //         },
    //         {
    //           title: "School",
    //           time: "12:30am - 14:00am"
    //         }
    //       ]
    //     }
    //   ]
    // },
    {
      name: "Outubro",
      days: [
        {
          date: "01",
          weekday: "Quarta-Feira",
          events: [
            {
              title: "Prova da Helen (pode levar a folha de cola)",
              time: ""
            }
          ]
        },
        {
          date: "07",
          weekday: "Terça-Feira",
          events: [
            {
              title: "Prova de Física",
              time: "12:30 às 14:15"
            },
            {
              title: "Prova de HTML",
              time: "16:20 às 18:00"
            }
          ]
        },
        {
          date: "08",
          weekday: "Quarta-Feira",
          events: [
            {
              title: "Trabalho da Helen (Em sala)",
              time: "12:30 às 14:15 e das 14:25 às 16:20"
            }
          ]
        }
      ]
    }
  ];

  return (
    <main className="container-landing">
      <section className="content-landing">

        <div className="timelines">
          {months.map((month, i) => (
            <div key={i} className='timeline'>
              <div className="timeline-month">
                <p>{month.name}</p>
                <span>{month.days.length} Dia(s)</span>
              </div>
              <div className="timeline-section">
                {month.days.length > 0 ? (
                  month.days.map((day, j) => (
                    <div key={j} className='timeline-day'>
                      <div className="date">
                        <p>{day.date}, {day.weekday}</p>
                      </div>
                      <div className="row"></div>
                      <div className="timeline-events">
                        {day.events && day.events.length > 0 ? (
                          day.events.map((event, k) => (
                            <div key={k} className="event">
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