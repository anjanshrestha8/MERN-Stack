import { Formik } from "formik";
import "./App.css";
function App() {
  return (
    <>
      <Formik
        initialValues={{
          email: "anjanshrestha2002@gmail.com",
          password: "test",
          firstName: "Anjan",
          lastName: "Shrestha",
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form>
              <div>
                <label>Email:</label>
                <input
                  placeholder="Enter your mail"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  placeholder="Enter your password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>First Name:</label>
                <input
                  placeholder="Enter your First Name"
                  name="password"
                  value={values.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Last Name:</label>
                <input
                  placeholder="Enter your Last Name"
                  name="password"
                  value={values.lastName}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" onClick={handleSubmit}>
                Save
              </button>
            </form>
          );
        }}
      </Formik>
    </>
  );
}

export default App;
