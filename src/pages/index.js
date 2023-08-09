import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Explore from "./Explore02";
import Home from "./Home";
import Ranking from "./Ranking";
import Wallet from "./Wallet";
import ItemDetails from "./ItemDetails";



const routes = [
  { path: '/', component: <Home /> },
  { path: '/explore', component: <Explore /> },
  { path: '/dashboard', component: <Dashboard /> },
  { path: '/ranking', component: <Ranking /> },
  { path: '/wallet', component: <Wallet /> },
  { path: '/contact', component: <Contact /> },
  { path: '/item-details', component: <ItemDetails /> },
]

export default routes;