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

export function getInterview(state, interview) {
  if (interview) {
    const interviewResult = {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer],
    };
    return interviewResult;
  } else {
    return null;
  }
}

export function getInterviewersForDay(state, dayCheck) {
  const results = [];
  let interviewers = [];

  state.days.forEach((day) => {
    if (day.name === dayCheck) {
      interviewers = day.interviewers;
    }
  });

  interviewers.forEach((interviewer) => {
    results.push(interviewer);
  });

  return results;
}
