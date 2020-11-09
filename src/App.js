import React from 'react';
import { Header } from './components/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { Content } from './components/Content/Content';
import { MostVisitedPageItem } from './components/Content-Layout/MostVisitedPageItem/MostVisitedPageItem';

export const App = () => {
  return (
    <div className="container-all">
      <Header />
      <Content />
    </div>
  )
}