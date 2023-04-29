import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`),
    ]).then((resArray) => {
      setState((prev) => ({
        ...prev,
        days: resArray[0].data,
        appointments: resArray[1].data,
        interviewers: resArray[2].data,
      }));
    });
  }, []);

  const calcSpotsRemaining = (appointments, appointmentID) => {
    const day = state.days.find((day) =>
      day.appointments.includes(appointmentID)
    );

    const spots = day.appointments.filter(
      (id) => appointments[id].interview === null
    ).length;

    return state.days.map((day) =>
      day.appointments.includes(appointmentID) ? { ...day, spots } : day
    );
  };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState((prev) => {
        const newState = {
          ...prev,
          appointments,
          days: calcSpotsRemaining(appointments, id),
        };

        return newState;
      });
    });
  }

  function deleteInterview(id) {
    return axios.delete(`/api/appointments/${id}`).then(() => {
      const appointment = {
        ...state.appointments[id],
        interview: null,
      };

      const appointments = {
        ...state.appointments,
        [id]: appointment,
      };

      setState((prev) => {
        const newState = {
          ...prev,
          appointments,
          days: calcSpotsRemaining(appointments, id),
        };
        return newState;
      });
    });
  }

  return {
    state,
    setDay,
    bookInterview,
    deleteInterview,
  };
}
