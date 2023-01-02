import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Post } from './post'
import { Posts } from './posts'

const AppRoutes  = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Posts />} /> {/* path="/" é a rota padrão */}
      <Route exact path='/post/:id' element={<Post />} />{/*o id é uma identificação do post, cada post tem um id. */}
    </Routes>
  </BrowserRouter>
);

export {AppRoutes}