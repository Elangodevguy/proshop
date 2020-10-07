import bcryptjs from "bcryptjs";

const users = [
  {
    name: "Elango Doe",
    email: "elango@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Mohan Doe",
    email: "mohan@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
  },
  {
    name: "Rakesh Doe",
    email: "rakesh@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
  },
];

export default users;
