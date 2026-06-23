import { Suspense } from "react";
import LoginContent from "./LoginContent";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl font-semibold">Loading...</div>
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
