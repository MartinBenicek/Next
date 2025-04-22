"use client";

import { deleteGame, updateGame } from "@/app/server actions/games";
import { useState } from "react";
import { PencilLine, Trash2Icon } from "lucide-react";
import { games } from "@prisma/client";

const EditAndDelete = ({ game, index }: { game: games; index: number }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [tpm, setTpm] = useState(game.TypHry);
  const handleDelete = async () => {
    try {
      await deleteGame(game.id);
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting game:", error);
      alert("Failed to delete the game.");
    }
  };
  return (
    <>
      <td className="px-4 py-3 text-center h-full w-full md:h-auto md:w-auto">
        <PencilLine
          className="w-6 h-6 text-orange-500 cursor-pointer m-auto"
          onClick={() => setShowModal2(true)}
        />
      </td>
      <td className="px-4 py-3 text-center h-full w-full md:h-auto md:w-auto">
        <Trash2Icon
          className="w-6 h-6 text-red-500 cursor-pointer m-auto"
          onClick={() => setShowModal(true)}
        />
      </td>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Smazání hry</h2>
            <p>Opravdu chcete smazat {index} hru?</p>
            <div className="mt-4 flex gap-3">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => setShowModal(false)}
              >
                Zrušit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={handleDelete}
              >
                Smazat
              </button>
            </div>
          </div>
        </div>
      )}
      <td>
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${showModal2 ? "block" : "hidden"}`}
        >
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Úprava hry</h2>
            <form
              action={async (formData) => {
                updateGame(formData, game.id);
              }}
            >
              <div className="mb-4">
                <label className="font-medium mb-2">
                  Typ Hry
                  <select
                    name="TypHry"
                    className="border border-gray-300
                  rounded px-3 py-2 w-full"
                    onChange={(e) => setTpm(e.target.value)}
                    value={tpm}
                  >
                    <option value="Hra">Hra</option>
                    <option value="Sedma">Sedma</option>
                    <option value="Kilo">Kilo</option>
                    <option value="Stosedm">Stosedm</option>
                    <option value="Betl">Betl</option>
                    <option value="Durch">Durch</option>
                  </select>
                </label>
              </div>
              <div className="mb-4">
                <label className="font-medium mb-2">
                  Uhrané Body
                  <input
                    name="UhraneBody"
                    defaultValue={game.UhraneBody?.toString()}
                    disabled={tpm === "Kilo" ? false : true}
                    type="number"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="font-medium mb-2">
                  Hlášeno
                  <select
                    name="Hlaseno"
                    defaultValue={game.Hlaseno?.toString()}
                    disabled={tpm === "Sedma" || tpm === "Kilo" ? false : true}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  >
                    <option value="ne">ne</option>
                    <option value="ano">ano</option>
                  </select>
                </label>
              </div>
              <div className="mb-4">
                <label className="font-medium mb-2">
                  Cena
                  <input
                    name="Cena"
                    defaultValue={game.Cena?.toString()}
                    type="number"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </label>
              </div>
              <div className="mt-4 flex gap-3">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setShowModal2(false)}
                >
                  Zrušit
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => setShowModal2(false)}
                >
                  Uložit změny
                </button>
              </div>
            </form>
          </div>
        </div>
      </td>
    </>
  );
};

export default EditAndDelete;
