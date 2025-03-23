import getUser from "@/app/server actions/getUser";

const page = async () => {
  const user = await getUser();
  return (
    <main>
      <div>
        <h1 className="text-3xl">{user?.id}</h1>
        <h2 className="text-3xl">{user?.email}</h2>
      </div>
    </main>
  );
};

export default page;
