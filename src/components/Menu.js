import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { listar } from "../actions/listarRepoAction";
import { logout } from "../actions/loginAction";
import { useForm } from "../hooks/useForm";

export default function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { repositorios } = useSelector((store) => store.listar);

  const handlealogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const [values, handleInputChange, reset] = useForm({
    search: "",
  });
  const { search } = values;

  const handleSearch = (e) => {
    e.preventDefault();
    const searchRepos = repositorios.filter(
      (r) => r.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(repositorios)
    if (searchRepos.length > 0) {
      dispatch(listar(searchRepos));
    }
  };
  return (
    <div className="mt-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <Link to="/" className="links">
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Favoritos
                </a>
              </li>
            </ul>
            <form className="d-flex" onClick={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="search"
                value={search}
                onChange={handleInputChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <div>
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link logout" onClick={handlealogout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
