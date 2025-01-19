import "./Header.css";
<Header className="css"></Header>;

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_1280.png"
          alt="logo"
        />
        <h1 className="header__title">
          YouTube<sup>IN</sup>
        </h1>
      </div>

      <div className="header__center">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Header;
