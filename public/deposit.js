

function DepositComponent() {
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    
    
    
    return(
        <CardComponent
            bgcolor ="primary"
            header  ="Deposit Form"
            status  ={status} //<-----message to the UI telling the user about errors and login status.
            body    ={show ?
                //setShow={setShow} allows for CreatFormComponent() to props.setShow(false) & to props.setStatus(...)
                <CreateDepositFormComponent
                    setShow={setShow}
                    setStatus={setStatus}
                    /> :
                <CreateDepositMsgComponent     
                    setShow={setShow} 
                    setStatus={setStatus}
                    status={status}
                    />
            }
        />
    )
}

function CreateDepositMsgComponent(props){
    const ctx = React.useContext(UserContext);

    function handleDepositMsg() {

        props.setShow(true)

    }

    return(
        <>
            <h5>
                New Balance = {ctx.user[0].balance}
            </h5>
            <button
                type="submit"
                className="btn btn-light"
                onClick={handleDepositMsg} //<-------shows the blank create account form
            >Submit
            </button>
        </>
    );
}

function CreateDepositFormComponent(props){
    const ctx = React.useContext(UserContext);
    
    const [amount, setAmount]       = React.useState('');
    const balance = ctx.user[0].balance;
        

    let email = ctx.user[0].email
    

    function handleDeposit() {
        

        const url = `account/balance/${email}/${amount}`;     //<------http://localhost:3000/account/login/kate@mit.edu/secret
        (async () => {
            const res   = await fetch(url);
            })();
        ctx.user[0].balance = Number(balance) + Number(amount);
        props.setShow(false);
    }

    return (
        <>
        <div
            text="card-body">
            { ctx.user[0].name }'s Balance: { balance }
        </div>
        <br/>
        <input
            type        ="input"
            className   ="form-control"
            placeholder ="Enter deposit amount"
            value       ={amount}
            onChange    ={e => setAmount(e.currentTarget.value)}
        />
        <br/>
        <button
            type        ="submit"
            className   ="btn btn-light"
            onClick     ={handleDeposit}
        >Submit
        </button>
        </>
    );


};