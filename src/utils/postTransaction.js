import axios from "axios";

async function postTransaction(data) {
  try {
    await axios.post(`https://candidatos.disrupcion.mx/expenses`, data);
  } catch (err) {
    console.log(err);
  }
}

export default postTransaction;
