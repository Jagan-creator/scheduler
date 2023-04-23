import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

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

  return (
    <>
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={(event) => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
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
    </>
  );
}
