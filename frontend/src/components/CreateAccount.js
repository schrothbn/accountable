import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CreateAccount = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [accountNo, setAccountNo] = useState(0);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      {
        username: "test",
      },
    ]);
  }, []);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeAccountName = (e) => {
    setName(e.target.value);
  };

  const onChangeAccountNo = (e) => {
    setAccountNo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const account = {
      username: username,
      name: name,
      accountNo: accountNo,
    };

    console.log(account);

    nav("/");
  };

  return (
    <div className="text-secondary mt-2">
      <h3>Create Account</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <select
            className="form-control"
            value={username}
            onChange={onChangeUsername}
            required
          >
            <option value="">N/A</option>
            {users &&
              users.map((user) => {
                return (
                  <option value={user.username} key={user}>
                    {user.username}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="accountNo">Account-No.</label>
          <input
            type="number"
            name="accountNo"
            value={accountNo}
            className="form-control"
            onChange={onChangeAccountNo}
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountName">Account-Name:</label>
          <input
            type="text"
            name="accountName"
            value={name}
            className="form-control"
            onChange={onChangeAccountName}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
