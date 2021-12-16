import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <button onClick={logout}>Logout</button>
    </div>
  );
}
