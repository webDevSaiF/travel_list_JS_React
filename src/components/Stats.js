export default function Stats({ item }) {
  const totalItem = item.length;
  const totalPacked = item.filter((el) => el.packed).length;
  const totalPercentage = Math.round((totalPacked / totalItem) * 100);

  return (
    <footer className="stats">
      <em>
        {totalItem
          ? `You have ${totalItem} items on your list, and you already packed 
        ${totalPacked} (${totalPercentage}%)`
          : `Start adding some items on your packing list...`}
      </em>
    </footer>
  );
}
