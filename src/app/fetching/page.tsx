async function getData() {
  const res = await fetch("http://localhost:3000/api/check", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed fetched data");
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <>
      <h1>Test fetching motherfucker</h1>
      <div>{data.status}</div>
    </>
  );
}
