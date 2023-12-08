import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Adicione elementos compartilhados, como cabeçalho e rodapé, aqui */}
      {children}
    </div>
  );
};

export default Layout;
