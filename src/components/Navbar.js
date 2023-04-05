import { Link } from "react-router-dom";
import './navbar.css'

export default function Topbar() {
//   const user = true;
  return (
    <div className="top">

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
        <li className="topListItem">
            <Link className="link" to="/singer">
                SINGER
            </Link>
        </li>
          
          <li className="topListItem">
            <Link className="link" to="/album">
              ALBUM
            </Link>
          </li>
          {/* {user && <li className="topListItem">LOGOUT</li>} */}
        </ul>
      </div>

      
      {/* <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://th.bing.com/th/id/R.fd68e854272c79284039122853b45eab?rik=0yOVfMnsFHv8MA&riu=http%3a%2f%2ffeverishthoughts.com%2fphoto%2fwp-content%2fuploads%2f2012%2f04%2f1462695842_83fef1a684_b.jpg&ehk=MdEVaBVdwtnvLdSgEG7t%2bxj19%2fEOmkb22j2PveZBUO8%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <Link className="link" to="/Posts">
        <i className="topSearchIcon fas fa-search"></i>
        </Link>
      </div> */}
    </div>
  );
}