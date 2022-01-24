import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Favorites = () => {
  const { favorites } = useSelector((store) => store.favorites);
  console.log(favorites);
  return (
    <div>
      <div className="card border-dark mb-3 mt-3" style={{ width: "26rem" }}>
        <div className="card-header">Mis Repositorios</div>
        <div className="card-body text-dark">
          {favorites.length > 0 ? (
            favorites.map((r, i) => (
              <div className="d-flex justify-content-between" key={i}>
                
                  <li className="list-group-item my-2">
                  <a href={`https://${r?.html_url}`}
                     target="_blank"
                    rel="noopener noreferrer"
                      >
                        {r?.name}                        
                      </a>
                    </li>
               
              </div>
            ))
          ) : (
            <p>Vacio</p>
          )}
        </div>
      </div>
    </div>
  );
};
