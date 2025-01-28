import { signOut } from "@/lib/auth";

export default function SignOutPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign out
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Are you sure you want to sign out?
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          action={async (formData) => {
            "use server";
            await signOut({ redirectTo: "/", redirect: true });
          }}
        >
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
            >
              Sign out
            </button>
          </div>
        </form>
        <div className="text-center">
          <a
            href="/"
            className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
          >
            Cancel and return to home
          </a>
        </div>
      </div>
    </div>
  );
}
