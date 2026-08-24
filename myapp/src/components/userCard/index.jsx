import "./userCard.css";
import {
  MdLocationPin as LocationIcon,
  MdLocalPhone as PhoneIcon,
  MdEmail as EmailIcon,
} from "react-icons/md";
import { FaMale, FaFemale } from "react-icons/fa";

const UserCard = (props) => {
  const { user } = props;
  return (
    <div className="user-card">
      <img className="user-card__image" src={user.image} alt={user.name} />
      <div className="user-card__info">
        <p className="user-card__name">{user.name}</p>
        <p className="user-card__detail">
          <LocationIcon />
          {user.city}
        </p>
        <p className="user-card__detail">
          <PhoneIcon />
          {user.phone}
        </p>
        <p className="user-card__detail">
          <EmailIcon />
          {user.email}
        </p>
        <p className="user-card__detail">
          {user.gender === "Male" ? <FaMale /> : <FaFemale />}
          {user.gender}
        </p>
      </div>
    </div>
  );
};
export default UserCard;
