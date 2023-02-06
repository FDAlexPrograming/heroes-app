import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Preuebas en FirstApp', () => {
    const title = 'Hola, Soy Goku'; 
    const párrafo = 'Soy un párrafo'; 

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <FirstApp title= { title } /> );  
        expect( container ).toMatchSnapshot();
        
    });

    test('debe de mostrar el mensaje "Hola, Soy Goku', () => { 
        render( <FirstApp title= { title } /> );
        expect( screen.getByText(title) ). toBeTruthy();

    });

    test('debe de mostrar el título en un h1', () => { 
        render( <FirstApp title= { title } /> );
        expect( screen.getByRole('heading', {level: 1} ).innerHTML).toContain( title );
        
    });

    test('debe de mostrar el párrafo enviado por props', () => {  
        render( <FirstApp title= { title } párrafo= { párrafo } /> );
        expect( screen.getAllByText( párrafo ).length ).toBe( 2 );
    });
    
});