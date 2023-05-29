import React from 'react';
import { render, screen } from "@testing-library/react";
import { userEvent } from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../../../App';
import { Navbar } from '..';
import { Exercise1, Exercise2 } from '../../../pages';
import { act } from 'react-dom/test-utils';

describe("root route render", () => {
  let rootApp = {};

  beforeEach(() => {
    const { container: appContainer } = render(<App />);
    const { container: navContainer } = render(<BrowserRouter><Navbar /></BrowserRouter>);
    const { container: exercise1 } = render(<BrowserRouter><Exercise1 /></BrowserRouter>);
    const { container: exercise2 } = render(<BrowserRouter><Exercise2 /></BrowserRouter>);
    rootApp.container = appContainer;
    rootApp.navContainer = navContainer;
    rootApp.exercise1Container = exercise1
    rootApp.exercise2Container = exercise2
  })

  it("Should render navbar", () => {
    const { navContainer } = rootApp;
    expect(navContainer).toBeInTheDocument()
  })

  it("Should render title h3 MANGO Tech Assessment", () => {
    const text = "MANGO Tech Assessment"
    const title = screen.getAllByText(text)[0];
    expect(title).toBeInTheDocument()
  })

  it("Should render title h2 Range Slider", () => {
    const text = "Range Slider"
    const title = screen.getAllByText(text)[0];
    expect(title).toBeInTheDocument()
  })

  it("Should render a link to Exercise 1", async () => {
    const link = screen.getAllByTestId('exercise1')[0];
    expect(link).toHaveAttribute('href', '/exercise1');
  })

  it("Should render a link to Exercise 2", () => {
    const link = screen.getAllByTestId('exercise2')[0];
    expect(link).toHaveAttribute('href', '/exercise2');
  })

})
