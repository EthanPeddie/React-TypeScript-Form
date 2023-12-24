import { useForm } from "react-hook-form";
const Form = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="mb-3">
          <label htmlFor="name" className=" form-label">
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className=" form-label">
            Age
          </label>
          <input
            {...register("age")}
            type="number"
            id="age"
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
