import { useContext, useState } from "react";
import UserItem from "./UserItem";
import { ContextUsers } from "../context/ContextUsers";

const Users = () => {
  const { userData } = useContext(ContextUsers);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [userNew, setUserNew] = useState(null);

  console.log("desdeuserform", userForm);
  // console.log('desdeuser',userData);

  //cambios de estado del formulario
  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  //envio de formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando formulario", userForm);
    setUserNew(userForm);
    setUserForm({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={userForm.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          value={userForm.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="phone"
          value={userForm.phone}
          name="phone"
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
      <UserItem />
    </div>
  );
};

export default Users;
