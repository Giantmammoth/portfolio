import { useEffect, ReactNode } from 'react';
import { useLanguageStore } from '../stores/languageStore';
import i18n from '../i18n/config';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return <>{children}</>;
};
