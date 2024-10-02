// import HeaderBox from "@/components/headerBox";
import HeaderBox from "@/components/headerBox";
import RightSideBar from "@/components/rightSideBar";
import TotalBalnaceBox from "@/components/totalBalnaceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Anuja",
    lastName: "Shinde",
    email: "anujashinde@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Greetings"}
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
