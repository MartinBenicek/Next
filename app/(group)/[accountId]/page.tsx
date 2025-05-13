import { getGames } from "@/app/server actions/games";
import getUser from "@/app/server actions/getUser";
import EditAndDelete from "@/components/EditAndDelete";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Historie her",
  description: "Zobrazení svých odehraných her v Mariáši.",
};

const Page = async ({
  params: paramsPromise,
}: {
  params: Promise<{ accountId: string }>;
}) => {
  const user = await getUser();
  const params = await paramsPromise;
  if (user?.id !== params.accountId) {
    redirect("/");
  }
  const games = await getGames();
  return (
    <>
      <main className="flex flex-col items-center py-[5vh] gap-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">Vaše hry</h1>
        {games && games.length > 0 ? (
          <p className="text-xl lg:text-2xl">
            Celkové množstí peněz za hry:{" "}
            {games && games.length > 0
              ? games.slice().reduce((acc, game) => {
                  return acc + game.Cena;
                }, 0)
              : null}
          </p>
        ) : (
          <p className="text-xl lg:text-2xl">Nemáte zatím žádné hry.</p>
        )}

        {games && games.length > 0 ? (
          <div className="overflow-x-auto w-full lg:w-auto">
            <table className="border-collapse w-full lg:w-auto">
              <thead className="sticky top-0 bg-orange-400 text-white z-10">
                <tr>
                  <th className="px-4 py-2">Číslo hry</th>
                  <th className="px-4 py-2">Typ Hry</th>
                  <th className="px-4 py-2">Hlášeno</th>
                  <th className="px-4 py-2">Uhrané Body</th>
                  <th className="px-4 py-2">Cena</th>
                  <th className="px-4 py-2">Datum</th>
                  <th className="px-4 py-2">Čas</th>
                  <th className="px-4 py-2">Upravit</th>
                  <th className="px-4 py-2">Smazat</th>
                </tr>
              </thead>
              <tbody>
                {games &&
                  games.map((game, index) => (
                    <tr
                      key={game.id}
                      className="border-b border-orange-200 hover:bg-orange-50 text-center"
                    >
                      <td className="px-4 py-3">{games.length - index}</td>
                      <td className="px-4 py-3">{game.TypHry}</td>
                      <td className="px-4 py-3">
                        {(game.TypHry === "Sedma" ||
                          game.TypHry === "Kilo" ||
                          game.TypHry === "Stosedm") &&
                          game.Hlaseno}
                      </td>
                      <td className="px-4 py-3">
                        {game.UhraneBody && game.UhraneBody > 0
                          ? game.UhraneBody
                          : ""}
                      </td>
                      <td className="px-4 py-3">{game.Cena}</td>
                      <td className="px-4 py-3">
                        {game.created.toLocaleDateString("cs-CZ")}
                      </td>
                      <td className="px-4 py-3">
                        {game.created.toLocaleTimeString("cs-CZ", {
                          timeZone: "Europe/Prague",
                        })}
                      </td>
                      <EditAndDelete game={game} index={games.length - index} />
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </main>
      <SpeedInsights />
    </>
  );
};

export default Page;
