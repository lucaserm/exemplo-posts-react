import { render, screen } from "@testing-library/react";

import { Button } from ".";
import userEvent from '@testing-library/user-event';

describe("Button />", () => {
  it('should render the button with the text "Load more"', () => {
    const fn = jest.fn();
    render(<Button text='Load more' onClick={fn} disabled={false}/>);
    const button = screen.getByRole("button", { name: /load more/i });
    expect.assertions(1);
    expect(button).toBeInTheDocument();
  });

  it('should render the button with the text "Load more"', () => {
    const fn = jest.fn();
    render(<Button text='Load more' onClick={fn} disabled={false}/>);
    const button = screen.getByRole("button", { name: /load more/i });
    userEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text='Load more' onClick={fn} disabled={true}/>);
    const button = screen.getByRole("button", { name: /load more/i });
    userEvent.click(button);
    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text='Load more' onClick={fn} disabled={false}/>);
    const button = screen.getByRole("button", { name: /load more/i });
    userEvent.click(button);
    expect(button).toBeEnabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    const { container } = render(<Button text='Load more' onClick={fn} disabled={false}/>);
    expect(container.firstChild).toMatchSnapshot();
  });


});
