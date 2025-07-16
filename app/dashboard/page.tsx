import { getServerSession } from "next-auth/next";
import { authOptions } from "@/libs/next-auth";
import { redirect } from "next/navigation";
import config from "@/config";
import ButtonAccount from "@/components/ButtonAccount";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(config.auth.loginUrl);
  }

  return (
    <main className="min-h-screen p-8 pb-24 bg-brand-light-gray">
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-dark-blue">
              Welcome, {session.user?.name || 'User'}!
            </h1>
            <p className="text-gray-600 mt-2">
              Here's your personal dashboard. Let's get you ready for the FTCE.
            </p>
          </div>
          <ButtonAccount />
        </div>

        {/* Placeholder for dashboard content */}
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-brand-dark-blue">Your Study Plan</h2>
          <p className="text-gray-500 mt-4">Your personalized study plan and progress will appear here soon. Start a session to get started!</p>
        </div>
      </section>
    </main>
  );
}
