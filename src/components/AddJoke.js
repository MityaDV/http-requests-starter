import React, { useRef } from 'react';
import styles from './AddJoke.module.css';

const AddJoke = (props) => {
  const typeRef = useRef('');
  const setupRef = useRef('');
  const punchlineRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();
    const joke = {
      type: typeRef.current.value,
      setup: setupRef.current.value,
      punchline: punchlineRef.current.value
    };

    props.onAddJoke(joke);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="type">Type</label>
        <input ref={typeRef} type="text" id="type" />
      </div>
      <div className={styles.control}>
        <label htmlFor="setup">Setup</label>
        <textarea ref={setupRef} type="text" id="setup" rows={5}></textarea>
      </div>
      <div className={styles.control}>
        <label htmlFor="punchLine">Punchline</label>
        <textarea
          ref={punchlineRef}
          type="text"
          id="punchLine"
          rows={5}
        ></textarea>
      </div>
      <button>Add Joke</button>
    </form>
  );
};

export default AddJoke;
