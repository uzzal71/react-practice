const App = () => {
  let marks=80;
  let cities=['Dhaka','London','Delhi','Kolkata'];
  const status=true;
  const LoginStatusBtn=(status)=>{
    if (status) return <button>Logout Btn</button>
    else return <button>Login Btn</button>
  }
  return (
    <div>
      <h1>Login status</h1>
      {LoginStatusBtn(false)}
    </div>
  )
};

export default App;