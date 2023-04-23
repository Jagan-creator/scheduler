import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect((prev) => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`),
    ]).then((resArray) => {
      setState({
        ...prev,
        days: resArray[0].data,
        appointments: resArray[1].data,
        interviewers: resArray[2].data,
      });
    });
  }, []);

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
      setState({
        ...state,
        appointments,
      });
    });
  }

  function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({
        ...state,
      });
    });
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
