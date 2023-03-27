import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
  const [currentStudent, setStudent] = useState(props.student || "");
  const [currentInterviewer, setInterviewer] = useState(
    props.interviewer || null
  );

  const reset = () => {
    setStudent("");
    setInterviewer("null");
  };

  function cancel() {
    reset();
    props.onCancel();
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            value={currentStudent}
            placeholder="enter student name here"
            onChange={(e) => setStudent(e.target.value)}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={currentInterviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button
            danger
            onClick={cancel}
          >
            Cancel
          </Button>
          <Button
            confirm
            onClick={(e) => props.onSave(currentStudent, currentInterviewer)}
          >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
