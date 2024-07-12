import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Header from '@/sections/Header';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';
import Login from '@/components/Login';
import Calculator from '@/pages/Calculator';
import { AuthProvider } from './providers/AuthProvider';

import { StateMachineProvider } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";

function App() {
  
  return (
    <Fragment>
       <StateMachineProvider>
       <DevTool />
      <CssBaseline />
      <Notifications />
      {/* <HotKeys /> */}
      <SW /> 
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Sidebar  />
          <Pages />
        </BrowserRouter>
      </AuthProvider>
      </StateMachineProvider>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
