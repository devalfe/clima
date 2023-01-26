import PropTypes from "prop-types";
const Header = ({titulo}) => {
  return(
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a className="brand-logo" href="#!">{titulo}</a>
      </div>
    </nav>
  )
}

Header.prototype = {
  titulo: PropTypes.string.isRequired
}
export default Header
