import { Fragment } from "react";
import { useFormik } from "formik";

import { authSchema } from "..";
import { AuthSchemaProps } from "../../types";
import { AuthList } from "./AuthInputsList";

const AuthForm = () => {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik<AuthSchemaProps>({
      initialValues: {
        username: "",
        secret: "",
        email: "",
        first_name: "",
        last_name: "",
      },
      validationSchema: authSchema,
      onSubmit: (values: AuthSchemaProps) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      {AuthList.map(({ type, name, id, label }) => (
        <Fragment key={id}>
          <label htmlFor={name}>{label}</label>
          <input
            id={id}
            type={type}
            name={name}
            autoComplete={type === "password" ? "username" : undefined}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values[name as keyof AuthSchemaProps]}
          />

          {touched[name as keyof AuthSchemaProps] &&
          errors[name as keyof AuthSchemaProps] ? (
            <p>{errors[name as keyof AuthSchemaProps]}</p>
          ) : null}
        </Fragment>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthForm;
