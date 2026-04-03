import { StaticPage, Section, InfoCard } from "@/components/StaticPage";

export default function PrivacyPage() {
  return (
    <StaticPage title="Privacy Policy" date="January 2026">
      <Section title="Introduction">
        <p>Uncertain Systems (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website uncertainsystems.dev and use our services.</p>
      </Section>

      <Section title="Information We Collect">
        <h3 className="font-[family-name:var(--font-display)] text-marble-white mb-2">Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide when you contact us, subscribe to updates, contribute to our open source projects, or participate in our community platforms. This may include name, email address, and any other information you choose to provide.</p>
        <h3 className="font-[family-name:var(--font-display)] text-marble-white mb-2 mt-4">Automatically Collected Information</h3>
        <p>When you visit our website, we may automatically collect certain information about your device, including browser type, IP address, time zone, and some cookies. We also collect information about the pages you view and how you interact with our website.</p>
      </Section>

      <Section title="How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Respond to your inquiries and provide support</li>
          <li>Send you updates about our projects (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Analyze website usage and trends</li>
          <li>Protect against fraud and unauthorized access</li>
          <li>Comply with legal obligations</li>
        </ul>
      </Section>

      <Section title="Sharing Your Information">
        <p>We may share your information with:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong className="text-marble-white">Service Providers:</strong> Who help us operate our website (hosting, analytics, email services).</li>
          <li><strong className="text-marble-white">Legal Requirements:</strong> If required by law or in response to valid legal requests.</li>
          <li><strong className="text-marble-white">Open Source Contributions:</strong> Your contributions and associated metadata will be publicly visible.</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </Section>

      <Section title="Data Security">
        <p>We implement appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission over the Internet can be guaranteed to be 100% secure.</p>
      </Section>

      <Section title="Your Rights (GDPR)">
        <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong className="text-marble-white">Access:</strong> Request access to your personal data</li>
          <li><strong className="text-marble-white">Rectification:</strong> Request correction of inaccurate data</li>
          <li><strong className="text-marble-white">Erasure:</strong> Request deletion of your personal data</li>
          <li><strong className="text-marble-white">Restriction:</strong> Request restriction of processing</li>
          <li><strong className="text-marble-white">Portability:</strong> Request transfer of your data</li>
          <li><strong className="text-marble-white">Objection:</strong> Object to processing of your data</li>
          <li><strong className="text-marble-white">Withdraw Consent:</strong> Withdraw consent at any time</li>
        </ul>
        <p>To exercise these rights, please contact us at hello@uncertainsystems.dev.</p>
      </Section>

      <Section title="Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated revision date.</p>
      </Section>

      <Section title="Contact Us">
        <InfoCard>
          <p><strong className="text-gold">Email:</strong> hello@uncertainsystems.dev</p>
          <p><strong className="text-gold">Company:</strong> Uncertain Systems (Daniel Colomer)</p>
          <p><strong className="text-gold">Location:</strong> Barcelona, Spain</p>
        </InfoCard>
      </Section>
    </StaticPage>
  );
}
