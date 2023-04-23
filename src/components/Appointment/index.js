import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function onCancel() {
    back();
  }

  function save(name, interviewer) {
    transition(SAVING);

    const interview = {
      student: name,
      interviewer,
    };

    props.bookInterview(props.id, interview);

    setTimeout(() => {
      transition(SHOW);
    }, 1000);
  }

  function deleteInterview(interview) {
    interview = null;
    transition(CONFIRM);
  }

  function confirmDelete() {
    transition(DELETING);

    props.cancelInterview(props.id);

    setTimeout(() => {
      transition(EMPTY);
    }, 1000);
  }

  return (
    <>
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={(event) => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={deleteInterview}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={onCancel}
          onSave={save}
        />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you want to delete this appointment?"
          onConfirm={confirmDelete}
          onCancel={() => transition(SHOW)}
        />
      )}
    </>
  );
}
