import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '0 15px' }}><a href="#about">Sobre</a></li>
        <li style={{ margin: '0 15px' }}><a href="#projects">Projetos</a></li>
        <li style={{ margin: '0 15px' }}><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
};