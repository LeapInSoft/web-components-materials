import { Header } from "./wcf-header";

it('should return title header', () => {
    const header = new Header();
    expect(header.shadowRoot?.querySelector('.header__title')?.textContent).toBe('Web Components Bets Application')
});