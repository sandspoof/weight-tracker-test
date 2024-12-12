import FormValues from "../pages/Login/Login.model";

const ApiUrl = import.meta.env.VITE_API_URL;

function LogIn({ user }: { user: FormValues }): Promise<boolean> {
  // Move API Url into env file.
  return fetch(`${ApiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (!response.ok) return false;

      return true;
    })
    .catch((error) => {
      console.error("Error:", error);
      return false;
    });
}

export { LogIn };
