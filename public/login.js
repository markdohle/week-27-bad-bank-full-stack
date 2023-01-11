

function LoginComponent(){
    

    const [show, setShow]               = React.useState(true);
    const [status, setStatus]           = React.useState('');
    
    return(
        <CardComponent
            bgcolor ="primary"
            header  ="Login Form"
            status  ={status} //<-----message to the UI telling the user about errors and login status.
            body    ={show ?
                //setShow={setShow} allows for CreatFormComponent() to props.setShow(false) & to props.setStatus(...)
                <CreateLoginFormComponent
                    setShow={setShow}
                    setStatus={setStatus}
                    status={status}
                    /> :
                <CreateLoginMsgComponent     
                    setShow={setShow} 
                    setStatus={setStatus}
                    status={status}
                    />
            }
        />
    );
}

function CreateLoginMsgComponent(props){

    function handleLoginMsg() {

        props.setShow(true)
        props.setStatus(`${props.status}, login to a new account?`)
        console.log(props.user)

    }

    return(
        <>
            <h5>
                {props.status}
            </h5>
            <button
                type="submit"
                className="btn btn-light"
                onClick={handleLoginMsg} //<-------shows the blank create account form
            >Login
            </button>
        </>
    );
}

function CreateLoginFormComponent(props){
    const ctx = React.useContext(UserContext);

    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    
    function handleLogin(){
      
      //call to the Node Express Appliocation backend route "app.get('/account/create/:name/:email/:password', function (req, res) {...})" in index.js   
        const url = `account/login/${email}/${password}`;     //<------http://localhost:3000/account/login/kate@mit.edu/secret
        (async () => {
            const res   = await fetch(url);
            const documentMongoDB  = await res.json();      //<-----data document for the person who logged in

            //<-----replace the content in the user array with the document from MongoDB
            ctx.user = documentMongoDB
            console.log(documentMongoDB)
            props.setStatus(`${documentMongoDB[0].name} is logged in`)
    
            })();

        props.setShow(false);
        
    }
    return (
        <>
        Email Address
        <br/>
        <input
            type        ="input"
            className   ="form-control"
            placeholder ="Enter email"
            value       ={email}
            onChange    ={e => setEmail(e.currentTarget.value)}
        />
        <br/>
        
        Password
        <br/>
        <input
            type        ="input"
            className   ="form-control"
            placeholder ="Enter password"
            value       ={password}
            onChange    ={e => setPassword(e.currentTarget.value)}
        />
        <br/>
        
        <button
            type        ="submit"
            className   ="btn btn-light"
            onClick     ={handleLogin}
        >Login
        </button>
        </>
    );
}