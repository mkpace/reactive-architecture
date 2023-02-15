import "./styles.css";
import { userPresenter } from "./presenters/userPresenter";
import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  const load = () => {
    userPresenter.items.subscribe((items) => {
      setUsers(items);
    });
    userPresenter.get();
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        {users.map((user) => {
          return <div>{user.name}</div>;
        })}
      </div>
    </div>
  );
}
