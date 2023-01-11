function SinglePageApplicationComponent() {
    return(
       <HashRouter>
            <div>
                <NavBarComponent/>
                <UserContext.Provider
                    value={
                        {
                            user:[
                                {
                                    _id: 'login to your account',
                                    name: 'login',
                                    email: 'login',
                                    password: 'login',
                                    balance: 0
                                }
                            ]
                        }
                    }
                >This is what is inside the UserContext.Provider tag
                    <div
                        className="container"
                        style={{padding: "20px"}}
                    >
                        <Route path="/"                 exact component ={HomeComponent} />
                        <Route path="/createaccount/"   component       ={CreateAccountComponent} />
                        <Route path="/alldata/"         component       ={AllDataComponent} />
                        <Route path="/deposit/"         component       ={DepositComponent} />
                        <Route path="/withdraw/"        component       ={WithdrawComponent} />
                        <Route path="/login/"           component       ={LoginComponent} />
                        <Route path="/balance/"         component       ={BalanceComponent} />
                    </div>
                </UserContext.Provider>
            </div>

       </HashRouter>
    )
};


//===Target the .html element id="root"=========
ReactDOM.render(
    <SinglePageApplicationComponent/>,
    document.getElementById('root')
);