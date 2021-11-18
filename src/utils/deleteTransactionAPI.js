import axios from "axios";

async function deleteTransactionAPI(id) {
  try {
    await axios.delete(`https://candidatos.disrupcion.mx/expenses/${id}`);
  } catch (err) {
    console.log(err);
  }
}

export default deleteTransactionAPI;
