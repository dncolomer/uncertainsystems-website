import { StaticPage, Section, InfoCard } from "@/components/StaticPage";

export default function TermsPage() {
  return (
    <StaticPage title="Terms & Conditions" date="January 2026">
      <Section title="Agreement to Terms">
        <p>By accessing or using the Uncertain Systems website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>
      </Section>

      <Section title="Our Services">
        <p>Uncertain Systems develops open source educational technology tools. Our services include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Open source software projects (openLesson, GHC Benchmark, and more)</li>
          <li>Documentation and educational resources</li>
          <li>Community platforms and collaboration tools</li>
          <li>Related products and services under the Uncertain Systems brand</li>
        </ul>
      </Section>

      <Section title="Open Source Licensing">
        <p>Our open source projects are released under their respective licenses (typically MIT, Apache 2.0, or similar permissive licenses). Each project&apos;s repository contains its specific license terms.</p>
        <p>By contributing to our projects, you agree that your contributions will be licensed under the same license as the project you&apos;re contributing to.</p>
      </Section>

      <Section title="User Conduct">
        <p>When using our services or contributing to our projects, you agree to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Follow our community guidelines and code of conduct</li>
          <li>Respect the intellectual property rights of others</li>
          <li>Not use our services for any unlawful purpose</li>
          <li>Not attempt to interfere with the proper functioning of our services</li>
          <li>Not harass, abuse, or harm other users or contributors</li>
        </ul>
      </Section>

      <Section title="Disclaimer of Warranties">
        <p>Our services and software are provided &quot;as is&quot; without any warranties, express or implied. We do not warrant that our services will be uninterrupted, secure, or error-free. Open source software is provided without warranty of any kind.</p>
      </Section>

      <Section title="Limitation of Liability">
        <p>To the maximum extent permitted by law, Uncertain Systems shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or software.</p>
      </Section>

      <Section title="Governing Law">
        <p>These Terms shall be governed by and construed in accordance with the laws of Spain, without regard to its conflict of law provisions.</p>
      </Section>

      <Section title="Contact Information">
        <InfoCard>
          <p><strong className="text-gold">Email:</strong> hello@uncertainsystems.dev</p>
          <p><strong className="text-gold">Company:</strong> Uncertain Systems (Daniel Colomer)</p>
          <p><strong className="text-gold">Location:</strong> Barcelona, Spain</p>
        </InfoCard>
      </Section>
    </StaticPage>
  );
}
