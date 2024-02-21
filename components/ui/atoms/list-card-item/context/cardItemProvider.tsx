import { CardItemTransformed } from "@/types/cardItemType";
import { createContext, useContext, ReactNode, useMemo } from "react";

interface CardProviderProps {
  cardData: CardItemTransformed;
  children: ReactNode;
}

const CardContext = createContext<CardItemTransformed | undefined>(undefined);

const CardProvider: React.FC<CardProviderProps> = ({ cardData, children }) => {
  const providerValue = useMemo(() => cardData, [cardData]);

  return (
    <CardContext.Provider value={providerValue}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;

export const useCardProvider = () => {
  const context = useContext(CardContext);

  if (context === undefined)
    throw new Error(
      "useCardProvider 는 CardProvider 안에서만 사용되어야 합니다."
    );

  return context;
};
