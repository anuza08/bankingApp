import HeaderBox from "@/components/headerBox";
import RightSideBar from "@/components/rightSideBar";
import TotalBalnaceBox from "@/components/totalBalnaceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Greetings"}
            subtext="Access and manage your account and transction efficiently."
          />

          <TotalBalnaceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        <RightSideBar
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance: 123.5 }, { currentBalance: 123.5 }]}
        />
      </div>
    </section>
  );
};

export default Home;
