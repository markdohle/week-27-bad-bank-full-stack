const Route             = ReactRouterDOM.Route;
const Link              = ReactRouterDOM.Link;
const HashRouter        = ReactRouterDOM.HashRouter;
const AuthUserContext   = React.createContext(null);

function AuthUserContextProvider(props) {
    const [authUser, setAuthUser]   = React.useState('login')
    return (
        <AuthUserContext.Provider value = {authUser}>
        </AuthUserContext.Provider>
    );
}