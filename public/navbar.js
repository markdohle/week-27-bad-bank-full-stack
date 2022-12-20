function NavBarComponent() {

    return(
        <nav
            className       ="navbar navbar-expand-lg navbar-light bg-light">
            <a
                className       ="navbar-brand"
                href            ="#"
                >FTX
            </a>
            <button
                className       ="navbar-toggler"
                type            ="button"
                data-toggle     ="collapse" 
                data-target     ="#navbarNav"
                aria-controls   ="navbarNav"
                aria-expanded   ="false"
                aria-label      ="Toggle navigation">
                <span
                    className       ="navbar-toggler-icon"
                ></span>
            </button>

            <div
                className       ="collapse navbar-collapse"
                id              ="navbarNav">
                <ul className       ="navbar-nav">
                    <li className       ="nav-item">
                        <a
                            className       ="nav-link"
                            href            ="#createAccount"
                            id              ="createAccount"
                            >Create Account
                        </a>
                    </li>
                    <li className       ="nav-item">
                        <a
                            className       ="nav-link"
                            href            ="#login"
                            id              ="login"
                            >Login
                        </a>
                    </li>
                    <li className       ="nav-item">
                        <a
                            className       ="nav-link"
                            href            ="#deposit"
                            id              ="Deposit"
                            >Deposit
                        </a>
                    </li>
                    <li className       ="nav-item">
                        <a
                            className       ="nav-link"
                            href            ="#withdraw"
                            id              ="withdraw"
                            >Withdraw
                        </a>
                    </li>
                    <li className       ="nav-item">
                        <a
                            className       ="nav-link"
                            href            ="#balance"
                            id              ="balance"
                            >Balance
                        </a>
                    </li>
                    <li className       ="nav-item">
                        <a
                            className       ="nav-link"
                            href            ="#alldata"
                            id              ="allData"
                            >All Data
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};