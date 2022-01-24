import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { favorites } from "../actions/favoritesActions";
import { listar } from "../actions/listarRepoAction";

export default function Reposgithub() {
  const user = useSelector((store) => store.login);
  const {repositorios} = useSelector((store) => store.listar);
  const dispatch = useDispatch();
  
console.log(repositorios);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user.usergithub}/repos`)
      .then(function (response) {
        dispatch(listar(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const handlefavorites = (repo) => {
    dispatch(favorites(repo));
  };
  return (
    <>
      <div className="card border-dark mb-3 mt-3" style={{ width: "26rem" }}>
        <div className="card-header">Mis Repositorios</div>
        <div className="card-body text-dark">
          {repositorios.length > 0 ? (
            repositorios.map((r, i) => (
              <div className="d-flex justify-content-between" key={i}>
                <li className="list-group-item my-2">{r.name}</li>
                <button
                  className="mx-3 btn btn-primary my-2"
                  onClick={() => handlefavorites(r)}
                >
                  Add Favorites
                </button>
              </div>
            ))
          ) : (
            <p>Esperando</p>
          )}
        </div>
      </div>
    </>
  );
}
