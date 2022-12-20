function SinglePageApplicationComponent() {
    return(
       <HashRouter>
            <div>
                <NavBarComponent/>
                <UserContext.Provider
                    value={
                        {
                            users:[
                                {
                                    name: 'mark',
                                    email: 'mark@mit.edu',
                                    password: 'secret',
                                    balance: 100
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