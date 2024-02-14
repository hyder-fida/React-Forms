import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emialValue,
    handleInputValues: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emialHasError,
  } = useInput('', (value) =>  isEmail(value) && isNotEmpty(value));

  const {
    value: passswordValue,
    handleInputValues: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passswordHasError,
  } = useInput('', (value) =>  hasMinLength(value, 6) );


  const handleSubmit = (event) => {
    event.preventDefault();

    if (emialHasError || passswordHasError) {
      return;
    }

    console.log(emialValue, passswordValue);


    // to reset the form we can set enetered values back to empty string or on reset button set type="reset"
    // setEnteredValue({
    //   email: '',
    // password: '',
    // });
  };



  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emialValue}
          error={emialHasError && 'Please enter a valid email!' }
        />

        <Input
          label="Password"
          id="passsword"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passswordValue}
          error={passswordHasError && 'Please enter a valid password!'}

        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
