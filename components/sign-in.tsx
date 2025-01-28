import { signIn } from "@/lib/auth";

export default function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("google");
        await signIn("resend", formData);
      }}
    >
      <button type="submit">Signin</button>
    </form>
  );
}
