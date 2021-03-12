import { createContext, useContext, useState } from "react";

export const Context = createContext();
export const ThisContext = () => useContext(Context);

export const ContextProvider = ({ children }) => {
    const [dataSearch, setDataSearch] = useState([]);
    const [activeKeyTabs, setActiveKeyTabs] = useState("1");
    const [recordEditing, setRecordEditing] = useState({});
    const [initValues, setInitValues] = useState({});

    return (
        <Context.Provider
            value={{
                dataSearch: {
                    data: dataSearch,
                    setData: setDataSearch,
                },
                tabs: {
                    activeKeyTabs: activeKeyTabs,
                    setActiveKeyTabs: setActiveKeyTabs,
                },
                recordEditing: {
                    data: recordEditing,
                    setData: setRecordEditing,
                },
                initValues: {
                    data: initValues,
                    setData: setInitValues,
                },
            }}
        >
            {children}
        </Context.Provider>
    );
};
