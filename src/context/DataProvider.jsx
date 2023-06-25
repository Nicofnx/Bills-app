import { useState, createContext,useEffect } from "react";

const appContext = createContext({});

const DataProvider = ({ children }) => {
  const [listBills, setListBills] = useState([])
  const [lastId, setLastId] = useState(0)

  useEffect(() => {
    const storedListBills = localStorage.getItem('listBills');
    if (storedListBills) {
      setListBills(JSON.parse(storedListBills));
    }
  }, []);

  useEffect(() => {
    if(listBills.length === 0) return
    const maxId = Math.max(...listBills.map(obj => obj.id));
    setLastId(maxId);
  }, [listBills]);

  const addListToLocalStorage = (list) => {
    localStorage.setItem('listBills', JSON.stringify(list));
  }

  const addBillToList = (factura) => {
   setListBills([factura, ...listBills]);
   addListToLocalStorage([factura, ...listBills])
    
 };

  const removeBillToList = (factura)=>{
    setListBills(factura)
    addListToLocalStorage(factura)
  }

 const editBillToList = (billEdit) => {
  const updatedBills = listBills.map((bill) => {
    if (bill.id === billEdit.id) {
      return billEdit;
    }
    return bill;
  });
  setListBills(updatedBills);
  addListToLocalStorage(updatedBills);
  
};

  const dataProvider = {
    listBills, setListBills, editBillToList, removeBillToList,
    addBillToList, lastId: parseInt(lastId) + 1
  };

  return (
    <appContext.Provider value={dataProvider}>
      {children}
    </appContext.Provider>
  );
};

export default appContext
export {DataProvider}