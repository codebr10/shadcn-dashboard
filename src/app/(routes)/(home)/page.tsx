import BarChart from "@/components/barChart";
import Card, { CardContent } from "@/components/card";
import PageTitle from "@/components/pageTitle";
import SalesCard from "@/components/salesCard";
import { seed } from "@/data/seed";

const HomePage = () => {
  const { cardData, usersData } = seed;
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />

      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((card) => (
          <Card
            key={card.id}
            amount={card.amount}
            discription={card.discription}
            icon={card.icon}
            label={card.label}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent className="justify-between">
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>

        <CardContent className="flex justify-between gap-4">
          <p className="p-4 font-semibold">Recent Sales</p>
          {usersData.map((user) => (
            <SalesCard
              key={user.id}
              email={user.email}
              name={user.name}
              saleAmount={user.saleAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
};

export default HomePage;
