var React =require('react');

var Navbar=React.createClass({
  render:function(){
    return(
      <div>

      <div className="container" id="main">
      <div className="navbar navbar-fixed-top">
      <a className="navbar-brand" href="/" id="image">MovieBox</a>
      <div className="nav-collapse collapse navbar-responsive-collapse">
      <ul className="nav navbar-nav">
      <li className="active">
      <a href="#">Home</a>
      </li>
      <li className="dropdown">
      <a href="#">MovieBox For Mac </a>

      </li>
      <li>
      <a href="#" >MovieBox For Android</a>
      </li>
      <li>
      <a href="#" className="dropdown-toggle"data-toggle="dropdown">More</a>
      <ul className="dropdown-menu">
      <li>
      <a href="#">about</a>
      </li>
      <li>
      <a href="#">news</a>
      </li>
      <li>
      <a href="#">Android</a>
      </li>
      <li>
      <a href="#">contacts</a>
      </li>
      </ul>
      </li>
      </ul>
      </div>
      </div>
      </div>
      <div className="reactdiv">





      </div>
    )
  }
});
module.exports=Navbar;
