import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <h1>Привет, меня зовут Евкакий!</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam at
            quasi vero recusandae, beatae iusto ut a ea, blanditiis vel aperiam
            maxime, exercitationem illo doloribus harum nam delectus{" "}
          </p>
          <button>Связаться со мной</button>
        </div>
      </div>
      <div className="cover"></div>
    </header>
  );
};

export default Header;
