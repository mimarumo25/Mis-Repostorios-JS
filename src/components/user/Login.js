import { Formik } from "formik";
import React from "react";
import {Link} from 'react-router-dom';
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginEmailPassword } from "../../actions/loginAction";

export default function Login() {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.email) {
            errores.email = "Por favor ingresa un email";
          }
          if (!valores.password) {
            errores.password = "Por favor ingresa una Contraseña";
          }
          return errores;

          //Validación Password
        }}
        onSubmit={(valores, { resetForm }) => {
          dispatch(loginEmailPassword(valores.email, valores.password))
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <div className="home mt-5">
            <div className="d-flex justify-content-center">
              <div className="my-3">
            
              </div>
              <Card style={{width: '26rem'}}>
                <Card.Header>
                  <h1 className="text-center">LOGIN</h1>
                </Card.Header>
                <Card.Body>
                  <Form className="formlogin" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Ingresa tu email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ingresa tu email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {touched.email && errors.email && (
                        <div className="error">{errors.email}</div>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Ingresa tu contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.password && errors.password && (
                        <div className="error">{errors.password}</div>
                      )}
                    </Form.Group>
                    <hr className="mt-4" />
                    <hr className="mt-4" />
                    <div className="d-grid gap-2 mt-3">
                      <Button variant="primary" type="submit">
                        Iniciar Sesión
                      </Button>
                    </div>
                    <hr className="mt-2" />
                    <span>
                      ¿No tienes cuenta?{" "}
                      <Link to="/register"> Registrate Aquí</Link>
                      <hr />
                    </span>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
