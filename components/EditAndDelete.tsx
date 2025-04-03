"use client";

import { deleteGame } from "@/app/server actions/games";
import { useState } from "react";
import { Trash2Icon } from "lucide-react";

const EditAndDelete = ({
  gameId,
  index,
}: {
  gameId: number;
  index: number;
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleDelete = async () => {
    try {
      await deleteGame(gameId);
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting game:", error);
      alert("Failed to delete the game.");
    }
  };
  return (
    <>
      <td className="px-4 py-3">
        <button>Upravit</button>
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
    </>
  );
};

export default EditAndDelete;
