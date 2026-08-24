import { USERS } from "../../data/Users";
import UserCard from "../userCard";
import "./userList.css";

const UsersList = () => {
  return (
    <div className="user-list">
      {USERS.map((item) => (
        <UserCard key={item.id} user={item} />
      ))}
    </div>
  );
};
export default UsersList;
