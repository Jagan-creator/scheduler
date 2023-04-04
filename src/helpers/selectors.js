export function getAppointmentsForDay(state, dayCheck) {
  const results = [];
  let appointments = [];

  state.days.forEach((day) => {
    if (day.name === dayCheck) {
      appointments = day.appointments;
    }
  });

  appointments.forEach((appointment) => {
    results.push(state.appointments[appointment]);
  });

  return results;
}
