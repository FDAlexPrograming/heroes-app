import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en CounterApp', () => {
    const initialValue = 100;
    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <CounterApp value= { initialValue } /> );  
        expect( container ).toMatchSnapshot();
        
    });

    test('debe de mostrar el valor inicial de 100', () => {  
        render( <CounterApp value= { initialValue } /> );
        expect( screen.getByText( 100 )).toBeTruthy();
    });

    test('debe de incrementar con el botón Sumar', () => {  
        render( <CounterApp value= { initialValue } /> );
        fireEvent.click( screen.getByText( 'Sumar') );
        expect( screen.getByText('101') ).toBeTruthy();
    });

    test('debe de decrementar con el botón Restar', () => {  
        render( <CounterApp value= { initialValue } /> );
        fireEvent.click( screen.getByText( 'Restar') );
        expect( screen.getByText('99') ).toBeTruthy();
    });

    test('debe de funcionar el botón Resetear', () => {  
        render( <CounterApp value= { initialValue } /> );
        fireEvent.click( screen.getByText( 'Sumar') );
        fireEvent.click( screen.getByText( 'Sumar') );
        fireEvent.click( screen.getByText( 'Sumar') );
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset'}) );
        expect( screen.getByText('100') ).toBeTruthy();

    });

});