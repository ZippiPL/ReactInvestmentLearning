import logo from "../assets/investment-calculator-logo.png"
export default function Header() {
    return (<header id="header">
        <img id="header img" src={logo} alt="logo-investment" />
        <h1 id="header h1">Investment Calculator</h1>
    </header>);
}