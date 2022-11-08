import { useState, createContext, useEffect } from "react";

import AlbumsContent from "./modules/AlbumsContent";
import BandContent from "./modules/BandContent";
import BannerImage from "./modules/BannerImage";
import ContactContent from "./modules/ContactContent";
import Footer from "./modules/Footer";
import Navbar from "./modules/Navbar";
import ShowsContent from "./modules/ShowsContent";
import TicketBooking from "./modules/TicketBooking";
import TicketSidebar from "./modules/TicketSidebar";
import SignIn from "./modules/SignIn";
import Loader from "./components/Loader";
import SignUp from "./modules/SignUp";

import { useDispatch, useSelector } from "react-redux";
import { getCommonInfo } from "./redux/slices/commonInfoSlice";
import { setLoginInfo } from "./redux/slices/loginSlice";

export const TicketSidebarContext = createContext();

function App() {
  const [openTicketSidebar, setOpenTicketSidebar] = useState(false);

  const dispatch = useDispatch();

  const { error, loading } = useSelector((state) => state.commonInfo);

  useEffect(() => {
    // get common info
    dispatch(getCommonInfo());

    //set login info when reload
    const id = localStorage.getItem("_id");
    const fullName = localStorage.getItem("fullName");
    const phone = localStorage.getItem("phone");
    const email = localStorage.getItem("email");

    dispatch(
      setLoginInfo({ _id: id, fullName: fullName, phone: phone, email: email })
    );
  }, [dispatch, error]);

  return (
    <div className="App relative">
      <TicketSidebarContext.Provider
        value={{ openTicketSidebar, setOpenTicketSidebar }}
      >
        <Navbar />
      </TicketSidebarContext.Provider>

      {loading ? (
        <Loader cssClass="h-12 w-12 border-4 mt-[150px]" loading={loading} />
      ) : (
        <>
          <BannerImage />
          <BandContent />
          <ShowsContent />
          <AlbumsContent />
          <ContactContent />
          <Footer />

          <TicketSidebarContext.Provider
            value={{ openTicketSidebar, setOpenTicketSidebar }}
          >
            <TicketSidebar />
          </TicketSidebarContext.Provider>

          <TicketBooking />
          <SignIn />
          <SignUp />
        </>
      )}
    </div>
  );
}

export default App;
