// src/components/Layout.tsx
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="layout-container">{children}</div>;
  };
  
  export default Layout;
  