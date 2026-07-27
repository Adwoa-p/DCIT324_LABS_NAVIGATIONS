import { createContext, useContext, useState, ReactNode } from 'react';

type Profile = {
  name: string;
  indexNumber: string;
  programme: string;
  level: string;
  bio: string;
};

type ProfileContextType = {
  profile: Profile;
  updateProfile: (updates: Partial<Profile>) => void;
};

const defaultProfile: Profile = {
  name: 'Adwoa Pokua',
  indexNumber: '22235277',
  programme: 'BSc Mathematics and Computer Science',
  level: 'Level 300',
  bio: 'Third-year student at the University of Ghana.',
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const updateProfile = (updates: Partial<Profile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };
  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) throw new Error('useProfile must be used within ProfileProvider');
  return context;
}