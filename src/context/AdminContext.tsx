import React, { createContext, useContext, useState, useEffect } from 'react';
import { SERVICES as DEFAULT_SERVICES, ServiceItem } from '../data/agencyData';

export interface AdminUser {
  email: string;
  name: string;
  role: string;
}

interface AdminContextType {
  isAdminLoggedIn: boolean;
  adminUser: AdminUser | null;
  services: ServiceItem[];
  login: (email: string, pass: string) => { success: boolean; error?: string };
  logout: () => void;
  addService: (service: Omit<ServiceItem, 'id' | 'number'>) => void;
  updateService: (service: ServiceItem) => void;
  removeService: (serviceId: string) => void;
  resetServicesToDefault: () => void;
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (open: boolean) => void;
}

const ADMIN_CREDENTIALS = {
  email: 'admin@nextgrowthbd.com',
  password: 'admin123',
  name: 'Nasir Uddin (Admin)',
  role: 'Super Administrator'
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem('nextgrowth_admin_session') === 'true';
    } catch {
      return false;
    }
  });

  const [adminUser, setAdminUser] = useState<AdminUser | null>(() => {
    try {
      const saved = localStorage.getItem('nextgrowth_admin_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem('nextgrowth_services');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading services from localStorage:', e);
    }
    return DEFAULT_SERVICES;
  });

  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Sync services to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('nextgrowth_services', JSON.stringify(services));
    } catch (e) {
      console.error('Failed to save services to localStorage', e);
    }
  }, [services]);

  const login = (email: string, pass: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = pass.trim();

    if (cleanEmail === ADMIN_CREDENTIALS.email.toLowerCase() && cleanPass === ADMIN_CREDENTIALS.password) {
      const user: AdminUser = {
        email: ADMIN_CREDENTIALS.email,
        name: ADMIN_CREDENTIALS.name,
        role: ADMIN_CREDENTIALS.role
      };
      setIsAdminLoggedIn(true);
      setAdminUser(user);
      try {
        localStorage.setItem('nextgrowth_admin_session', 'true');
        localStorage.setItem('nextgrowth_admin_user', JSON.stringify(user));
      } catch {}
      return { success: true };
    }

    return { 
      success: false, 
      error: 'Invalid admin credentials! Please use admin@nextgrowthbd.com / admin123' 
    };
  };

  const logout = () => {
    setIsAdminLoggedIn(false);
    setAdminUser(null);
    try {
      localStorage.removeItem('nextgrowth_admin_session');
      localStorage.removeItem('nextgrowth_admin_user');
    } catch {}
  };

  const addService = (newServiceData: Omit<ServiceItem, 'id' | 'number'>) => {
    const nextNumber = String(services.length + 1).padStart(2, '0');
    const slugId = newServiceData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `service-${Date.now()}`;
    
    const newService: ServiceItem = {
      ...newServiceData,
      id: slugId,
      number: nextNumber
    };

    setServices((prev) => [...prev, newService]);
  };

  const updateService = (updated: ServiceItem) => {
    setServices((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
  };

  const removeService = (serviceId: string) => {
    setServices((prev) => {
      const filtered = prev.filter((s) => s.id !== serviceId);
      // Re-index numbers
      return filtered.map((s, index) => ({
        ...s,
        number: String(index + 1).padStart(2, '0')
      }));
    });
  };

  const resetServicesToDefault = () => {
    setServices(DEFAULT_SERVICES);
    try {
      localStorage.setItem('nextgrowth_services', JSON.stringify(DEFAULT_SERVICES));
    } catch {}
  };

  return (
    <AdminContext.Provider
      value={{
        isAdminLoggedIn,
        adminUser,
        services,
        login,
        logout,
        addService,
        updateService,
        removeService,
        resetServicesToDefault,
        isAdminModalOpen,
        setIsAdminModalOpen
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export { ADMIN_CREDENTIALS };
