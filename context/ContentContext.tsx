// context/ContentContext.tsx
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import { Content } from 'common/types';

interface ContentContextType {
  content: Content | null;
  setContent: React.Dispatch<React.SetStateAction<Content | null>>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await axios.get('/api/content');
        const fetchedContent = response.data;

        setContent(fetchedContent);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    }

    loadData();
  }, []);

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
