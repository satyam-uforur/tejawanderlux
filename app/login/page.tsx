import { Suspense } from "react";
import LoginPageClient from "./LoginPageClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <LoginPageClient />
    </Suspense>
  );
}
