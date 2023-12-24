import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current != null) person.name = nameRef.current.value;
    if (ageRef.current != null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className=" form-label">
            Name
          </label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className=" form-label">
            Age
          </label>
          <input ref={ageRef} type="number" id="age" className="form-control" />
        </div>
        <button type="submit" className=" btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
