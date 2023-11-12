// Layout.js

import React, { useState, useEffect } from 'react';
import Header from '../basic/Header';
import Nav from '../basic/Nav';
import Sidebar from '../basic/Sidebar';
import Footer from '../basic/Footer';
import Modal from '../basic/Modal';
import Spinner from '../basic/Spinner';
import ErrorBoundary from '../basic/ErrorBoundary';
import Card from '../basic/Card';
import List from '../basic/List';

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const sampleList = ["Item 1", "Item 2", "Item 3", "Item 4"];

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ErrorBoundary>
    <div className="flex flex-col min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <Nav />
      <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4">Sample List</h2>
          <List items={sampleList} />
        </div>
      <div className="flex space-x-4">
            <Card
              title="Card 1"
              content="This is the content of Card 1."
              imageUrl="https://placekitten.com/300/200"
            />
            <Card
              title="Card 2"
              content="This is the content of Card 2."
              imageUrl="https://placekitten.com/300/201"
            />
            <Card
              title="Card 3"
              content="This is the content of Card 3."
              imageUrl="https://placekitten.com/300/202"
            />
          </div>
      <div className="flex">
        {showSidebar && <Sidebar />}
        <div className="flex-1 p-4">
          {children}
          {isLoading ? <Spinner /> : children}
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={openModal}>
            Open Modal
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => { throw new Error('Simulated error'); }}>
              Simulate Error
            </button>
        </div>
      </div>
      <Footer />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={openModal}>
            Open Modal
          </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
    </ErrorBoundary>
  );
};

export default Layout;
