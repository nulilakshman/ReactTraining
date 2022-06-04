import React from "react";
import App from '../App';
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

afterEach(cleanup)

describe("Tests related to App Component", () => {

    let component;
    beforeEach(() => {
        component = render(<App></App>);
    })

    it("should load snapshot", () => {
        expect(component).toMatchSnapshot();
    })

    it("should find welcome note", () => {
        const text = screen.getByText(/Welcome to React/i);
        expect(text).toBeInTheDocument();
    })

    it("should increment counter on button click", () => {
        fireEvent.click(component.getByTestId('btnIncrement'));
        fireEvent.click(component.getByTestId('btnIncrement'));
        expect(component).toMatchSnapshot();
        const value = component.getByTestId('countervalue')
        expect(value).toHaveTextContent(2)
    
    })


});