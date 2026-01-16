import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpeakUpDashboard from "./pages/SpeakUpDashboard";
import ActiveRoom from "./pages/ActiveRoom";

function App() {
  return (
    <div className="dark min-h-screen bg-bgMain text-white font-sans overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SpeakUpDashboard />} />
          <Route path="/room/:id" element={<ActiveRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
