import { screen,fireEvent } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { Button, ThemeButton } from 'shared/ui/Button'
import { Sidebar } from './Sidebar';

describe('classNames', () => {
  test('with first parameter', () => {
    
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  });
  
  test('test toggle', () => {
    
    renderWithTranslation(<Sidebar />);
    const btn = screen.getByTestId('sidebar-btn')
    fireEvent.click(btn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  });

})