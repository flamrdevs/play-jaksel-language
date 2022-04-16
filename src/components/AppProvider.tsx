import { createContext, useContext, useState } from "react";
import type { PropsWithChildren } from "react";

type AppContextType = {
  value: string;
  setValue: (value: string) => void;
};

const AppContext = createContext<AppContextType>({
  value: "",
  setValue: () => {
    throw new Error("Unimplemented");
  },
});

function useAppContext() {
  return useContext(AppContext);
}

const initialValue = `
literally umur itu 21
spill "Umur lu " + umur
kalo umur lebih gede 20
  spill "Elu tua"
  literally umurgua itu umur + 10
  spill "Kalo gua umurnya " + umurgua
  kalo umurgua lebih gede 30
    spill "gua lebih tua"
  udahan
kalogak
  spill "dasar bocil"
udahan
spill "Udahan ah"
`;

type AppProviderProps = PropsWithChildren<{}>;

function AppProvider(props: AppProviderProps) {
  const [value, setValue] = useState<string>(initialValue);

  return <AppContext.Provider value={{ value, setValue }} children={props.children} />;
}

export type { AppContextType };
export { useAppContext };
export default AppProvider;
