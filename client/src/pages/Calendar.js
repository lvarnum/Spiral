import React, { Component } from "react";
import moment from "moment";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


class BigCalendar extends Component {

  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    )
  }

    // state = {
    //   events: [
    //     {
    //       start: moment().toDate(),
    //       end: moment().add(1, "days").toDate(),
    //       title: "New",
    //     },
    //   ],
    // };

  
}

export default BigCalendar;