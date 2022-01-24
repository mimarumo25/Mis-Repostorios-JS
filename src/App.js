import AppRouter from "./routes/AppRouter";


function App() {
  return (
    <div>
      <AppRouter/>

      {/*<BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>*/}
    </div>
  );
}

export default App;
