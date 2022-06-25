import React from "react";
import { useForm } from "react-hook-form";

function Form({formSub}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  

  const onSubmit =(data) =>{
    data.id=Date.now();
    data.fav=false;
    formSub(data)
    // console.log(data)
    reset();
  }

  return (
    <div className="col-sm-4 shadow rounded g-5">
      <h1 className="text-center pt-3 text-secondary h2">Add Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="col-form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: "Name is Required" })}
          />
          {errors.name && (<small className="text-danger">{errors.name.message}</small>)}

          
        </div>
        <div className="form-group">
          <label className="col-form-label">Email:</label>
          <input
            type="text"
            className="form-control"
            {...register("email", { required: "Email is Required" ,
            pattern:{
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            }            
          })}
          />
          {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
        </div>
        <div className="form-group">
          <label className="col-form-label">Phone:</label>
          <input
            type="text"
            className="form-control"
            {...register("phone", { required: "Phone is Required",
            pattern:{
              value: /^\+?[1-9][0-9]{7,14}$/i,
              message: "Invalid phone number",
            }            
          })}
          />
          {errors.phone && (<small className="text-danger">{errors.phone.message}</small>)}
        </div>
        <div class="text-center">
          <input
            type="submit"
            className="btn btn-primary my-3"
            value="Add Contact"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
