//State: status,name, email, password, UserContext
/*
Show if or else:

field
    1. styling
    2. value
    3. onChange event
button
    1. handle event
*/


function CreateAccountComponent() {
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');

    return(
        <CardComponent
            bgcolor ="primary"
            header  ="Create Account Card Component"
            status  ={status}
            body    ={show ?
                //setShow={setShow} allows for CreatFormComponent() to props.setShow(false) & to props.setStatus(...)
                <CreateAccountFormComponent    setShow={setShow} setStatus={setStatus}/> :
                <CreateAccountMsgComponent     setShow={setShow} setStatus={setStatus}/>
            }
        />
    );
}

function CreateAccountMsgComponent(props){
    return(
        <>
            <h5>
                Success! Login to make a deposit.
            </h5>
            <button
                type="submit"
                className="btn btn-light"
                onClick={() => props.setShow(true)} //<-------shows the blank create account form
            >Add another account
            </button>
        </>
    );
}

function CreateAccountFormComponent(props){
    const [name, setName]           = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');

    //triggered by handleCreate() to validate the input fields. For Create Account, validate name password and email. In this, just check for an empty field.
  function validate(field, label, password){
    if (!field) {
        props.setStatus('Error: ' + label);
        setTimeout(() => props.setStatus(''),3000);
        return false;
    }
    if (password.length < 8) {
        props.setStatus('Error: password requires at least 8 characters');
        setTimeout(() => props.setStatus(''),3000);
        return false;
    }
    return true;
    }
    
    
    function handleCreateAccount(){

        if (!validate(name,'name', password))     return;
        if (!validate(email,'email', password))   return;

        console.log(name,email,password);
        //call to the Node Express Appliocation backend route "app.get('/account/create/:name/:email/:password', function (req, res) {...})" in index.js   

        const url = `account/create/${name}/${email}/${password}`;  //<------http://localhost:3000/account/create/kate/kate@mit.edu/secret
        (async () => {
            const res   = await fetch(url);
            const data  = await res.json();
            console.log(data);
        })();
        props.setShow(false);
    }

    return (
        <>
            Name
            <br/>
            <input
                type        ="input"
                className   ="form-control"
                placeholder ="Enter name"
                value       ={name}
                onChange    ={e => setName(e.currentTarget.value)}
            />
            <br/>

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
                onClick     ={handleCreateAccount}
            >CreateAccountFormComponent 
            </button>
        </>
    );
}