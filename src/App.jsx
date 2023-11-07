const App = () => {
  let marks=80;
  let cities=['Dhaka','London','Delhi','Kolkata'];
  const status=false;
  const LoginStatusBtn=(status)=>{
    if (status) return <button>Logout Btn</button>
    else return <button>Login Btn</button>
  }
  
  return (
    <div>
      <h1>Login Status</h1>
      {(() => {
        if (status) return <button>Logout Button</button>
        else return <button>Login Button</button>
      })()}
    </div>
  );
};

export default App;