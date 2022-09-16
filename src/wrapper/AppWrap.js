import React from "react";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <div className="app__wrapper app__flex">
          <Component />

          {idName === "contact" && (
            <div className="copyright">
              <p className="p-text">@2021</p>
              <p className="p-text">All rights reserved</p>
            </div>
          )}
        </div>
      </div>
    );
  };

export default AppWrap;
