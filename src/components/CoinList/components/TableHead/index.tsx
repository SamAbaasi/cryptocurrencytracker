const TableHead = () => {
    return (
      <thead className="border-solid border-b-[1px] border-grey-400">
        <tr>
          <th className="pl-2 py-4 w-16 text-left">#</th>
          <th className="py-4 w-[19em] text-left text-uppercase">Coins</th>
          <th className="py-4 w-52 text-right text-uppercase">Price</th>
          <th className="py-4 w-24 text-right text-uppercase">24h</th>
          <th className="py-4 w-[16rem] text-right text-uppercase">7d</th>
          <th className="pr-2 py-4 w-[17rem] text-right text-uppercase">Market Cap</th>
          <th className="py-4 w-[16rem] text-right text-uppercase">Total Volume</th>
        </tr>
      </thead>
    );
  };
  export default TableHead;
  