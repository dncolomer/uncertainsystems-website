import { StaticPage, Section, InfoCard } from "@/components/StaticPage";

export default function CookiesPage() {
  return (
    <StaticPage title="Cookie Policy" date="January 2026">
      <Section title="What Are Cookies">
        <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.</p>
      </Section>

      <Section title="How We Use Cookies">
        <p>Uncertain Systems uses cookies for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong className="text-marble-white">Essential Cookies:</strong> Required for the website to function properly, including basic navigation and security features.</li>
          <li><strong className="text-marble-white">Analytics Cookies:</strong> Help us understand how visitors interact with our website so we can improve it.</li>
          <li><strong className="text-marble-white">Preference Cookies:</strong> Remember your preferences and settings to enhance your experience.</li>
        </ul>
      </Section>

      <Section title="Types of Cookies We Use">
        <h3 className="font-[family-name:var(--font-display)] text-marble-white mb-2">Essential Cookies</h3>
        <div className="overflow-x-auto bg-black/20 rounded-lg mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left p-3 text-gold text-xs uppercase border-b border-gold/20">Cookie</th>
                <th className="text-left p-3 text-gold text-xs uppercase border-b border-gold/20">Purpose</th>
                <th className="text-left p-3 text-gold text-xs uppercase border-b border-gold/20">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border-b border-gold/10">session_id</td><td className="p-3 border-b border-gold/10">Maintains session state</td><td className="p-3 border-b border-gold/10">Session</td></tr>
              <tr><td className="p-3">csrf_token</td><td className="p-3">Security protection</td><td className="p-3">Session</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-[family-name:var(--font-display)] text-marble-white mb-2">Analytics Cookies</h3>
        <div className="overflow-x-auto bg-black/20 rounded-lg">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left p-3 text-gold text-xs uppercase border-b border-gold/20">Cookie</th>
                <th className="text-left p-3 text-gold text-xs uppercase border-b border-gold/20">Purpose</th>
                <th className="text-left p-3 text-gold text-xs uppercase border-b border-gold/20">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border-b border-gold/10">_ga</td><td className="p-3 border-b border-gold/10">Google Analytics - Distinguishes users</td><td className="p-3 border-b border-gold/10">2 years</td></tr>
              <tr><td className="p-3">_gid</td><td className="p-3">Google Analytics - Distinguishes users</td><td className="p-3">24 hours</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Managing Cookies">
        <p>You can control and manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites.</p>
        <div className="bg-gold/5 border-l-3 border-gold p-4 rounded-r-lg mt-4">
          <p className="text-sm text-marble-white/70"><strong className="text-gold">Note:</strong> Disabling cookies may affect the functionality of our website and limit your ability to use certain features.</p>
        </div>
      </Section>

      <Section title="Contact Us">
        <InfoCard>
          <p><strong className="text-gold">Email:</strong> hello@uncertainsystems.dev</p>
        </InfoCard>
      </Section>
    </StaticPage>
  );
}
