import { SalesProps } from "@/types";

const SalesCard = (props: SalesProps) => {
  return (
    <section className="flex flex-wrap justify-between gap-3">
      <div className="flex justify-between gap-3">
        {/* Aqui vc pode usar o component Image do NEXTJS */}
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <img
            width={200}
            height={200}
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${props.name}`}
            alt="avatar"
          />
        </div>

        <div className="text-sm">
          <p>{props.name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
            {props.email}
          </div>
        </div>
      </div>
      <p>{props.saleAmount}</p>
    </section>
  );
};

export default SalesCard;
