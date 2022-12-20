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
    const [show, setShow]       = React.useState(true);
    const [status, setStatus]   = React.useState('');


    return(
        <CardComponent
            bgcolor ="primary"
            header  ="Create Account"
            status  ={status}
            body    ={show ?
                <CreateFormComponent setShow={setShow}/> :
                <CreateMsgComponent setShow={setShow}/>
            }
        />
    );
}

function CreateMsgComponent(props){
    return(
        <>
            <h5>
                Success
            </h5>
            <buttton
                type="submit"
                className="btn btn-light"
                onClick={() => props.setshow(true)}
            >Add another account
            </buttton>
        </>
    );
}

function CreateFormComponent(props){
    const [name, setName]           = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');

    function handle(){
        console.log(name,email,password);
        //call to the backend route!
        const url = `account/create/${name}/${email}/${password}`;
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
                onClick     ={handle}
            >Create Account
            </button>
        </>
    );
}