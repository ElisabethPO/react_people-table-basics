import './App.scss';
import React from 'react';
import { Navigation } from './components/Navigation';
import { Navigate, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PeoplePage } from './pages/PeoplePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PersonPage } from './components/PersonPage';

export const App = () => (
  <div data-cy="app">
    <Navigation />

    <Routes>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/people" element={<PeoplePage />} />
      <Route path="/people/:slug" element={<PersonPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);
