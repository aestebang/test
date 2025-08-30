const url = import.meta.env.USERS;
console.log(url);
const users = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default users;
