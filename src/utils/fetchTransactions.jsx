import axios from "axios";

const getTransactions = async () => {
  try {
    const { data } = await axios.get(
      "https://candidatos.disrupcion.mx/expenses"
    );
    return data;
  } catch (err) {
    throw new Error("Fetch error: " + err);
  }
};

export default getTransactions;
