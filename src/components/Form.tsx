import { FormEvent, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className=" form-label">
            Name
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
            id="name"
            value={person.name}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className=" form-label">
            Age
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...person, age: event.target.value })
            }
            type="number"
            id="age"
            value={person.age}
            className="form-control"
          />
        </div>
        <button type="submit" className=" btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
