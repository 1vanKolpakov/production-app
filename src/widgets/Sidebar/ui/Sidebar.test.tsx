import { screen,fireEvent } from '@testing-library/react'
import { componentRender } from 'shared/config/tests/renderWithRouter/renderWithRouter';
import { Sidebar } from './Sidebar';

describe('classNames', () => {
  test('with first parameter', () => {
    
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  });
  
  test('test toggle', () => {
    
    componentRender(<Sidebar />);
    const btn = screen.getByTestId('sidebar-btn')
    fireEvent.click(btn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  });

})