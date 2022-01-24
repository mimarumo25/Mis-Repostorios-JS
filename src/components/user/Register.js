import { Formik } from "formik";
import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerEmailPassword } from "../../actions/registerAction";

export default function Register() {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          git: "",
          email: "",
          password1: "",
          password2: "",
        }}
        validate={(valores) => {
          let errores = {};
          if (!valores.name) {
            errores.name = "Por favor Ingresa un nombre completo";
          }
          if (!valores.git) {
            errores.git = "Por favor Ingresa su Usuario de GitHub";
          }
          if (!valores.email) {
            errores.email = "Por favor Ingresa un Correo Electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email = "Por favor Ingresa un Correo Electronico Valido";
          }
          if (!valores.password1) {
            errores.password1 = "Por favor Ingresa su Contraseña";
          }
          if (!valores.password2) {
            errores.password2 = "Por favor Confirme su Contraseña";
          }
          if (valores.password1 !== valores.password2) {
            errores.password2 = "Las contraseñas No Son Iguales";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
         
          dispatch(
            registerEmailPassword(
              valores.name,
              valores.git,
              valores.email,
              valores.password1
            )
          );
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
              <Card style={{ width: "26rem" }}>
                <Card.Header>
                  <h1 className="text-center">REGISTRO</h1>
                </Card.Header>
                <Card.Body>
                  <Form className="formlogin" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Ingresa tu Nombre Completo</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingresa tu Nombre"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.name && errors.name && (
                        <div className="error">{errors.name}</div>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicGit">
                      <Form.Label>Ingresa tu Usuario de GitHub</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingresa tu Usuario de GitHub"
                        name="git"
                        value={values.git}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.git && errors.git && (
                        <div className="error">{errors.git}</div>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Ingresa tu email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ingresa un email"
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
                      <Form.Label>Ingresa una contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Ingresa una contraseña"
                        name="password1"
                        value={values.password1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.password1 && errors.password1 && (
                        <div className="error">{errors.password1}</div>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword1">
                      <Form.Label>Ingresa una contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Ingresa una contraseña"
                        name="password2"
                        value={values.password2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.password2 && errors.password2 && (
                        <div className="error">{errors.password2}</div>
                      )}
                    </Form.Group>
                    <hr />
                    <div className="d-grid gap-2 mt-3">
                      <Button variant="primary" type="submit">
                        Registrarse
                      </Button>
                    </div>
                    <hr />
                    <span>
                      ¿Ya tienes una cuenta?{" "}
                      <Link to="/login"> Inicia sesión</Link>
                    </span>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
